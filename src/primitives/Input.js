import styled from '@emotion/styled';
import { h, } from 'preact';

const InputStyled = styled.input`
  font-family: inherit;
  position: relative;
  width: 70px;
  border: 0;
  margin: 2px 0;
  padding: 2px;
  outline: none;
`;

const Container = styled.div`
  position: relative;
  height: 20px;
  margin: 10px 0;
`;

const Label = styled.div`
  position: absolute;
  top: -11px;
  font-size: 10px;
  text-shadow: 1px 1px #060606;
  color: #fff;
`;

const Units = styled.span`
  text-shadow: 1px 1px #060606;
  color: #fff;
`;

export default function Input({ label, units, ...rest },) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputStyled {...rest} />
      &nbsp;
      {units && <Units>{units}</Units>}
    </Container>
  );
}
