import { DeleteOutlineOutlined, ModeEditOutline } from '@mui/icons-material'
import { deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useStateContext } from '../../context/StateContextProvider';
import { db } from '../../firebase';
import { StyledTask, TaskDetails } from './Todo.styles';

function Task({task}) {
  const { tasks, setTasks } = useStateContext();
  const deleteTask = async () => {
    await deleteDoc(doc(db, 'todos', task.id));
    const newData = [...tasks];
    const updatedData = newData.filter((data) => data.id !== task.id);
    setTasks(updatedData);
    console.log("deleted")
  }
  /* Edit Task */
  const [isEditing, setEditing] = useState(false);
    const handleEdit = () => {
        setEditing(true)
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
    const handleCheckbox = async (e) => {
      setCurrentTask((prevTask) => {
          const { name,checked } = e.target;
          return {
            ...prevTask,
            [name]: checked
          }
      })
      await updateDoc(doc(db, "todos", currentTask.id), {
        isCompleted: !currentTask.isCompleted
      })
    }
  return (
    <StyledTask>
        <input type="checkbox" name="isCompleted" checked={currentTask.isCompleted} onChange={handleCheckbox}/>
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
              <p style={{textDecoration: currentTask.isCompleted ? "line-through" : "none"}} className="task">{task.task}</p>
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