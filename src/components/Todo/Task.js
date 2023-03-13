import { DeleteOutlineOutlined, ModeEditOutline } from '@mui/icons-material'
import React, { useState } from 'react'
import { useStateContext } from '../../context/StateContextProvider';
import { auth, db } from '../../firebase';
import { StyledTask, TaskDetails } from './Todo.styles';
import { ref, remove, update } from 'firebase/database';

function Task({task}) {
  const { setTask } = useStateContext();
  const deleteTask = () => {
    remove(ref(db, `${auth.currentUser.uid}/${task.uidd}`))
  }
  /* Edit Task */
  const [isEditing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({
    task: task.task,
    dueDate: task.dueDate,
    isCompleted: task.isCompleted,
    uidd: task.uidd,
  })
  const [tempUidd, setTempUidd] = useState("")
  const handleEdit = (task) => {
        setEditing(true)
        setTempUidd(task.id)
        console.log(tempUidd)
    }
    const editTask = (e) => {
      setEditedTask(prevData => {
          const { name, value, checked, type } = e.target;
          return {
            ...prevData,
            [name]: type === "checkbox" ? checked : value
          }
        })
    }
    const submitEdit = (e) => {
        e.preventDefault()
        update(ref(db, `${auth.currentUser.uid}/${tempUidd.uidd}`), {
          task: editedTask.task,
          dueDate: editedTask.dueDate,
          isCompleted: editedTask.isCompleted,
          uidd: tempUidd
        })
        closeEdit()
    }
    const closeEdit = () => {
      setEditing(false)
    }
  return (
    <StyledTask>
        <input type="checkbox" name="isCompleted" checked={editTask.isCompleted} onChange={editTask}/>
        {
          isEditing ?
          <form onSubmit={submitEdit}>
            <input type="text" name="task" value={editedTask.task} onChange={editTask} />
            <input type="date" name="dueDate" value={editedTask.dueDate} onChange={editTask} />
            <div>
              <button style={{marginRight: "8px"}}>Edit</button><button onClick={closeEdit}>Cancel</button>
            </div>
          </form> :
          <TaskDetails>
              <p style={{textDecoration: editedTask.isCompleted ? "line-through" : "none"}} className="task">{task.task}</p>
              <p className="due"><strong>Due:</strong> {task.dueDate}</p>
          </TaskDetails>
        }
        <div className="options">
            <ModeEditOutline onClick={() => handleEdit(task)}/>
            <DeleteOutlineOutlined onClick={deleteTask}/>
        </div>
    </StyledTask>
  )
}

export default Task;