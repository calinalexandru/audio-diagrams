import { h, } from 'preact';
import { useEffect, } from 'preact/hooks';
import Analyser from '../components/Analyser';
import BiquadFilter from '../components/BiquadFilter';
import Buffer from '../components/Buffer';
import Delay from '../components/Delay';
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

export default function Main() {
  const [{ nodes = [], wires = [], positions = [], connecting = [], scale, },] =
    useImmerx();

  console.log('Main.nodes', nodes,);
  console.log('Main.positions', positions,);
  console.log('Main.connecting', connecting,);

  useKeyBindings();
  const live = useAudioNodes({ nodes, wires, },);
  useEffect(() => {
    // bamboleo
  }, [live?.current,],);
  console.log('Main.live', live,);
  const {
    add,
    clearAllNodes,
    clearAllWires,
    cancelConnection,
    removeLine,
    zoom,
  } = useMenu();

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
        {nodes.map(
          (node, index,) =>
            (node.type === NODE_TYPE.OSCILLATOR && (
              <Oscillator index={index} />
            )) ||
            (node.type === NODE_TYPE.GAIN && <Gain index={index} />) ||
            (node.type === NODE_TYPE.BIQUAD_FILTER && (
              <BiquadFilter index={index} />
            )) ||
            (node.type === NODE_TYPE.PAN && <Pan index={index} />) ||
            (node.type === NODE_TYPE.MICROPHONE && (
              <Microphone index={index} />
            )) ||
            (node.type === NODE_TYPE.BUFFER && <Buffer index={index} />) ||
            (node.type === NODE_TYPE.ANALYSER && (
              <Analyser audioNode={live.current[index]} index={index} />
            )) ||
            (node.type === NODE_TYPE.DELAY && <Delay index={index} />),
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
    </Container>
  );
}
