import styled from '@emotion/styled';

export default styled.button`
  font-family: inherit;
  border: 0;
  background: #ccc;
  min-height: 30px;
  text-transform: uppercase;
  width: 100px;
  font-size: 13px;
  color: #fff;
  background: #333;
  ${({ color, },) =>
    color === 'node' &&
    `
      box-shadow: 2px 2px #888888;
      background: #3b5177;
      `}
  cursor: pointer;
  margin: 0 5px;
  padding: 3px 6px;
  margin: 3px 6px;

  &:hover {
    opacity: 0.6;
  }
`;
