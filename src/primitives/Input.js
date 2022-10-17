import styled from '@emotion/styled';

export default styled.input`
  position: relative;
  width: 70px;
  border: 0;
  margin: 2px 0;
  padding: 2px;
  outline: none;

  &:before {
    content: '${({ label }) => label}';
    color: #000;
    position: absolute;
    width: 100px;
    height: 100px;
  }
`;
