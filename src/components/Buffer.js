import { h, } from 'preact';
import { useCallback, useEffect, useRef, } from 'preact/hooks';
import { NODE_TYPE, } from '../constants';
import Select from '../primitives/Select';
import { useImmerx, } from '../store/state';
import BoxNode from './BoxNode';
import AudioParams from './AudioParams';

export default function Buffer({ index, ...props },) {
  const elRef = useRef();
  const dragRef = useRef();
  const fileRef = useRef();

  const [nodes,] = useImmerx('nodes',);
  const [, update,] = useImmerx(null,);

  const setLoop = (val,) => {
    console.log('setLoop', val,);
    update((draft,) => void (draft.nodes[index].properties.loop = val),);
  };

  const setBuffer = (val,) => {
    update((draft,) => void (draft.nodes[index].properties.buffer = val),);
  };

  const handleFile = useCallback((event,) => {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (fileEvent,) => {
      const arrayBuffer = fileEvent.target.result;
      audioContext.decodeAudioData(arrayBuffer, (buffer,) => {
        setBuffer(buffer,);
        audioContext.close();
      },);
    };

    reader.readAsArrayBuffer(file,);
  }, [],);

  useEffect(() => {
    fileRef?.current?.addEventListener('change', handleFile,);

    return () => {
      fileRef?.current?.removeEventListener('change', handleFile,);
    };
  }, [fileRef?.current,],);

  return (
    <BoxNode
      ref={elRef}
      dragRef={dragRef}
      color="red"
      index={index}
      component={NODE_TYPE.BUFFER}
      name="Buffer"
      canInput={false}
      {...props}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <input
          type="file"
          style={{
            color: '#fff',
            fontSize: '12px',
          }}
          ref={fileRef}
        />
        <AudioParams
          valueName="playbackRate"
          label="Playback Rate"
          color="red"
          index={index}
        />
        <AudioParams
          valueName="detune"
          label="Detune"
          color="red"
          index={index}
        />
        <Select
          label="Loop"
          onChange={(e,) => {
            setLoop(e.target.value === 'yes',);
          }}
        >
          <option value="yes" selected={nodes[index].properties.loop}>
            yes
          </option>
          <option value="no" selected={!nodes[index].properties.loop}>
            no
          </option>
        </Select>
      </div>
    </BoxNode>
  );
}
