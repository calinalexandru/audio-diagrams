import { h, } from 'preact';
import { forwardRef, useCallback, useMemo, useState, } from 'preact/compat';
import { BOX_SIZE, } from '../../constants';
import useMouseMove from '../../hooks/useMouseMove';
import useNodes from '../../hooks/useNodes';
import useWiring from '../../hooks/useWiring';
import { useImmerx, } from '../../store/state';
import {
  Center,
  CenterContent,
  CenterTitle,
  Container,
  ExpandButton,
  IOButton,
  RemoveButton,
  Title,
} from './style';

const xVarName = '--x';
const yVarName = '--y';

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
      isExpanded = false,
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
    const [expand, setExpand,] = useState(isExpanded,);

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
          width: expand ? BOX_SIZE.BIG.WIDTH : `${BOX_SIZE.SMALL.WIDTH}px`,
          height: expand ? BOX_SIZE.BIG.HEIGHT: `${BOX_SIZE.SMALL.HEIGHT}px`,
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
