import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(#212121 10%, transparent 1%);
  background-color: #000;
  background-position: 0 0, 50px 50px;
  background-size: 15px 15px;
`;

export const LeftMenu = styled.div`
  position: absolute;
  left: 0;
  height: 100vh;
  width: 120px;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 10px;
  background: #44444482;
`;

export const Social = styled.div`
  position: absolute;
  right: 4px;
  width: auto;
  top: 4px;
`;
