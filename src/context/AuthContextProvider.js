import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const AuthContext = createContext(null);

function AuthContextProvider({children}) {
  const [ user, setUser ] = useState({})
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log('User status changed:', user)
    });
    return () => {
      unsubscribe();
    };
  }, []);
  
  return (
    <AuthContext.Provider value={{
      user,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext);
export default AuthContextProvider;