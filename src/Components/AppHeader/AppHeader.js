import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { SelectButton } from '../Button/Button';
import ToDoModal from '../TodoModal/ToDoModal';
import { StyledHeader } from './header.styles';
import { updateFilterStatus } from '../../slices/todoSlice';

function AppHeader() {
  const [modelOpen, setModelOpen] = useState(false);
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <StyledHeader>
      <Button variant="primary" onClick={() => setModelOpen(true)}>
        Add task
      </Button>
      <SelectButton
        id="status"
        onChange={(e) => updateFilter(e)}
        value={filterStatus}
      >
        <option value="all">ALL</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <ToDoModal type="add" modelOpen={modelOpen} setModelOpen={setModelOpen} />
    </StyledHeader>
  );
}

export default AppHeader;
