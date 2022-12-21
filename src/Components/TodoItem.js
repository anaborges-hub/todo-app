// import { format } from 'date-fns';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../slices/todoSlice';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';
import CheckButton from './CheckButton';
import ToDoModel from './ToDoModel';

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
      <div className={styles.item}>
        <div className={styles.todoDetails}>
          <CheckButton />
          <div className={styles.texts}>
            <p
              className={getClasses([
                styles.todoText,
                todo.status === 'complete' && styles['todoText--completed'],
              ])}
            >
              {todo.title}
            </p>
            <p className={styles.time}>{todo.time}</p>
            {/* <p className={styles.time}>
            {format(new Date(todo.time), 'p, MM/dd/yyyy')}
          </p> */}
          </div>
        </div>
        <div className={styles.todoActions}>
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
        </div>
      </div>
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
