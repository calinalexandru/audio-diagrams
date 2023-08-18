// import styled from '@emotion/styled';
import { h, } from 'preact';
import { useCallback, useEffect, useRef, } from 'preact/hooks';
import { NODE_TYPE, } from '../constants';
import Select from '../primitives/Select';
import { useImmerx, } from '../store/state';
import BoxNode from './BoxNode';
import Input from '../primitives/Input';

export default function Convolver({ index, ...props },) {
  const fileRef = useRef();
  const elRef = useRef();
  const dragRef = useRef();
  const [nodes,] = useImmerx('nodes',);
  const [, update,] = useImmerx(null,);

  const setNormalize = (val,) => {
    update((draft,) => void (draft.nodes[index].properties.normalize = val),);
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
      color="darkseagreen"
      component={NODE_TYPE.CONVOLVER}
      index={index}
      name="Convolver"
      {...props}
    >
      <div>
        <Input label="Impulse response" type="file" ref={fileRef} />
        <Select
          label="Normalize"
          type="number"
          value={nodes[index].properties.normalize}
          step="0.1"
          onChange={(e,) => {
            setNormalize(e.target.value === 'yes',);
          }}
        >
          <option value="no" selected={!nodes[index].properties.normalize}>
            false
          </option>
          <option value="yes" selected={nodes[index].properties.normalize}>
            true
          </option>
        </Select>
      </div>
    </BoxNode>
  );
}
