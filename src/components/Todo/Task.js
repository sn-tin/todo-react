import { DeleteOutlineOutlined, ModeEditOutline } from '@mui/icons-material'
import React from 'react'
import { StyledTask, TaskDetails } from './Todo.styles';

function TodoList({task}) {
  return (
    <StyledTask>
        <input type="checkbox" />
        <TaskDetails>
            <p className="task">{task.task}</p>
            <p className="due"><strong>Due:</strong> {task.dueDate}</p>
        </TaskDetails>
        <div className="options">
            <ModeEditOutline />
            <DeleteOutlineOutlined />
        </div>
    </StyledTask>
  )
}

export default TodoList;