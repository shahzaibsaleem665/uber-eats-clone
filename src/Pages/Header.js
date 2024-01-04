import React, { useState } from 'react'
import './Header.css'
import { Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import {
  Drawer,
  ListItem,
} from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import AdbIcon from '@mui/icons-material/Adb';
import main_logo from '../assets/main_logo.png'

function Header() { 
     const [open, setOpen] = useState(false);
  const getList = () => (
      <div style={{ width: 300 }} onClick={() => setOpen(false)} className='navbar'>
        <div className='navbar__top'>
          <ListItem>
          <Button className='listItem__register'>Sign up</Button>
          </ListItem>
          <ListItem>
          <Button className='listItem__login'>Log in</Button>
          </ListItem>
          <div className="navbar__links">
            <ListItem>
              <p>Create a business account</p>
            </ListItem>
            <ListItem>
              <p>Add your account</p>
            </ListItem>
            <ListItem>
              <p>Sign up to deliver</p>
            </ListItem>
          </div>
          </div>
          <div className="navbar__bottom">
          <ListItem className='navbar__bottomIconList'>
              <img  src={main_logo} />
              <p>There's more to love in the app.</p>
            </ListItem>
            <ListItem className='navbar__bottomButtons'>
              <Button><AppleIcon /> Iphone</Button>
              <Button><AdbIcon />Android</Button>
            </ListItem>

          </div>
      </div>
    );
  
  return (
    <div className='header'>
        <div className="header__left">
        <MenuIcon onClick={() => setOpen(true)} />
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



{/* The below is Material Drawer for which opens rom left */}
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        {getList()}
      </Drawer>
    </div>
  )
}

export default Header