import { h } from 'preact';

export default function Line({ from: ogFrom, to: ogTo }) {
  console.log('Line', { from, to });
  let from = ogFrom;
  let to = ogTo;

  const heightRaw = Number(to.height.replace('px', ''));
  const fromHeightRaw = Number(from.height.replace('px', ''));
  const leftRaw = from.x + Number(from.width.replace('px', ''));
  const widthRaw = to.x - leftRaw;
  const left = `${leftRaw}px`;
  const top = `${from.y + fromHeightRaw / 2}px`;

  // c1 + c2 = i2
  // tangent angle = atan / tan^2 -1
  const c1 = from.y - to.y;
  const c2 = widthRaw;
  const hypothen = Math.sqrt(Math.pow(c1, 2) + Math.pow(c2, 2));
  console.log(`c1: ${c1}, c2: ${c2}, h: ${hypothen}`);
  const angle = ((Math.atan2(c1, c2) * 180) / Math.PI) * -1;
  const width = `${hypothen}px`; //`${widthRaw}px`;

  console.log('angle', angle);

  return (
    <div
      style={{
        width,
        left,
        top,
        borderTop: '10px solid #333',
        position: 'absolute',
        transformOrigin: 'left center',
        transform: `rotate(${angle}deg)`,
      }}
    >
      &nbsp;
    </div>
  );
}
