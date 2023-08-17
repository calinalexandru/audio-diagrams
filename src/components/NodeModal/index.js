import { h, } from 'preact';
import { useMemo, useRef, } from 'preact/hooks';
import Stack from '../../primitives/Stack';
import { useImmerx, } from '../../store/state';
import { Container, RemoveButton, } from './style';
import { NODES_COMPONENTS_MAP, } from '../../constants/map';
import useClickAway from '../../hooks/useClickAway';
// import DrawFunction from '../../primitives/DrawFunction';
// import Input from '../../primitives/Input';

export default function NodeModal({ live, },) {
  const containerRef = useRef();
  const [
    {
      edit: { node: editNode, component, },
    },
    update,
  ] = useImmerx();
  // const [x1, setx1,] = useState(200,);
  // const [x2, setx2,] = useState(150,);

  // const [y1, sety1,] = useState(340,);
  // const [y2, sety2,] = useState(260,);

  // const [nodes,] = useImmerx('nodes',);

  const closeModal = () => {
    update((draft,) => void (draft.edit.node = -1),);
  };

  const theEditComponent = useMemo(
    () =>
      h(NODES_COMPONENTS_MAP[component], {
        index: editNode,
        audioNode: live.current[editNode],
        editMode: true,
      },),
    [component, editNode,],
  );

  useClickAway({ el: containerRef, onClickAway: closeModal, },);

  return (
    editNode !== -1 && (
      <Container ref={containerRef}>
        <RemoveButton
          onClick={() => {
            closeModal();
          }}
        >
          X
        </RemoveButton>
        <Stack direction="column" style={{ width: '50%', }}>
          {theEditComponent}
        </Stack>
        <Stack
          style={{
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Stack direction="column">
            {/* <Stack>
              <Input
                label="x1"
                type="number"
                value={x1}
                step="1"
                max="440"
                min="0"
                onChange={(e,) => {
                  setx1(Number(e.target.value,),);
                }}
              />
              <Input
                label="y1"
                type="number"
                value={y1}
                step="1"
                max="440"
                min="0"
                onChange={(e,) => {
                  sety1(Number(e.target.value,),);
                }}
              />
              <Input
                label="x2"
                type="number"
                value={x2}
                step="1"
                max="440"
                min="0"
                onChange={(e,) => {
                  setx2(Number(e.target.value,),);
                }}
              />
              <Input
                label="y2"
                type="number"
                value={y2}
                step="1"
                max="440"
                min="0"
                onChange={(e,) => {
                  sety2(Number(e.target.value,),);
                }}
              />
            </Stack> */}
            {/* <DrawFunction x1={x1} x2={x2} y1={y1} y2={y2} /> */}
          </Stack>
        </Stack>
      </Container>
    )
  );
}
