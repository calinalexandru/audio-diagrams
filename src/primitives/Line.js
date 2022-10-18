import styled from '@emotion/styled';
import { h, } from 'preact';

const LineStyled = styled.div`
  height: 1px;
  border-top: 2px solid brown;
  position: absolute;
  z-index: 10;
  transform-origin: left center;

  // made an arrow that kinda sux
  // &:after {
  //   content: '';
  //   right: 8px;
  //   height: 8px;
  //   width: 8px;
  //   border: solid #fff;
  //   border-width: 0 1px 1px 0;
  //   position: absolute;
  //   margin-top: -5.5px;
  //   margin-right: -8px;
  //   transform: rotate(-45deg);
  // }
`;

const OFFSET_LEFT = 18;
const OFFSET_HYPOTHENUSE = -18;
export default function Line({ from: ogFrom, to: ogTo, onClick, },) {
  const from = ogFrom;
  const to = ogTo;

  const heightRaw = Number(to.height.replace('px', '',),);
  const fromHeightRaw = Number(from.height.replace('px', '',),);
  const leftRaw = from.x + Number(from.width.replace('px', '',),);
  const widthRaw = to.x - leftRaw;
  const left = `${leftRaw + OFFSET_LEFT}px`;
  const top = `${from.y + fromHeightRaw / 2}px`;

  // c1 + c2 = i2
  // tangent angle = atan / tan^2 -1
  const c1 = from.y - to.y;
  const c2 = widthRaw;
  const hypothen = Math.sqrt(c1 ** 2 + c2 ** 2,);
  // console.log(`c1: ${c1}, c2: ${c2}, h: ${hypothen}`);
  const angle = ((Math.atan2(c1, c2,) * 180) / Math.PI) * -1;
  const width = `${hypothen + OFFSET_HYPOTHENUSE}px`; // `${widthRaw}px`;

  // console.log('angle', angle);

  return (
    <LineStyled
      onClick={onClick}
      style={{
        width,
        left,
        top,
        transform: `rotate(${angle}deg)`,
      }}
    >
      &nbsp;
    </LineStyled>
  );
}
