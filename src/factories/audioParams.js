import { AUDIO_PARAM_PROPS, DEFAULTS, } from '../constants';

export const createAudioParamProps = (nodeType,) =>
  AUDIO_PARAM_PROPS.reduce((acc, curr,) => {
    if (DEFAULTS?.[nodeType]?.NODE?.properties?.[curr]) {
      acc.push(curr,);
    }
    return acc;
  }, [],);

export const noop = () => {};
