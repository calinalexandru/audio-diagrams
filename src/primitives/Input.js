import styled from '@emotion/styled';
import { h, } from 'preact';
import { forwardRef, } from 'preact/compat';
import { object, oneOfType, string, } from 'prop-types';

const InputStyled = styled.input`
  font-family: inherit;
  position: relative;
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

const widthSizes = {
  small: '50px',
  medium: '70px',
  large: '100%',
};

const Input = forwardRef(
  ({ label, units, size, style, type = 'text', ...rest }, ref,) => (
    <Container>
      {label && <Label>{label}</Label>}
      <InputStyled
        type={type}
        ref={ref}
        style={{
          width: widthSizes[size],
          ...style,
          ...(type === 'file' && { width: '300px', }),
        }}
        {...rest}
      />
      &nbsp;
      {units && <Units dangerouslySetInnerHTML={{ __html: units, }} />}
    </Container>
  ),
);

Input.propTypes = {
  label: string,
  units: string,
  size: string,
  style: oneOfType([object,],),
};

Input.defaultProps = {
  label: '',
  units: '',
  size: 'medium',
  style: {},
};

export default Input;
