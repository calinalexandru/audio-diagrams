import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  background: #1e1d1d;
  width: 70%;
  height: 70%;
  transform: translate(-50%, -50%);
`;

export const RemoveButton = styled.button`
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
