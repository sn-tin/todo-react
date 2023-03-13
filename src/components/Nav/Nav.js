import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { StyledNav } from './Nav.styles.js';
import { auth } from '../../firebase.js';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContextProvider.js';

function Nav() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate("/")
    } catch (error) {
      alert(error);
    }
  };
  return (
    <StyledNav>
        <span className="title-logo">Todo List</span>
        { user && <p className='logout' style={{cursor: "pointer"}} onClick={handleSignOut}><LogoutIcon /> Log Out</p> }
    </StyledNav>
  )
}

export default Nav