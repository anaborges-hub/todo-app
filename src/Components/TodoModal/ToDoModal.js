import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { AnimatePresence } from 'framer-motion';
import { addTodo, updateTodo } from '../../slices/todoSlice';
import { StyledButton } from '../Button/button.styles';
import {
  ModalBtnContainer,
  ModalCloseButton,
  ModalContainer,
  ModalForm,
  ModalFormTitle,
  ModalWrapper,
} from './modal.styles';

const dropIn = {
  hidden: {
    opacity: 0,
    transform: 'scale(0.9)',
  },
  visible: {
    transform: 'scale(1)',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    transform: 'scale(0.9)',
    opacity: 0,
  },
};

function ToDoModal({ type, modelOpen, setModelOpen, todo }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle('');
      setStatus('incomplete');
    }
  }, [type, todo, modelOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      toast.error('Please enter a title.');
      return;
    }
    if (title && status) {
      if (type === 'add') {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleDateString(),
          })
        );
        toast.success('Task Added Successfully');
      }
      if (type === 'update') {
        if (todo.title !== title || todo.status !== status) {
          dispatch(updateTodo({ ...todo, title, status }));
          toast.success('Task updated successfully');
        } else {
          toast.error('No changes made');
          return;
        }
      }
      setModelOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {modelOpen && (
        <ModalWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ModalContainer
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ModalCloseButton
              onKeyDown={() => setModelOpen(false)}
              onClick={() => setModelOpen(false)}
              role="button"
              tabIndex={0}
              initial={{ top: 40, opacity: 0 }}
              animate={{ top: -10, opacity: 1 }}
              exit={{ top: 40, opacity: 0 }}
            >
              <MdOutlineClose />
            </ModalCloseButton>

            <ModalForm onSubmit={(e) => handleSubmit(e)}>
              <ModalFormTitle>
                {type === 'add' ? 'Add' : 'Update'} TODO
              </ModalFormTitle>
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label htmlFor="status">
                Status
                <select
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Complete</option>
                </select>
              </label>
              <ModalBtnContainer>
                <StyledButton type="submit" variant="primary">
                  {type === 'add' ? 'Add Task' : 'Update Task'}
                </StyledButton>
                <StyledButton
                  variant="secondary"
                  onClick={() => setModelOpen(false)}
                >
                  Cancel
                </StyledButton>
              </ModalBtnContainer>
            </ModalForm>
          </ModalContainer>
        </ModalWrapper>
      )}
    </AnimatePresence>
  );
}

export default ToDoModal;
