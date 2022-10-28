import { h, } from 'preact';
import { useRef, } from 'preact/hooks';
import Analyser from '../components/Analyser';
import BiquadFilter from '../components/BiquadFilter';
import Buffer from '../components/Buffer';
import Convolver from '../components/Convolver';
import Delay from '../components/Delay';
import DynamicsCompressor from '../components/DynamicsCompressor';
import Gain from '../components/Gain';
import Microphone from '../components/Microphone';
import Oscillator from '../components/Oscillator';
import Output from '../components/Output';
import Pan from '../components/Pan';
import { NODES, NODE_TYPE, } from '../constants';
import useAudioNodes from '../hooks/useAudioNodes';
import useKeyBindings from '../hooks/useKeyBindings';
import useMenu from '../hooks/useMenu';
import Button from '../primitives/Button';
import GithubLogo from '../primitives/GithubLogo';
import Line from '../primitives/Line';
import Slider from '../primitives/Slider';
import { useImmerx, } from '../store/state';
import {
  Container,
  Interactive,
  NodesMenu,
  NodesMenuFooter,
  NodesMenuHeader,
  Social,
  ZoomMenu,
} from './style';

const nodesToComponents = {
  [NODE_TYPE.OSCILLATOR]: Oscillator,
  [NODE_TYPE.CONVOLVER]: Convolver,
  [NODE_TYPE.DYNAMICS_COMPRESSOR]: DynamicsCompressor,
  [NODE_TYPE.ANALYSER]: Analyser,
  [NODE_TYPE.BIQUAD_FILTER]: BiquadFilter,
  [NODE_TYPE.BUFFER]: Buffer,
  [NODE_TYPE.DELAY]: Delay,
  [NODE_TYPE.GAIN]: Gain,
  [NODE_TYPE.MICROPHONE]: Microphone,
  [NODE_TYPE.PAN]: Pan,
};

export default function Main() {
  const [{ nodes = [], wires = [], positions = [], connecting = [], scale, },] =
    useImmerx();

  const fileUploadRef = useRef();

  // console.log('Main.nodes', nodes,);
  // console.log('Main.positions', positions,);
  // console.log('Main.connecting', connecting,);

  useKeyBindings();
  const live = useAudioNodes({ nodes, wires, },);
  console.log('Main.live', live,);
  const {
    add,
    loadState,
    exportState,
    clearAllNodes,
    clearAllWires,
    cancelConnection,
    removeLine,
    zoom,
  } = useMenu({ fileUploadRef, },);

  const outputIndex = nodes.findIndex((node,) => node.type === NODE_TYPE.OUTPUT,);

  return (
    <Container>
      <NodesMenu>
        <NodesMenuHeader>
          {NODES.map((node,) => (
            <Button
              color="node"
              onClick={() => {
                add(node,);
              }}
            >
              {node}
            </Button>
          ),)}
        </NodesMenuHeader>
        <NodesMenuFooter>
          <Button onClick={exportState}>Export state</Button>
          <Button onClick={loadState}>Load state</Button>
          <Button onClick={clearAllNodes}>Remove all audio nodes</Button>
          <Button onClick={cancelConnection}>Cancel connection</Button>
          <Button onClick={clearAllWires}>Clear all wires</Button>
          <Social>
            <a
              href="https://github.com/calinalexandru/audio-diagrams"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo color="#fff" />
            </a>
          </Social>
        </NodesMenuFooter>
      </NodesMenu>
      <ZoomMenu>
        <Slider
          label="Zoom"
          min="0.3"
          max="1.5"
          value={scale}
          step="0.04"
          onChange={(e,) => {
            zoom(e.target.value,);
          }}
        />
      </ZoomMenu>
      <Interactive scale={scale}>
        {nodes.map((node, index,) =>
          h(nodesToComponents[node.type], {
            index,
            audioNode: live.current[index],
          },),
        )}
        <Output index={outputIndex} />
        {wires.map(({ from: fromIndex, to: toIndex, }, index,) => {
          const to = positions?.[toIndex];
          const from = positions?.[fromIndex];
          return (
            to &&
            from && (
              <Line
                onClick={() => {
                  removeLine(index,);
                }}
                scale={scale}
                from={from}
                to={to}
              />
            )
          );
        },)}
      </Interactive>
      <input type="file" ref={fileUploadRef} style={{ display: 'none', }} />
    </Container>
  );
}
