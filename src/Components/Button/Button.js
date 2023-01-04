import React from 'react';
import { StyledButton, StyledSelect } from './button.styles';

// key(primary): value(primary)
// this is an object because {}
const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

function Button({ type, variant = 'primary', children, ...rest }) {
  return (
    <StyledButton type={type === 'submit' ? 'submit' : 'button'} {...rest}>
      {children}
    </StyledButton>
  );
}

function SelectButton({ children, id, ...rest }) {
  return (
    <StyledSelect selected id={id} {...rest}>
      {children}
    </StyledSelect>
  );
}

export { SelectButton };
export default Button;
