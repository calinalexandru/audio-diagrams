import styled from '@emotion/styled';
import { Fragment, h, } from 'preact';

const LineStyled = styled.div`
  height: 1px;
  border-top: 2px solid brown;
  position: absolute;
  z-index: 10;
  padding: 5px 0;
  cursor: pointer;
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

const SQUARE_OFFSET = 4.5;
const OFFSET_LEFT = 0; // 18;
const OFFSET_HYPOTHENUSE = 0; // -18;
export default function Line({ from: ogFrom, to: ogTo, scale = 1, onClick, },) {
  const from = ogFrom;
  const to = ogTo;

  // const heightRaw = Number(to.height.replace('px', '',),);
  const fromHeightRaw = Number(from.height.replace('px', '',),);
  let leftRaw = from.x + Number(from.width.replace('px', '',),);
  const widthRaw = to.x - leftRaw;
  leftRaw += leftRaw - leftRaw * scale;
  const left = `${leftRaw + OFFSET_LEFT}px`;
  let topRaw = from.y + fromHeightRaw / 2;
  topRaw += topRaw - topRaw * scale;
  const top = `${topRaw}px`;

  // c1 + c2 = i2
  // tangent angle = atan / tan^2 -1
  let c1 = from.y - to.y;
  c1 += c1 - c1 * scale;
  let c2 = widthRaw;
  c2 += c2 - c2 * scale;
  const hypothen = Math.sqrt(c1 ** 2 + c2 ** 2,);
  // console.log(`c1: ${c1}, c2: ${c2}, h: ${hypothen}`);
  const angle = ((Math.atan2(c1, c2,) * 180) / Math.PI) * -1;
  const width = `${hypothen + OFFSET_HYPOTHENUSE}px`; // `${widthRaw}px`;

  // console.log('angle', angle,);

  // make 3 squared lines
  if (Math.abs(angle,) >= 20 && Math.abs(angle,) <= 90) {
    const isNegative = angle < 0;
    const widthSlice = widthRaw / 3;

    const line1Width = `${
      widthSlice + (isNegative ? SQUARE_OFFSET : SQUARE_OFFSET * -1)
    }px`;
    const line2Width = `${Math.abs(c1,)}px`;
    const line3Width = `${widthRaw - widthSlice - SQUARE_OFFSET}px`;

    const line1Left = left;
    const line2Left = `${leftRaw + widthSlice}px`;
    const line3Left = `${
      leftRaw + widthSlice + (isNegative ? SQUARE_OFFSET : SQUARE_OFFSET * -1)
    }px`;

    const line1Top = top;
    const line2Top = `${topRaw - c1 - SQUARE_OFFSET}px`;
    const line3Top = `${topRaw - c1}px`;
    return (
      <>
        <LineStyled
          onDoubleClick={onClick}
          style={{
            width: line1Width,
            left: line1Left,
            top: line1Top,
          }}
        />
        <LineStyled
          onDoubleClick={onClick}
          style={{
            transform: `rotate(${angle < 0 ? 90 : -90}deg)`,
            width: line2Width,
            left: line2Left,
            top: line2Top,
          }}
        />
        <LineStyled
          onDoubleClick={onClick}
          style={{
            width: line3Width,
            left: line3Left,
            top: line3Top,
          }}
        />
      </>
    );
  }

  return (
    <LineStyled
      onDoubleClick={onClick}
      style={{
        width,
        left,
        top,
        transform: `rotate(${angle}deg)`,
      }}
    />
  );
}
