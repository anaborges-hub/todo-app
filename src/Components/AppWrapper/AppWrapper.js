import React from 'react';
import { StyledAppWrapper } from './AppWrapper.styles';

function Wrapper({ children }) {
  return <StyledAppWrapper>{children}</StyledAppWrapper>;
}

export default Wrapper;
