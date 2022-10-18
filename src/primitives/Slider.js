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
  color: #fff;
  display: flex;
  justify-content: space-evenly;
`;

const LabelTitle = styled.div``;
const LabelValue = styled.div``;

export default function Slider({ value, label = '', ...rest },) {
  return (
    <Container>
      <Label>
        {label && <LabelTitle>{label}</LabelTitle>}
        <LabelValue>{value}</LabelValue>
      </Label>
      <SliderStyled type="range" value={value} {...rest} />
    </Container>
  );
}
