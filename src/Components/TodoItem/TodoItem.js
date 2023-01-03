// import { format } from 'date-fns';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../slices/todoSlice';
// import styles from './.../styles/modules/todoItem.module.scss';
// import styles from '../../styles/modules/todoItem.module.scss';
import { getClasses } from '../../utils/getClasses';
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

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [updateModelOpen, setUpdateModelOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Todo Deleted Successfully');
  };

  const handleUpdate = () => {
    setUpdateModelOpen(true);
  };

  return (
    <>
      <StyledItem>
        <TodoDetails>
          <CheckButton />
          <StyledTexts>
            <TodoText>{todo.title}</TodoText>
            <StyledTime>{todo.time}</StyledTime>
          </StyledTexts>
        </TodoDetails>
        <StyledTodoActions>
          <StyledIcon
            onClick={handleDelete}
            onKeyDown={handleDelete}
            role="button"
            tabIndex={0}
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
        todo={todo}
        modalOpen={updateModelOpen}
        setModelOpen={setUpdateModelOpen}
      />
    </>
  );
}

export default TodoItem;
