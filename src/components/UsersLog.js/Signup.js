import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

function Signup() {
    const navigate = useNavigate();
  /* Sign Up */ 
  const initialSignUpState = {
    name: "",
    email: "", 
    password: ""
  }
  const [userSignUp, setUserSignUp] = useState(initialSignUpState)
  const onSignUp = async (e) => {
    e.preventDefault()
    await createUserWithEmailAndPassword(auth, userSignUp.email, userSignUp.password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/login")
          alert("Succesfully Signed Up")
          setUserSignUp(initialSignUpState)
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode)
          alert(errorMessage);
          // ..
      });
  }
  const handleUserSignUp = (e) => {
    setUserSignUp(prevUserData => {
      const {name, value} = e.target
      return {
        ...prevUserData,
        [name]: value
      }
    })
  }
  return (
    <div>
        <h1>Hi!</h1>
        <p>Create a new account</p>
        <form onSubmit={onSignUp}>
            <input 
                type="text"
                value={userSignUp.name}
                name="name" 
                placeholder="Name"
                onChange={handleUserSignUp}
                required/>
            <input 
                type="email"
                value={userSignUp.email}
                name="email" 
                placeholder="Email"
                onChange={handleUserSignUp}  
                required/>
            <input 
                type="password"
                value={userSignUp.password}
                name="password" 
                placeholder="Password"
                onChange={handleUserSignUp} 
                required/>
            <button>Sign Up</button>
        </form>
    </div>
  )
}

export default Signup