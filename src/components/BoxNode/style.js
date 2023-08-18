import { keyframes, } from '@emotion/react';
import styled from '@emotion/styled';
import { BOX_SIZE, } from '../../constants';

export const Container = styled.div`
  background: ${({ editMode, },) => (editMode ? 'transparent' : '#3535358c')};
  border-style: solid;
  border-width: ${({ editMode, },) => (editMode ? '0px' : '2px')};
  cursor: ${({ editMode, },) => (editMode ? 'default' : 'grab')};
  border-radius: 15px;
  box-sizing: border-box;
  flex-flow: row;
  display: flex;
  position: ${({ editMode, },) => (editMode ? 'static' : 'absolute')};
  min-width: ${BOX_SIZE.SMALL.WIDTH}px;
  min-height: ${BOX_SIZE.SMALL.HEIGHT}px;
  z-index: 100;

  transition: width 0.5s, height 0.5s;

  &:active {
    cursor: ${({ editMode, },) => (editMode ? 'default' : 'grabbing')};
  }

  &:hover {
    border-style: double;
  }
`;

export const Center = styled.div`
  box-sizing: border-box;
  padding: 2px 8px;
  display: flex;
  flex-flow: column;
  width: 100%;
`;

export const CenterTitle = styled.div`
  user-select: none;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-flow: row;
  justify-content: center;
  margin: 2px 0 6px 0;
`;

export const CenterContent = styled.div`
  box-sizing: border-box;
  padding: 0 2px;
  overflow: hidden;
`;

export const IOButton = styled.button`
  position: absolute;
  width: 20px;
  outline: none;
  height: 20px;
  top: 39%;
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: none;
  color: #fff;
  font-size: 20px;
  background: #a2a2a291;
  opacity: 0.9;
  ${({ left, },) => left && 'left: -20px;'};
  ${({ right, },) => right && 'right: -20px;'};
  ${({ active, },) => active && 'background: currentcolor;'}
  ${({ connected, color, },) => connected && `background: ${color};`}

  &:hover {
    background: #ffffff99;
  }
`;

export const Title = styled.h3`
  font-size: 1em;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 1px 1px black;
  margin: 0;
  padding: 0;
  text-align: center;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

export const EditButton = styled.button`
  cursor: pointer;
  color: #fff;
  position: absolute;
  left: -14px;
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

const animateDown = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0) rotate(90deg);
  }

  40%, 43% {
    transform: translate3d(0, 3px, 0) rotate(90deg);
  }

  70% {
    transform: translate3d(0, 2px, 0) rotate(90deg);
  }

  90% {
    transform: translate3d(0,1px,0) rotate(90deg);
  }
`;

export const ExpandButton = styled.button`
  height: auto;
  width: 20px;
  height: 20px;
  position: absolute;
  left: calc(50% - 10px);
  bottom: -16px;
  outline: none;
  background: unset;
  border: none;
  color: #fff;
  margin: 0;
  padding: 0;
  transform: rotate(90deg);
  cursor: pointer;

  &:hover {
    animation: ${animateDown} 1s infinite;
  }
`;
