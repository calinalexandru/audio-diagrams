import styled from '@emotion/styled';
import { h, } from 'preact';
import { forwardRef, useCallback, useEffect, useMemo, } from 'preact/compat';
import useMouseMove from '../hooks/useMouseMove';
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

const lens = {
  get: (state,) => ({
    connecting: state.connecting,
    wires: state.wires,
    scale: state.scale,
    nodes: state.nodes,
    positions: state.positions,
  }),
};

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
    const [{ connecting, wires, scale, nodes, positions, },] = useImmerx(lens,);
    const position = useMemo(() => positions[index], [index, positions,],);

    // const [connecting,] = useImmerx({
    //   get: (state,) => state.connecting,
    // },);
    // const [wires,] = useImmerx({
    //   get: (state,) => state.wires,
    // },);
    // const [scale,] = useImmerx({
    //   get: (state,) => state.scale,
    // },);
    // const [nodes,] = useImmerx({
    //   get: (state,) => state.nodes,
    // },);
    // const [position,] = useImmerx({
    //   get: (state,) => state.positions[index],
    // },);

    // console.log({ connecting, wires, scale, nodes, position, },);
    useMouseMove({
      elRef: ref,
      dragRef,
      position,
      index,
      nodes,
    },);

    useEffect(() => {
      // console.log('scale changed inside box node', scale,);
    }, [scale,],);
    // console.log('wires', wires,);
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
          ({ from, to, },) =>
            (dir === 'output' && from === index) ||
            (to === index && dir === 'input'),
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
