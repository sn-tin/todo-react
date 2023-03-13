import React, { useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Task from './Task';
import { StyledAddButton, StyledTaskWrapper, StyledTodo } from './Todo.styles';
import { useStateContext } from '../../context/StateContextProvider';
import { useAuthContext } from '../../context/AuthContextProvider';
import { auth, db } from '../../firebase';
import { onValue, ref } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

function Todo() {
  const  { user }  = useAuthContext()
  const { formOpen, tasks, setTasks } = useStateContext();
  const navigate = useNavigate()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
          setTasks([]);
          const data = snapshot.val();
          if (data !== null) {
            Object.values(data).map((todo) => {
              setTasks((oldArray) => [...oldArray, todo]);
            });
          }
        });
      } else if (!user) {
        navigate("/");
      }
    });
  }, [])
  return (
    <StyledTodo>
        <h1>Hello!</h1>
        <p><strong>User:</strong> {user.email}.</p>
        <p>Here are your tasks.</p>
        <StyledAddButton onClick={formOpen}><AddIcon /> Add New Task</StyledAddButton>
        
          <StyledTaskWrapper className="tasks">
              {
                tasks.map((data, index) => {
                  return (
                    <Task key={index} task={data} />
                  )
                }
              )}
          </StyledTaskWrapper> 
        
    </StyledTodo>
  )
}

export default Todo