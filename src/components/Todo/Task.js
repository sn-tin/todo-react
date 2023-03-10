import { DeleteOutlineOutlined, ModeEditOutline } from '@mui/icons-material'
import React from 'react'
import { useStateContext } from '../../context/StateContextProvider';
import { StyledTask, TaskDetails } from './Todo.styles';

function TodoList({task}) {
  const { tasks, setTasks } = useStateContext();
  const deleteTask = () => {
    const newData = [...tasks];
    const updatedData = newData.filter((data) => data.id !== task.id);
    setTasks(updatedData);
    console.log("deleted")
  }
  return (
    <StyledTask>
        <input type="checkbox" />
        <TaskDetails>
            <p className="task">{task.task}</p>
            <p className="due"><strong>Due:</strong> {task.dueDate}</p>
        </TaskDetails>
        <div className="options">
            <ModeEditOutline />
            <DeleteOutlineOutlined onClick={deleteTask}/>
        </div>
    </StyledTask>
  )
}

export default TodoList;