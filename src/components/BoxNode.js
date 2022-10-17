import { h } from 'preact';
import { forwardRef } from 'preact/compat';
import useNodes from '../hooks/useNodes';
import useWiring from '../hooks/useWiring';
import {
  Center,
  CenterContent,
  CenterTitle,
  Container,
  IOButton,
  Left,
  Right,
  Title,
} from '../primitives/Container';

const xVarName = '--x';
const yVarName = '--y';

const BoxNode = forwardRef(
  ({ index, dragRef, style, children, name, canRemove = true }, ref) => {
    const { addToConnecting } = useWiring();
    const { remove } = useNodes();

    return (
      <Container
        style={{
          top: `var(${yVarName})`,
          left: `var(${xVarName})`,
          ...style,
        }}
        ref={ref}
      >
        <Left>
          <IOButton
            right={true}
            onClick={() => {
              addToConnecting(index, 'input');
            }}
          >
            I
          </IOButton>
        </Left>
        <Center ref={dragRef}>
          <CenterTitle>
            <Title>
              {name} # {index}
            </Title>
            {canRemove && (
              <div>
                <button
                  onClick={() => {
                    console.log('remove', index);
                    remove(index);
                  }}
                >
                  X
                </button>
              </div>
            )}
          </CenterTitle>
          <CenterContent>{children}</CenterContent>
        </Center>
        <Right>
          <IOButton
            left={true}
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
