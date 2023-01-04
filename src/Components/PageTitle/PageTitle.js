import React from 'react';
import { StyledTitle } from './pagetitle.styles';

function PageTitle({ children, ...rest }) {
  return <StyledTitle {...rest}>{children}</StyledTitle>;
}

export default PageTitle;
