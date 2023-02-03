import React from 'react';
import { StyledButton, StyledSelect } from './button.styles';

type Props = {
  type?: 'submit' | 'button';
  children: React.ReactNode;
  id?: string;
  variant?: 'primary' | 'secondary';
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
};

function Button({
  type = 'button',
  variant = 'primary',
  children,
  ...rest
}: Props) {
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
