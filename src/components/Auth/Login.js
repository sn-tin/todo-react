import { signInWithEmailAndPassword } from 'firebase/auth';
import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../../context/StateContextProvider';
import { auth, db } from '../../firebase';
import { StyledAuth, AuthBtn } from './Auth.styles';

function Login() {
const { setTasks } = useStateContext();
const navigate = useNavigate();

const initialLogInState = {
    email: "", 
    password: ""
}
const [userLogin, setUserLogin] = useState(initialLogInState)
const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userLogin.email, userLogin.password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/account")
        setUserLogin(initialLogInState)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        alert(errorMessage)
    });
  }
  const handleUserLogIn = (e) => {
    setUserLogin(prevUserData => {
      const {name, value} = e.target
      return {
        ...prevUserData,
        [name]: value
      }
    })
  }
  return (
    <div>
        <StyledAuth onSubmit={onLogin}>
        <h1>Welcome!</h1>
        <p>Log in to continue</p>
            <input 
                type="email" 
                name="email"
                value={userLogin.email}
                placeholder="Enter a valid email"
                onChange={handleUserLogIn}
                required/>
            <input 
                type="password"
                name="password"
                value={userLogin.password} 
                placeholder="Password"
                onChange={handleUserLogIn}
                required/>
            <AuthBtn>Log In</AuthBtn>
            <small>Don't have an account? <Link to="/signup">Sign Up</Link></small>
        </StyledAuth>
    </div>
  )
}

export default Login