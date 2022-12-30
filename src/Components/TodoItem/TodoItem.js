// import { format } from 'date-fns';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../slices/todoSlice';
// import styles from './.../styles/modules/todoItem.module.scss';
import styles from '../../styles/modules/todoItem.module.scss';
import { getClasses } from '../../utils/getClasses';
import CheckButton from '../CheckButton';
// import ToDoModel from '../TodoModal/ToDoModal';
import ToDoModel from '../ToDoModel';
import {
  StyledItem,
  TodoDetails,
  StyledTexts,
  StyledTime,
  StyledTodoActions,
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
            <p
              className={getClasses([
                styles.todoText,
                todo.status === 'complete' && styles['todoText--completed'],
              ])}
            >
              {todo.title}
            </p>
            <StyledTime>{todo.time}</StyledTime>
            {/* <p className={styles.time}>
              {format(new Date(todo.time), 'p, MM/dd/yyyy')}
            </p> */}
          </StyledTexts>
        </TodoDetails>
        <StyledTodoActions>
          <div
            className={styles.icon}
            onClick={handleDelete}
            onKeyDown={handleDelete}
            role="button"
            tabIndex={0}
          >
            <MdDelete />
          </div>
          <div
            className={styles.icon}
            onClick={handleUpdate}
            onKeyDown={handleUpdate}
            role="button"
            tabIndex={0}
          >
            <MdEdit />
          </div>
        </StyledTodoActions>
      </StyledItem>
      <ToDoModel
        type="update"
        todo={todo}
        modalOpen={updateModelOpen}
        setModelOpen={setUpdateModelOpen}
      />
    </>
  );
}

export default TodoItem;
