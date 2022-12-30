import React, { Children } from 'react';
// import styles from '../styles/modules/button.module.scss';
import { StyledButton, StyledSelect } from './button.styles';

// key(primary): value(primary)
// this is an object because {}
// const buttonTypes = {
//   primary: 'primary',
//   secondary: 'secondary',
// };

function Button({ children, type, variant, ...rest }) {
  return (
    <StyledButton type={type === 'submit' ? 'submit' : 'button'} {...rest}>
      {children}
    </StyledButton>
  );
}

function SelectButton({ children, ...rest }) {
  return <StyledSelect>{children}</StyledSelect>;
}

export { SelectButton };
export default Button;
