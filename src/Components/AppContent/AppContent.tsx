import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useAppSelector } from '../../app/hooks';

import { ContentWrapper, StyledEmptyText } from './AppContent.styles';
import TodoItem from '../TodoItem/TodoItem';

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function AppContent() {
  const todoList = useAppSelector((state) => state.todo.todoList);
  const filterStatus = useAppSelector((state) => state.todo.filterStatus);
  // console.log(todoList);

  const sortedTodoList = [...todoList];
  sortedTodoList.sort(
    (a, b) => new Date(b.time).valueOf() - new Date(a.time).valueOf()
    // https://stackoverflow.com/questions/36560806/the-left-hand-side-of-an-arithmetic-operation-must-be-of-type-any-number-or
  );

  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === 'all') {
      return true;
    }
    return item.status === filterStatus;
  });

  return (
    <ContentWrapper variants={container} initial="hidden" animate="visible">
      <AnimatePresence>
        {filteredTodoList && filteredTodoList.length > 0 ? (
          filteredTodoList.map((todo) => (
            //   <motion.div key={todo.id} variants={child}>
            <TodoItem key={todo.id} todo={todo} />
            // </motion.div>
          ))
        ) : (
          <StyledEmptyText variants={child}>No todos</StyledEmptyText>
        )}
      </AnimatePresence>
    </ContentWrapper>
    // <div>
    // {sortedTodoList && sortedTodoList.length > 0
    //  ? sortedTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
    // : 'no todo found'}
    // </div>
  );
}

export default AppContent;
