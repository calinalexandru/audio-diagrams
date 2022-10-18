import styled from '@emotion/styled';
import { h, } from 'preact';
import { forwardRef, useCallback, } from 'preact/compat';
import useNodes from '../hooks/useNodes';
import useWiring from '../hooks/useWiring';
import {
  Center,
  CenterContent,
  CenterTitle,
  Container,
  IOButton,
  Title,
} from '../primitives/Container';
import { useImmerx, } from '../store/state';

const xVarName = '--x';
const yVarName = '--y';

const RemoveButton = styled.button`
  cursor: pointer;
  color: #fff;
  position: absolute;
  right: -14px;
  background: unset;
  border: 0;
  font-size: 10px;
  top: -10px;
  text-shadow: 1px 1px black;
  width: 17px;
  height: 17px;
  margin: 0;
  padding: 0;

  &:hover {
    background: #cccccc33;
    border-radius: 50%;
  }
  &:active {
    background: #ff000033;
  }
`;

const BoxNode = forwardRef(
  (
    {
      index,
      dragRef,
      color,
      style,
      children,
      name,
      canRemove = true,
      canOutput = true,
      canInput = true,
    },
    ref,
  ) => {
    const [connecting,] = useImmerx({
      get: (state,) => state.connecting,
    },);
    const [wires,] = useImmerx({
      get: (state,) => state.wires,
    },);
    console.log('wires', wires,);
    const { addToConnecting, } = useWiring();
    const { remove, } = useNodes();

    const isActive = useCallback(
      (dir,) =>
        connecting.find(
          ({ index: i, direction, },) => index === i && direction === dir,
        ),
      [connecting, index,],
    );

    const isWireConnected = useCallback(
      (dir,) =>
        wires.find(
          ({ from, to, },) => (dir === 'output' && from === index) || to === index,
        ),
      [wires, index,],
    );

    return (
      <Container
        style={{
          top: `var(${yVarName})`,
          left: `var(${xVarName})`,
          borderColor: color,
          ...style,
        }}
        ref={ref}
      >
        {canInput && (
          <IOButton
            active={isActive('input',)}
            color={color}
            connected={isWireConnected('input',)}
            left
            onClick={() => {
              addToConnecting(index, 'input',);
            }}
          >
            &nbsp;
          </IOButton>
        )}
        <Center ref={dragRef}>
          <CenterTitle>
            <Title>{name}</Title>
          </CenterTitle>
          <CenterContent>{children}</CenterContent>
        </Center>
        {canRemove && (
          <RemoveButton
            onClick={() => {
              remove(index,);
            }}
          >
            X
          </RemoveButton>
        )}
        {canOutput && (
          <IOButton
            right
            color={color}
            connected={isWireConnected('output',)}
            active={isActive('output',)}
            onClick={() => {
              addToConnecting(index, 'output',);
            }}
          >
            &nbsp;
          </IOButton>
        )}
      </Container>
    );
  },
);

export default BoxNode;
