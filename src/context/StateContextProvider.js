import React, { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  query,
  collection,
  onSnapshot,
} from 'firebase/firestore';

const StateContent = createContext(null);

function StateContextProvider({children}) {
  const [tasks, setTasks] = useState([{
    id: 1,
    task: "Task Demo",
    dueDate: "2023-03-09"
  }])

  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id})
      })
      setTasks(todosArr)
    });
    return () => unsubscribe();
  }, [])

  const [isFormOpen, setIsFormOpen] = useState(false);
  const formOpen = () => {
    setIsFormOpen(!isFormOpen)
    setNewTask(initialState)
  }
  const formSubmit = (e) => {
    e.preventDefault()
    setIsFormOpen(false)
    setNewTask(initialState)
    tasks.unshift(newTask)
    console.log(tasks)
  }
  /* Add New Task data */ 
  const initialState = {
    task: "",
    dueDate: "",
  }
  const [newTask, setNewTask] = useState(initialState)
  const changeTaskData = (e) => {
    setNewTask((prevData) => {
      const {name, value} = e.target
      return {
          ...prevData,
          id: tasks.length + 1,
          [name]: value
      }
    })
  }
  return (
    <StateContent.Provider value={{
      isFormOpen,
      formOpen,
      formSubmit,
      newTask,
      changeTaskData,
      tasks,
      setTasks
    }}>
        {children}
    </StateContent.Provider>
  )
}

export const useStateContext = () => useContext(StateContent);
export default StateContextProvider;