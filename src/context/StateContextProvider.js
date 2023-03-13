import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { set, ref, onValue, remove, update } from "firebase/database";
import {
  query,
  collection,
  onSnapshot,
  addDoc,
  orderBy,
} from 'firebase/firestore';
import { uid } from 'uid';

const StateContent = createContext(null);

function StateContextProvider({children}) {
  const initialState = {
    task: "",
    dueDate: "",
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
      isCompleted: false,
    })
    console.log(task, tasks)
    setTask(initialState)
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