import { h, Fragment, } from 'preact';
import Text from '../../primitives/Text';

export default function DisplayNode({ node, },) {
  const hasFrequency = node.properties?.frequency;
  const hasGain = node.properties?.gain;
  const hasDelay = node.properties?.delay;

  return (
    <>
      {!!node.properties.type && <Text>Type: {node.properties.type}</Text>}
      {hasGain && (
        <Text>
          Gain:
          {JSON.stringify(
            node.properties.gain?.[node.properties.gain.valueType],
          )}
        </Text>
      )}
      {hasDelay && (
        <Text>
          Delay:
          {JSON.stringify(
            node.properties.delay?.[node.properties.delay.valueType],
          )}
        </Text>
      )}
      {!!node.properties.duration && (
        <Text>Duration: {node.properties.duration}</Text>
      )}
      {hasFrequency && (
        <Text>
          {JSON.stringify(
            node.properties.frequency?.[node.properties.frequency.valueType],
          )}
        </Text>
      )}
    </>
  );
}
