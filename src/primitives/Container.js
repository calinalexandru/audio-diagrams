import styled from '@emotion/styled';

export const Container = styled.div`
  background: #353535b0;
  border-style: solid;
  border-width: 2px;
  cursor: grab;
  border-radius: 15px;
  box-sizing: border-box;
  flex-flow: row;
  display: flex;
  position: absolute;
  width: 180px;
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

export const CenterTitle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row;
  justify-content: center;
  margin-bottom: 4px;
`;

export const CenterContent = styled.div`
  box-sizing: border-box;
`;

export const IOButton = styled.button`
  border-radius: 15px;
  background: unset;
  height: 70%;
  width: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: none;
  // border-right: ${({ right }) => right && '1px solid #333'};
  // border-left: ${({ left }) => left && '1px solid #333'};
  color: #fff;
  font-size: 20px;
  background: #ffffff05;

  &:hover {
    background: #ffffff11;
  }
`;

export const Title = styled.h3`
  text-transform: uppercase;
  color: #fff;
  text-shadow: 1px 1px black;
  margin: 0;
  padding: 0;
`;