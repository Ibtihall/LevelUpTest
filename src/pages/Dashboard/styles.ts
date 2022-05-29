

import styled from 'styled-components';
import { COLORS } from '../../constants/design';
export const Content = styled.div`
  display: flex;
  background: ${COLORS.DARK_BLUE};
  height: 900px;
`;

export const Input = styled.input`
  display: flex;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border: none;
  height: 34px;
  width: 280px;
  border-radius: 3px;
`;

export const ContentA = styled.div`
display: flex;
justify-content:center; 
align-items:center; 
height: 100vh; 
width: 100vw; 
position: absolute; 
`;

export const Button = styled.button`
  background: ${COLORS.YELLOW};
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border: none;
  height: 44px;
  width: 100px;
  border-radius: 3px;
`;






