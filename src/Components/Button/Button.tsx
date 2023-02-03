import React from 'react';
import { StyledButton, StyledSelect } from './button.styles';

type ButtonProps = {
  type?: 'submit' | 'button';
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLButtonElement>) => void;
  value?: string;
};

type SelectProps = {
  id?: string;
  children: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
};

function Button({
  type = 'button',
  variant = 'primary',
  children,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton type={type} variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
}

function SelectButton({ children, id, ...rest }: SelectProps) {
  return (
    <StyledSelect id={id} {...rest}>
      {children}
    </StyledSelect>
  );
}

export { SelectButton };
export default Button;
