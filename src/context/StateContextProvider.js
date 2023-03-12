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
import { useNavigate } from 'react-router-dom';

const StateContent = createContext(null);

function StateContextProvider({children}) {
  // const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'todos'), orderBy("dueDate"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id})
      })
      setTasks(todosArr)
      console.log(todosArr)
    });
    return () => unsubscribe();
  }, [])

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
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formOpen = () => {
    setIsFormOpen(!isFormOpen)
    setNewTask(initialState)
  }
  const formSubmit = async (e) => {
    e.preventDefault(e)
    setIsFormOpen(false)
    set(ref(db, `/${auth.currentUser.uid}`), {
      task: newTask.task,
      dueDate: newTask.dueDate,
      isCompleted: false,
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
      setTasks,
      isLoggedIn, setIsLoggedIn
    }}>
        {children}
    </StateContent.Provider>
  )
}

export const useStateContext = () => useContext(StateContent);
export default StateContextProvider;