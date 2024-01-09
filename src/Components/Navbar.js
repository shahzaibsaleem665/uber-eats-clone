import React, {useState, useEffect} from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import AdbIcon from '@mui/icons-material/Adb';
import main_logo from '../assets/main_logo.png'
import { Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'
import {
    Drawer,
    ListItem,
} from '@mui/material';
import { Link } from 'react-router-dom';


function Navbar() {
    const [open, setOpen] = useState(false);


    const getList = () => (
        <div style={{ width: 280 }} onClick={() => setOpen(false)} className='navbar'>
          <div className='navbar__top'>
            <ListItem>
              <Link to='/register'>
            <Button className='listItem__register'>Sign up</Button>
            </Link>
            </ListItem>
            <ListItem>
              <Link to='/login'>
            <Button className='listItem__login'>Log in</Button>
              </Link>
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
                <a  href='https://apps.apple.com/us/app/uber-eats-food-delivery/id1058959277'>
                <Button className='apple__store'><AppleIcon /> Iphone</Button>
                </a>
                <a href='https://play.google.com/store/apps/details?id=com.ubercab.eats&pli=1'>
                <Button className='apple__store'><AdbIcon />Android</Button>
                </a>
              </ListItem>
  
            </div>
        </div>
      );
    
  return (
    <div className='navbar'>
          <MenuIcon onClick={() => setOpen(true)} />
        <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        {getList()}
      </Drawer>
    </div>
  )
}

export default Navbar