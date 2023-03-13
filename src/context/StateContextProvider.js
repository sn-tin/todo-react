import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { set, ref } from "firebase/database";
import { uid } from 'uid';

const StateContent = createContext(null);

function StateContextProvider({children}) {
  const initialState = {
    task: "",
    dueDate: "",
    comment: "",
    isCompleted: false,
  }
  const [task, setTask] = useState(initialState)
  const [tasks, setTasks] = useState([])

  /* Add New Task data */ 
  const changeTaskData = (e) => {
    setTask((prevData) => {
      const {name, value} = e.target
      const uidd = uid()
      return {
          ...prevData,
          uidd: uidd,
          [name]: value,
      }
    })
  }
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formOpen = () => {
    setIsFormOpen(!isFormOpen)
    setTask(initialState)
  }
  const formSubmit = async (e) => {
    e.preventDefault(e)
    setIsFormOpen(false)
    set(ref(db, `/${auth.currentUser.uid}/${task.uidd}`), {
      task: task.task,
      dueDate: task.dueDate,
      uidd: task.uidd,
      comment: task.comment,
      isCompleted: false,
    })
    console.log(task, tasks)
    // setTask(initialState)
  }
  return (
    <StateContent.Provider value={{
      isFormOpen,
      formOpen,
      formSubmit,
      changeTaskData,
      tasks,
      setTasks,
    }}>
        {children}
    </StateContent.Provider>
  )
}

export const useStateContext = () => useContext(StateContent);
export default StateContextProvider;