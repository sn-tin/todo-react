import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { StyledNav } from './Nav.styles.js';

function Nav() {
  return (
    <StyledNav>
        <span className="title-logo">Todo List</span>
        <p className='logout'><LogoutIcon /> Log Out</p>
    </StyledNav>
  )
}

export default Nav