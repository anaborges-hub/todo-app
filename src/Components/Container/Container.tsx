import React from 'react';
import { StyledContainer } from './container.styles';

type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
