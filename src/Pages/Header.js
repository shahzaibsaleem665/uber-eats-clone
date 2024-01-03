import React from 'react'
import './Header.css'
import { Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import FmdGoodIcon from '@mui/icons-material/FmdGood';



function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <MenuIcon />
            <h1>Uber Eats</h1>
        </div>
        <div className="header__middle">
            <FmdGoodIcon />
            <input type='text' placeholder='Enter delivery address' />
        </div>
        <div className="header__right">
            <Button className='header__signIn'> <PersonIcon />Log in</Button>
            <Button className='header__signUp'>Sign up</Button>
        </div>
    </div>
  )
}

export default Header