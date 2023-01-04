import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../slices/todoSlice';
import CheckButton from '../CheckButton/CheckButton';
import ToDoModal from '../TodoModal/ToDoModal';
import {
  StyledItem,
  TodoDetails,
  StyledTexts,
  TodoText,
  StyledTime,
  StyledTodoActions,
  StyledIcon,
} from './todoitem.styles';

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [updateModelOpen, setUpdateModelOpen] = useState(false);

  useEffect(() => {
    if (todo.status === 'complete') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({ ...todo, status: checked ? 'incomplete' : 'complete' })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Todo Deleted Successfully');
  };

  const handleUpdate = () => {
    setUpdateModelOpen(true);
  };

  return (
    <>
      <StyledItem variants={child}>
        <TodoDetails>
          <CheckButton checked={checked} handleCheck={handleCheck} />
          <StyledTexts>
            <TodoText completed={todo.status === 'complete'}>
              {todo.title}
            </TodoText>
            <StyledTime>{todo.time}</StyledTime>
          </StyledTexts>
        </TodoDetails>
        <StyledTodoActions>
          <StyledIcon
            onClick={handleDelete}
            onKeyDown={handleDelete}
            tabIndex={0}
            role="button"
          >
            <MdDelete />
          </StyledIcon>
          <StyledIcon
            onClick={handleUpdate}
            onKeyDown={handleUpdate}
            role="button"
            tabIndex={0}
          >
            <MdEdit />
          </StyledIcon>
        </StyledTodoActions>
      </StyledItem>
      <ToDoModal
        type="update"
        modalOpen={updateModelOpen}
        setModelOpen={setUpdateModelOpen}
        todo={todo}
      />
    </>
  );
}

export default TodoItem;
