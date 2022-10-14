import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { NODE_TYPE } from '../constants';
import useAudioNodes from '../hooks/useAudioNodes';
import { useImmerx } from '../store/state';
import Oscillator from './oscillator';
import Output from './output';

const Container = ({ children }) => (
  <div
    style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      background: '#eee',
    }}
  >
    {children}
  </div>
);

export default function Main() {
  const [{ nodes = [], properties = {} }, update] = useImmerx();
  console.log('Main.state.nodes', nodes);
  // create web audio api context

  useAudioNodes({ nodes, properties });
  const clearAllNodes = () => {
    update((draft) => void (draft.nodes = []));
  };

  return (
    <Container>
      <div
        style={{
          position: 'absolute',
          right: 0,
        }}
      >
        <button onClick={clearAllNodes}>Clear all connections</button>
      </div>
      <Oscillator />
      <Output />
    </Container>
  );
}
