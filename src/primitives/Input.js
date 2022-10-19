import styled from '@emotion/styled';
import { h, } from 'preact';

const InputStyled = styled.input`
  font-family: inherit;
  position: relative;
  width: 70px;
  margin: 2px 0;
  padding: 2px;
  outline: none;
  background: transparent;
  border: 1px solid #bfbf008a;
  color: #fff;
  box-sizing: border-box;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 15px;
`;

const Container = styled.div`
  position: relative;
  height: 20px;
  margin: 10px 0;
`;

const Label = styled.div`
  position: absolute;
  top: -10px;
  font-size: 9px;
  text-shadow: 1px 1px #060606;
  color: #fff;
  left: 2px;
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
      {units && (
        <Units dangerouslySetInnerHTML={{ __html: units, }} />
      )}
    </Container>
  );
}
