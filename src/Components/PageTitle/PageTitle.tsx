import React from 'react';
import { StyledTitle } from './pagetitle.styles';

type Props = {
  children: React.ReactNode;
};

function PageTitle({ children, ...rest }: Props) {
  return <StyledTitle {...rest}>{children}</StyledTitle>;
}

export default PageTitle;
