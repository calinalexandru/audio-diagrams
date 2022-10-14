import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import state$ from '../store/store';
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
  // create web audio api context
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  // create Oscillator node
  const oscillator = audioCtx.createOscillator();

  oscillator.type = 'square';
  oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
  oscillator.connect(audioCtx.destination);
  // oscillator.start();
  //
  useEffect(() => {
    state$.update((draft) => void (draft.otherParent = {}));
    state$.update((draft) => void (draft.otherParent = {}));
  }, []);

  return (
    <Container>
      <Oscillator />
      <Output />
    </Container>
  );
}
