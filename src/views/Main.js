import { h, } from 'preact';
import Delay from '../components/Delay';
import Gain from '../components/Gain';
import Oscillator from '../components/Oscillator';
import Output from '../components/Output';
import Pan from '../components/Pan';
import { NODE_TYPE, } from '../constants';
import useAudioNodes from '../hooks/useAudioNodes';
import useMenu from '../hooks/useMenu';
import Button from '../primitives/Button';
import GithubLogo from '../primitives/GithubLogo';
import Line from '../primitives/Line';
import { useImmerx, } from '../store/state';
import { Container, LeftMenu, Social, } from './style';

export default function Main() {
  const [{ nodes = [], wires = [], positions = [], },] = useImmerx();
  useAudioNodes({ nodes, wires, },);
  const {
    addOscilator,
    addDelay,
    addGain,
    addPan,
    clearAllNodes,
    clearAllWires,
    cancelConnection,
    removeLine,
  } = useMenu();

  const outputIndex = nodes.findIndex((node,) => node.type === NODE_TYPE.OUTPUT,);

  return (
    <Container>
      <LeftMenu>
        <Button color="node" onClick={addOscilator}>
          Oscillator
        </Button>
        <Button color="node" onClick={addGain}>
          Gain
        </Button>
        <Button color="node" onClick={addDelay}>
          Delay
        </Button>
        <Button color="node" onClick={addPan}>
          Panner
        </Button>
        <hr />
        <Button onClick={clearAllNodes}>Remove all audio nodes</Button>
        <Button
          onClick={cancelConnection}
          style={
            {
              // background: connecting.length ? 'antiquewhite' : '#ccc',
            }
          }
        >
          Cancel connection
        </Button>
        <Button onClick={clearAllWires}>Clear all wires</Button>
      </LeftMenu>
      <Social>
        <a
          href="https://github.com/calinalexandru/audio-diagrams"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo color="#551A8B" />
        </a>
      </Social>
      {nodes.map(
        (node, index,) =>
          (node.type === NODE_TYPE.OSCILLATOR && (
            <Oscillator index={index} />
          )) ||
          (node.type === NODE_TYPE.GAIN && <Gain index={index} />) ||
          (node.type === NODE_TYPE.PAN && <Pan index={index} />) ||
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
              from={from}
              to={to}
            />
          )
        );
      },)}
    </Container>
  );
}
