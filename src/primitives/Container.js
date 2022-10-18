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

  &:hover {
    border-style: double;
  }
`;

// export const Left = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 10%;
// `;

// export const Right = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 10%;
// `;

export const Center = styled.div`
  box-sizing: border-box;
  padding: 2px 8px;
  display: flex;
  flex-flow: column;
  width: 100%;
`;

export const CenterTitle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row;
  justify-content: center;
  margin-bottom: 8px;
`;

export const CenterContent = styled.div`
  box-sizing: border-box;
  padding: 0 2px;
`;

export const IOButton = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 39%;
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: none;
  color: #fff;
  font-size: 20px;
  background: #a2a2a291;
  ${({ left, },) => left && 'left: -20px'};
  ${({ right, },) => right && 'right: -20px'};

  &:hover {
    background: #ffffff99;
  }
`;

export const Title = styled.h3`
  text-transform: uppercase;
  color: #fff;
  text-shadow: 1px 1px black;
  margin: 0;
  padding: 0;
`;