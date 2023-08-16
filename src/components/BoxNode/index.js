import { h, } from 'preact';
import { forwardRef, useCallback, useMemo, } from 'preact/compat';
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
  EditButton,
  IOButton,
  RemoveButton,
  Title,
} from './style';
import DisplayNode from './DisplayNode';

const xVarName = '--x';
const yVarName = '--y';

const BoxNode = forwardRef(
  (
    {
      index,
      dragRef,
      color,
      style,
      component,
      children,
      name,
      editMode = false,
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
    const { remove, setEditNode, } = useNodes();
    const isAnalyser = useMemo(() => component === 'analyser', [component,],);
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

    return (
      <Container
        editMode={editMode}
        style={{
          top: `var(${yVarName})`,
          left: `var(${xVarName})`,
          borderColor: color,
          ...style,
          width: editMode ? '100%' : `${BOX_SIZE.SMALL.WIDTH}px`,
          height: editMode ? '100%' : `${BOX_SIZE.SMALL.HEIGHT}px`,
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
          {editMode || isAnalyser ? (
            <CenterContent>{children}</CenterContent>
          ) : (
            <DisplayNode node={nodes[index]} />
          )}
        </Center>
        {!editMode && canRemove && (
          <RemoveButton
            onClick={() => {
              remove(index,);
            }}
          >
            X
          </RemoveButton>
        )}
        {!editMode && canRemove && (
          <EditButton
            onClick={() => {
              setEditNode(index, component,);
              // edit(index,);
            }}
          >
            Edit
          </EditButton>
        )}
        {!editMode && canOutput && (
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
      </Container>
    );
  },
);

export default BoxNode;
