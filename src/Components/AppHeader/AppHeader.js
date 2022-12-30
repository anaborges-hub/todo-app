import React, { useState } from 'react';
import Button, { SelectButton } from '../Button/Button';
// import ToDoModel from '../TodoModal/ToDoModal';
import ToDoModal from '../ToDoModal';
import { StyledHeader } from './header.styles';

function AppHeader() {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <StyledHeader>
      <Button variant="primary" onClick={() => setModelOpen(true)}>
        Add task
      </Button>
      <SelectButton id="status">
        <option value="all">ALL</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <ToDoModal type="add" modelOpen={modelOpen} setModelOpen={setModelOpen} />
    </StyledHeader>
  );
}

export default AppHeader;
