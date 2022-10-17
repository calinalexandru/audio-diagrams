import styled from '@emotion/styled';
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

const RemoveButton = styled.button`
  cursor: pointer;
  color: #fff;
  position: absolute;
  right: -14px;
  background: unset;
  border: 0;
  font-size: 10px;
  top: -10px;
  text-shadow: 1px 1px black;
  width: 17px;
  height: 17px;
  margin: 0;
  padding: 0;

  &:hover {
    background: #cccccc33;
    border-radius: 50%;
  }
  &:active {
    background: #ff000033;
  }
`;

const BoxNode = forwardRef(
  (
    {
      index,
      dragRef,
      color,
      style,
      children,
      name,
      canRemove = true,
      canOutput = true,
      canInput = true,
    },
    ref
  ) => {
    const { addToConnecting } = useWiring();
    const { remove } = useNodes();

    return (
      <Container
        style={{
          top: `var(${yVarName})`,
          left: `var(${xVarName})`,
          borderColor: color,
          ...style,
        }}
        ref={ref}
      >
        {canInput && (
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
        )}
        <Center
          style={{
            width: canInput && canOutput ? '80%' : '90%',
          }}
          ref={dragRef}
        >
          <CenterTitle>
            <Title>{name}</Title>
            {canRemove && (
              <RemoveButton
                onClick={() => {
                  console.log('remove', index);
                  remove(index);
                }}
              >
                X
              </RemoveButton>
            )}
          </CenterTitle>
          <CenterContent>{children}</CenterContent>
        </Center>
        {canOutput && (
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
        )}
      </Container>
    );
  }
);

export default BoxNode;
