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




function Header() { 
     const [open, setOpen] = useState(false);
  const getList = () => (
      <div style={{ width: 300 }} onClick={() => setOpen(false)} className='navbar__button'>
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
          <div className="navbar__bottom">
          <ListItem>
              <img />
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