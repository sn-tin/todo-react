import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Task from './Task';
import { StyledAddButton, StyledTaskWrapper, StyledTodo } from './Todo.styles';
import { useStateContext } from '../../context/StateContextProvider';
import { useAuthContext } from '../../context/AuthContextProvider';

function Todo() {
  const  { user }  = useAuthContext()
  const { formOpen, tasks } = useStateContext();
  return (
    <StyledTodo>
        <h1>Hello, {user.email}!</h1>
        <p>Here are your tasks.</p>
        <StyledAddButton onClick={formOpen}><AddIcon /> Add New Task</StyledAddButton>
        { tasks && 
          <StyledTaskWrapper className="tasks">
              {
                tasks.map((data) => {
                  return (
                    <Task key={data.id} task={data} />
                  )
                }
              )}
          </StyledTaskWrapper> 
        }
    </StyledTodo>
  )
}

export default Todo