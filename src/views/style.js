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

export const NodesMenu = styled.div`
  position: absolute;
  right: 0;
  height: 100vh;
  width: 120px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background: #44444482;
`;

export const NodesMenuHeader = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 6px;
`

export const NodesMenuFooter = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 6px;
`

export const ZoomMenu = styled.div`
  position: absolute;
  bottom: 0;
  left: 6px;
  height: 50px;
  width: 120px;
  color: #fff;
`

export const Social = styled.div`
  margin: 24px 0 12px 0;
`;

export const Interactive = styled.div`
  transform: scale(${({ scale, },) => scale});
  transform-origin: top left;
`;
