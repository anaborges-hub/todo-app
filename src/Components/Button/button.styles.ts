import styled from 'styled-components';

type Props = {
  variant: 'primary' | 'secondary';
};

export const StyledButton = styled.button<Props>`
  display: inline-block;
  height: auto;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1.6rem;
  text-decoration: none;
  text-transform: capitalize;
  cursor: pointer;
  overflow: hidden;

  ${(p) =>
    p.variant === 'primary' &&
    `
    background-color: var(--primaryPurple);
    color: var(--white);
  `}

  ${(p) =>
    p.variant === 'secondary' &&
    `
    background-color: var(--bg-3);
  color: var(--black-1);
  `};
`;

export const StyledSelect = styled.select`
  display: inline-block;
  height: auto;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1.6rem;
  text-decoration: none;
  text-transform: capitalize;
  cursor: pointer;
  overflow: hidden;
  color: var(--black-2);
  font-family: Poppins;
  padding: 1rem;
  border: none;
  background-color: var(--bg-3);
  width: 150px;
  cursor: pointer;
`;
