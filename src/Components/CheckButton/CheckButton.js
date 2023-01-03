import React from 'react';
import { StyledSvg, StyledSvgBox } from './checkbtn.styles';

function CheckButton() {
  return (
    <StyledSvgBox>
      <StyledSvg
        viewbox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2080/svg"
      >
        <path
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </StyledSvg>
    </StyledSvgBox>
  );
}

export default CheckButton;
