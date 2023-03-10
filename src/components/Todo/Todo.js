import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Task from './Task';
import { StyledAddButton, StyledTaskWrapper, StyledTodo } from './Todo.styles';
import { useStateContext } from '../../context/StateContextProvider';

function Todo() {
  const { addTaskForm } = useStateContext();
  return (
    <StyledTodo>
        <h1>Hello, Kristine!</h1>
        <p>Here are your tasks.</p>
        <StyledAddButton onClick={addTaskForm}><AddIcon /> Add New Task</StyledAddButton>
        <StyledTaskWrapper className="tasks">
            <Task />
        </StyledTaskWrapper>
    </StyledTodo>
  )
}

export default Todo