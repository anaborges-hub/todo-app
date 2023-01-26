import React from 'react';
import { StyledButton, StyledSelect } from './button.styles';

// key(primary): value(primary)
// this is an object because {}
// const buttonTypes = {
//   primary: 'primary',
//   secondary: 'secondary',
// };

type Props = {
  type?: 'submit' | 'button';
  children: React.ReactNode;
  id?: React.ReactNode;
  variant?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
};

function Button({ type, variant = 'primary', children, ...rest }: Props) {
  return (
    <StyledButton type={type} variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
}

function SelectButton({ children, id, ...rest }: Props) {
  return (
    <StyledSelect id={id} {...rest}>
      {children}
    </StyledSelect>
  );
}

export { SelectButton };
export default Button;
