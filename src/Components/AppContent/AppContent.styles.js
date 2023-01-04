import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledContent = styled(motion.p)`
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--black-2);
  text-align: center;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background-color: var(--gray-2);
  width: max-content;
  height: auto;
`;

export const ContentWrapper = styled(motion.div)`
  background-color: var(--bg-2);
  padding: 2rem;
  border-radius: 12px;
  @include smallDeviceSize {
    padding: 1.5rem;
  }
`;

export const StyledEmptyText = styled(motion.p)`
  // display: inline-block;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--black-2);
  text-align: center;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background-color: var(--gray-2);
  width: max-content;
  height: auto;
`;
