import { h, Fragment, } from 'preact';
import { useCallback, useEffect, useRef, useState, } from 'preact/hooks';
import Output from '../components/Output';
import NodeModal from '../components/NodeModal';
import { NODES, NODE_TYPE, } from '../constants';
import { NODES_COMPONENTS_MAP, } from '../constants/map';
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
  MediaMenu,
  NodesMenu,
  NodesMenuFooter,
  NodesMenuHeader,
  Social,
  ZoomMenu,
} from './style';

export default function Main() {
  const [
    {
      nodes = [],
      wires = [],
      positions = [],
      connecting = [],
      scale,
      edit: { node: editNode, },
    },
  ] = useImmerx();
  const [restartCounter, setRestartCounter,] = useState(1,);
  const [isPlaying, setIsPlaying,] = useState(true,);
  const fileUploadRef = useRef();

  useKeyBindings();
  const { live, audioCtx, } = useAudioNodes(restartCounter, isPlaying, {
    nodes,
    wires,
  },);
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

  const togglePlay = useCallback(() => {
    setIsPlaying(!isPlaying,);
    if (isPlaying) {
      audioCtx.current.suspend();
    } else {
      audioCtx.current.resume();
    }
  }, [isPlaying, setIsPlaying,],);

  const restart = useCallback(() => {
    setIsPlaying(true,);
    setRestartCounter(restartCounter + 1,);
  }, [restartCounter, setRestartCounter, setIsPlaying,],);

  useEffect(() => {
    // restarting cycle
    console.log('restartCounter', restartCounter,);
  }, [restartCounter,],);

  return (
    restartCounter && (
      <>
        <Container filterBlur={editNode !== -1}>
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
              <Button onClick={exportState}>Save state</Button>
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
          <MediaMenu>
            <Button onClick={togglePlay}>
              {isPlaying ? 'Suspend' : 'Resume'}
            </Button>
            <Button onClick={restart}>Restart</Button>
          </MediaMenu>
          <Interactive scale={scale}>
            {nodes.map((node, index,) =>
              h(NODES_COMPONENTS_MAP[node.type], {
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
        <NodeModal />
      </>
    )
  );
}
