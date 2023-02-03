import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledSvgBox = styled(motion.svg)`
  flex-basis: 25px;
  flex-shrink: 0;
  height: 25px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  transition: 0.3s ease background-color;
  &:hover {
    background-color: var(--grey-2);
  }
`;

export const StyledSvg = styled(motion.svg)`
  width: 100%;
  height: 100%;
  stroke: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
