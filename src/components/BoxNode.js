import styled from '@emotion/styled';
import { h, } from 'preact';
import { forwardRef, useCallback, useMemo, useState, } from 'preact/compat';
import { BOX_SIZE, } from '../constants';
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

const ExpandButton = styled.button`
  height: auto;
  width: 20px;
  height: 20px;
  position: absolute;
  left: calc(50% - 10px);
  bottom: -16px;
  outline: none;
  background: unset;
  border: none;
  color: #fff;
  margin: 0;
  padding: 0;
  transform: rotate(90deg);
  cursor: pointer;

  &:hover {
    background: #cccccc22;
    border-radius: 50%;
  }

  &:active {
    background: #cccccc66;
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
      canExpand = false,
      canRemove = true,
      canOutput = true,
      canInput = true,
    },
    ref,
  ) => {
    const [connecting,] = useImmerx('connecting',);
    const [wires,] = useImmerx('wires',);
    const [nodes,] = useImmerx('nodes',);
    const [positions,] = useImmerx('positions',);

    const position = useMemo(() => positions[index], [index, positions,],);

    useMouseMove({
      elRef: ref,
      dragRef,
      position,
      index,
      nodes,
    },);

    const { addToConnecting, } = useWiring();
    const { remove, } = useNodes();
    const [expand, setExpand,] = useState(false,);

    const isActive = useCallback(
      (dir,) =>
        connecting.find(
          ({ index: i, direction, },) => index === i && direction === dir,
        ),
      [connecting, index,],
    );

    const hasSelfWire = useMemo(
      () => connecting.find(({ index: i, },) => index === i,),
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

    const toggleShowMore = useCallback(
      (e,) => {
        e.preventDefault();
        setExpand(!expand,);
      },
      [expand,],
    );

    const showExpandButton = (
      <ExpandButton
        onClick={toggleShowMore}
        dangerouslySetInnerHTML={{ __html: expand ? '&laquo;' : '&raquo;', }}
      />
    );

    return (
      <Container
        style={{
          top: `var(${yVarName})`,
          left: `var(${xVarName})`,
          borderColor: color,
          ...style,
          width: expand ? 'auto' : `${BOX_SIZE.WIDTH}px`,
          height: expand ? 'auto' : `${BOX_SIZE.HEIGHT}px`,
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
              if (!hasSelfWire) addToConnecting(index, 'input',);
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
              if (!hasSelfWire) addToConnecting(index, 'output',);
            }}
          >
            &nbsp;
          </IOButton>
        )}
        {canExpand && showExpandButton}
      </Container>
    );
  },
);

export default BoxNode;
