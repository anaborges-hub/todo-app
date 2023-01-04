import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';
import { StyledWrapper } from '../Wrapper/wrapper.styles';
import { StyledContent } from './AppContent.styles';

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
  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);

  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === 'all') {
      return true;
    }
    return item.status === filterStatus;
  });

  return (
    <StyledWrapper variants={container} initial="hidden" animate="visible">
      <AnimatePresence>
        {filteredTodoList && filteredTodoList.length > 0 ? (
          filteredTodoList.map((todo) => (
            //   <motion.div key={todo.id} variants={child}>
            <TodoItem key={todo.id} todo={todo} />
            // </motion.div>
          ))
        ) : (
          <StyledContent>No todos</StyledContent>
        )}
      </AnimatePresence>
    </StyledWrapper>
    // <div>
    // {sortedTodoList && sortedTodoList.length > 0
    //  ? sortedTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
    // : 'no todo found'}
    // </div>
  );
}

export default AppContent;
