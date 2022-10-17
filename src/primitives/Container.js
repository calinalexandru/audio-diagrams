import styled from '@emotion/styled';

export const Container = styled.div`
  cursor: grab;
  border-radius: 15px;
  box-sizing: border-box;
  flex-flow: row;
  display: flex;
  position: absolute;
  width: 250px;
  height: 100px;
  z-index: 100;

  &:active {
    cursor: grabbing;
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
`;

export const Center = styled.div`
  box-sizing: border-box;
  padding: 8px;
  display: flex;
  flex-flow: column;
  width: 80%;
`;

export const IOButton = styled.button`
  height: 90%;
  width: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  border: none;

  &:hover {
    opacity: 0.3;
  }
`;

export const Title = styled.h3`
  margin: 0;
  padding: 0;
`;
