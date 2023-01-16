import React from 'react';
import { StyledContainer } from './container.styles';

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
