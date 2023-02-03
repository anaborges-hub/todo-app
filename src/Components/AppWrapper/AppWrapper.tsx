import React from 'react';
import { StyledAppWrapper } from './AppWrapper.styles';

type Props = {
  children: React.ReactNode;
};

function Wrapper({ children }: Props) {
  return <StyledAppWrapper>{children}</StyledAppWrapper>;
}

export default Wrapper;
