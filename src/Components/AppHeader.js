import React, { useState } from 'react';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import ToDoModel from './ToDoModel';

function AppHeader() {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModelOpen(true)}>
        Add task
      </Button>
      <SelectButton id="status">
        <option value="all">ALL</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <ToDoModel type="add" modelOpen={modelOpen} setModelOpen={setModelOpen} />
    </div>
  );
}

export default AppHeader;
