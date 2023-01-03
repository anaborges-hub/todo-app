import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
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

function ToDoModal({ type, modelOpen, setModelOpen, todo }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  const dispatch = useDispatch();

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
          dispatch(
            updateTodo({
              ...todo,
              title,
              status,
            })
          );
        } else {
          toast.error("Title shouldn't be empty");
        }
      }
      setModelOpen(false);
    }
  };

  return (
    modelOpen && (
      <ModalWrapper>
        <ModalContainer>
          <ModalCloseButton
            onClick={() => setModelOpen(false)}
            onKeyDown={() => setModelOpen(false)}
            tabIndex={0}
            role="button"
          >
            <MdOutlineClose />
          </ModalCloseButton>
          <ModalForm onSubmit={(e) => handleSubmit(e)}>
            <ModalFormTitle>
              {type === 'add' ? 'Add' : 'Update'} Task
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
                onKeyDown={() => setModelOpen(false)}
              >
                Cancel
              </StyledButton>
            </ModalBtnContainer>
          </ModalForm>
        </ModalContainer>
      </ModalWrapper>
    )
  );
}

export default ToDoModal;
