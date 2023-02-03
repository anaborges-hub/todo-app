import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { addTodo, updateTodo } from '../../slices/todoSlice';
import {
  ModalBtnContainer,
  ModalCloseButton,
  ModalContainer,
  ModalForm,
  ModalFormTitle,
  ModalWrapper,
} from './modal.styles';
import Button from '../Button/Button';
import type { Todo } from '../TodoItem/TodoItem';

type Props = {
  type: 'add' | 'update';
  modelOpen: boolean;
  setModelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  todo: Todo;
};

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

function ToDoModal({ type, modelOpen, setModelOpen, todo }: Props) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  console.log('todo', todo);
  console.log('modelOpen', modelOpen);
  console.log('setModelOpen', setModelOpen);

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle('');
      setStatus('incomplete');
    }
  }, [type, todo, modelOpen]);

  const handleSubmit = (e: React.SyntheticEvent) => {
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
          toast.success('Task Updated successfully');
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

            <ModalForm onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}>
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
              <label htmlFor="type">
                Status
                <select
                  id="type"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Complete</option>
                </select>
              </label>
              <ModalBtnContainer>
                <Button type="submit" variant="primary">
                  {type === 'add' ? 'Add Task' : 'Update Task'}
                </Button>
                <Button variant="secondary" onClick={() => setModelOpen(false)}>
                  Cancel
                </Button>
              </ModalBtnContainer>
            </ModalForm>
          </ModalContainer>
        </ModalWrapper>
      )}
    </AnimatePresence>
  );
}

export default ToDoModal;
