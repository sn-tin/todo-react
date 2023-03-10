import React, { createContext, useContext, useState } from 'react'

const StateContent = createContext(null);

function StateContextProvider({children}) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const addTaskForm = () => {
    setIsFormOpen(!isFormOpen)
  }
  const formSubmit = (e) => {
    e.preventDefault()
    setIsFormOpen(false)
  }
  /* Add New Task data */ 
  const initialState = {
    todo: "",
    dueDate: "",
  }
  const [newTask, setNewTask] = useState(initialState)
  const addTaskData = (e) => {
    const [name, value] = e.target;
    setNewTask(prevTask => ({
      ...prevTask,
      [name]: value
    }))
    console.table(newTask)
  }
  return (
    <StateContent.Provider value={{
      isFormOpen,
      addTaskForm,
      formSubmit,
      addTaskData,
    }}>
        {children}
    </StateContent.Provider>
  )
}

export const useStateContext = () => useContext(StateContent);
export default StateContextProvider;