import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
import { StyledSvg, StyledSvgBox } from './checkbtn.styles';

const checkVariants = {
  initial: {
    color: '#fff',
  },
  checked: { pathLength: 1 },
  unchecked: { pathLength: 0 },
};

const boxVariants = {
  checked: {
    background: 'var(--primaryPurple)',
    transition: { duration: 0.1 },
  },
  unchecked: { background: 'var(--gray-2)', transition: { duration: 0.1 } },
};

type Props = {
  checked: boolean;
  handleCheck: () => void;
};

function CheckButton({ checked, handleCheck }: Props) {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);
  return (
    <StyledSvgBox
      animate={checked ? 'checked' : 'unchecked'}
      variants={boxVariants}
      onClick={handleCheck}
    >
      <motion.svg
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2080/svg"
      >
        <motion.path
          variants={checkVariants}
          animate={checked ? 'checked' : 'unchecked'}
          style={{ pathLength, opacity }}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </motion.svg>
    </StyledSvgBox>
  );
}

export default CheckButton;
