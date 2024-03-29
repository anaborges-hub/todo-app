import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ModalWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled(motion.div)`
  background-color: var(--bg-2);
  max-width: 500px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 8px;
  position: relative;
`;

export const ModalCloseButton = styled(motion.div)`
  position: absolute;
  top: -10px;
  right: 0;
  transform: translateY(-100%);
  font-size: 2.5rem;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: var(--gray-1);
  color: var(--black-2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s ease all;
  z-index: -1;
  &:hover {
    background-color: #e32525;
    color: white;
  }
`;

export const ModalFormTitle = styled.h1`
  color: var(--black-1);
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-transform: capitalize;
`;

export const ModalForm = styled.form`
  width: 100%;
  label {
    font-size: 1.6rem;
    color: var(--black-1);
    input,
    select {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
      width: 100%;
      padding: 1rem;
      border: none;
      background-color: var(--white);
      font-size: 1.6rem;
    }
  }
`;

export const ModalBtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
`;
