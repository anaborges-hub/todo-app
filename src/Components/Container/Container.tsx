import React from 'react';
import { StyledContainer } from './container.styles';

type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  console.log(children);
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
