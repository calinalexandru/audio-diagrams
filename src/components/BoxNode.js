import { h } from 'preact';
import { forwardRef } from 'preact/compat';
import useNodes from '../hooks/useNodes';
import useWiring from '../hooks/useWiring';
import {
  Center,
  Container,
  IOButton,
  Left,
  Right,
  Title,
} from '../primitives/Container';

const xVarName = '--x';
const yVarName = '--y';

const BoxNode = forwardRef(
  ({ index, style, buttonRef, children, name }, ref) => {
    const { addToConnecting } = useWiring();
    const { remove } = useNodes();

    return (
      <Container
        ref={ref}
        style={{
          top: `var(${yVarName})`,
          left: `var(${xVarName})`,
          ...style,
        }}
      >
        <Left>
          <IOButton
            onClick={() => {
              addToConnecting(index, 'input');
            }}
          >
            I
          </IOButton>
        </Left>
        <Center>
          <div>
            <button
              style={{
                cursor: 'pointer',
              }}
              ref={buttonRef}
            >
              DRAG
            </button>
            <button
              onClick={() => {
                console.log('remove', index);
                remove(index);
              }}
            >
              Remove
            </button>
          </div>
          <Title>
            {name} # {index}
          </Title>
          {children}
        </Center>
        <Right>
          <IOButton
            onClick={() => {
              addToConnecting(index, 'output');
            }}
          >
            O
          </IOButton>
        </Right>
      </Container>
    );
  }
);

export default BoxNode;
