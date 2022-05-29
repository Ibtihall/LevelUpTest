import { COLORS } from '../../constants/design';
import styled, { keyframes } from 'styled-components';
import { zoomOut,zoomIn,rotateIn} from 'react-animations';

 
const zoomOutAnimation = keyframes`${zoomOut}`;
const zoomInAnimation = keyframes`${zoomIn}`;
const rotateInAnimation = keyframes`${rotateIn}`;
 
export const ZoomOutDiv = styled.div`
  animation: 10s ${zoomOutAnimation};
  min-height: 500px;
`;

export const ZoomInDiv = styled.div`
  animation: 5s ${zoomInAnimation};
  display:flex;
  flex-direction:column;
  align-items:center;
  min-height: 500px;
  padding-top: 200px;

`;

export const RotateInDiv = styled.div`
  animation: 5s ${rotateInAnimation};
  display:flex;
  align-items:center;
  min-height: 500px;
  position: absolute;
`;

export const Content = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  position: relative;
`;

export const ProgressContainer = styled.div`
  display:flex;
  align-items:center;
`;
export const ProgressDiv = styled.div`
  background: ${COLORS.WHITE};
  //opacity: 0.25;
  border-radius: .5rem;
  width: 600px;
  height: 10px;
`;

export const StarImg = styled.img`
position: absolute;
right: -7px;
top: -10px;
width: 25px;
`;

export const CountLabel = styled.div`
position: absolute;
top: -32px;
right: 21px;
width: 25px;
font-weight: bold;
color: ${COLORS.WHITE};

`;

export const Progress = styled.div`
  background: linear-gradient(to right, ${COLORS.BLUE} , ${COLORS.LIGHT_BLUE});
  border-radius: 1rem;
  height: 10px;
  transition: 1s ease;
  transition-delay: 0.5s;
  position: relative;
`;

export const Label = styled.div`
  color: ${COLORS.WHITE};
`;
