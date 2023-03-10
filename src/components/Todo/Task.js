import { DeleteOutlineOutlined, ModeEditOutline } from '@mui/icons-material'
import React from 'react'
import { StyledTask, TaskDetails } from './Todo.styles';

function TodoList() {
  return (
    <StyledTask>
        <input type="checkbox" />
        <TaskDetails>
            <p className="task">Finish React Project</p>
            <p className="due"><strong>Due:</strong> 04/05/2023</p>
        </TaskDetails>
        <div className="options">
            <ModeEditOutline />
            <DeleteOutlineOutlined />
        </div>
    </StyledTask>
  )
}

export default TodoList;