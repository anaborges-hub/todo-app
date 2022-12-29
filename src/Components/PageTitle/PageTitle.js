import React from 'react';
import { StyledTitle } from './pagetitle.styles';

function PageTitle({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

export default PageTitle;
