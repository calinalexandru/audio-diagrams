import styled from '@emotion/styled';
import { h, } from 'preact';

const Container = styled.div`
  margin-top: 10px;
`;

const SliderStyled = styled.input`
  padding: 0;
  margin: 4px 0;
`;

const Label = styled.div`
  text-align: center;
  color: #fff;
`;

export default function Slider({ value, ...rest },) {
  return (
    <Container>
      <Label>{value}</Label>
      <SliderStyled type="range" value={value} {...rest} />
    </Container>
  );
}
