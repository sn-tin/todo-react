import React, { createContext, useContext, useState } from 'react'

const StateContent = createContext(null);

function StateContextProvider({children}) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Finish todo app",
      dueDate: "2023-03-09"
    }
  ])
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
    }}>
        {children}
    </StateContent.Provider>
  )
}

export const useStateContext = () => useContext(StateContent);
export default StateContextProvider;