import React, { useState } from 'react';
import Button, { SelectButton } from '../Button/Button';
import ToDoModal from '../TodoModal/ToDoModal';
import { StyledHeader } from './header.styles';
import { updateFilterStatus } from '../../slices/todoSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

function AppHeader() {
  const [modelOpen, setModelOpen] = useState(false);
  const initialFilterStatus = useAppSelector(
    (state) => state.todo.filterStatus
  );
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useAppDispatch();

  const updateFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <StyledHeader>
      <Button
        type="submit"
        variant="primary"
        onClick={() => setModelOpen(true)}
      >
        Add task
      </Button>
      <SelectButton id="status" onChange={updateFilter} value={filterStatus}>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <ToDoModal
        type="add"
        modelOpen={modelOpen}
        setModelOpen={setModelOpen}
        todo={{
          id: '',
          status: '',
          title: '',
          time: '',
        }}
      />
    </StyledHeader>
  );
}

export default AppHeader;
