import { signInWithEmailAndPassword } from 'firebase/auth';
import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../../context/StateContextProvider';
import { auth, db } from '../../firebase';

function Login() {
const { setTasks, isLoggedIn, setIsLoggedIn } = useStateContext();
const navigate = useNavigate();
useEffect(() => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      // read
      onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          Object.values(data).map((todo) => {
            setTasks((oldArray) => [...oldArray, todo]);
          });
        }
      });
    } else if (!user) {
      navigate("/login");
    }
  });
}, [])
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
        setIsLoggedIn(!isLoggedIn)
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
        <h1>Welcome!</h1>
        <p>Sign in to continue</p>
        <form onSubmit={onLogin}>
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
            <button>Log In</button>
            <hr />
            <Link to="/signup">Create an account</Link>
        </form>
    </div>
  )
}

export default Login