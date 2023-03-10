import { DeleteOutlineOutlined, ModeEditOutline } from '@mui/icons-material'
import React, { useState } from 'react'
import { useStateContext } from '../../context/StateContextProvider';
import { StyledTask, TaskDetails } from './Todo.styles';

function Task({task}) {
  const { tasks, setTasks } = useStateContext();
  const deleteTask = () => {
    const newData = [...tasks];
    const updatedData = newData.filter((data) => data.id !== task.id);
    setTasks(updatedData);
    console.log("deleted")
  }
  /* Edit Task */
  const [isEditing, setEditing] = useState(false);
    const handleEdit = () => {
        setEditing(true)
        console.log(currentTask)
    }
    const [currentTask, setCurrentTask] = useState(task);
    const editTask = (e) => {
        setCurrentTask(prevData => {
          const { name, value } = e.target;
          return {
            ...prevData,
            [name]: value
          }
        })
        console.log(currentTask.task, currentTask.dueDate)
    }
    const handleUpdateTodo = (id, updatedTodo) => {
      let updatedItem = tasks.map((todo) => {
        return todo.id === id ? updatedTodo : todo;
      });
      closeEdit();
      setTasks(updatedItem);
    }
    const submitEdit = (e) => {
        e.preventDefault()
        handleUpdateTodo(task.id, currentTask);
    }
    const closeEdit = () => {
      setEditing(false)
    }
    const [isCompleted, setIsCompleted]  = useState(false)
    const handleCheckbox = (e) => {
      setIsCompleted(!isCompleted)
    }
  return (
    <StyledTask>
        <input type="checkbox" name="completed" checked={isCompleted} onChange={handleCheckbox}/>
        {
          isEditing ?
          <form onSubmit={submitEdit}>
            <input type="text" name="task" value={currentTask.task} onChange={editTask} />
            <input type="date" name="dueDate" value={currentTask.dueDate} onChange={editTask} />
            <div>
              <button style={{marginRight: "8px"}}>Edit</button><button onClick={closeEdit}>Cancel</button>
            </div>
          </form> :
          <TaskDetails>
              <p style={{textDecoration: isCompleted ? "line-through" : "none"}} className="task">{task.task}</p>
              <p className="due"><strong>Due:</strong> {task.dueDate}</p>
          </TaskDetails>
        }
        <div className="options">
            <ModeEditOutline onClick={handleEdit}/>
            <DeleteOutlineOutlined onClick={deleteTask}/>
        </div>
    </StyledTask>
  )
}

export default Task;