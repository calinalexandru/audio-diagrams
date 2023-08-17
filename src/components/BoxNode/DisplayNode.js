import { h, Fragment, } from 'preact';
import Text from '../../primitives/Text';
import { AUDIO_PARAM_PROPS, } from '../../constants';
import { getValueOrValues, } from '../../util/selectors';

export default function DisplayNode({ node, },) {
  const hasType = !!node.properties.type;

  return (
    <>
      {hasType && <Text>Type:&nbsp;{node.properties.type}</Text>}
      {AUDIO_PARAM_PROPS.map(
        (apProp,) =>
          !!node.properties?.[apProp] && (
            <Text>
              {apProp}:&nbsp; {getValueOrValues(node.properties[apProp],)}
            </Text>
          ),
      )}
    </>
  );
}
