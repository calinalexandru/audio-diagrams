import styled from '@emotion/styled';
import { h, } from 'preact';
import { forwardRef, } from 'preact/compat';

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

const Slider = forwardRef(
  ({ value, label = '', orientation, ...rest }, ref,) => {
    const isVertical = orientation === 'vertical';
    return (
      <Container
        style={{
          transform: isVertical ? 'rotate(-90deg) translate(-60px, 70px)' : '',
          transformOrigin: 'left',
          height: isVertical ? '129px' : 'auto',
          width: isVertical ? '32px' : 'auto',
        }}
      >
        <Label>
          {label && <LabelTitle>{label}</LabelTitle>}
          <LabelValue>{value}</LabelValue>
        </Label>
        <SliderStyled ref={ref} type="range" value={value} {...rest} />
      </Container>
    );
  },
);

export default Slider;