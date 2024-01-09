import React, { useEffect, useState } from 'react'
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
import { Link } from 'react-router-dom';
import AddressSearch from '../Components/AddressSearch';

function Header() { 
     const [open, setOpen] = useState(false);
     const [hideHeaderMiddle, setHideHeaderMiddle] = useState(true);
     
     const handleScroll = () => {
       if (window.scrollY >40) {
         setHideHeaderMiddle(false);
       } else {
         setHideHeaderMiddle(true);
       }
     };
   
     useEffect(() => {
       window.addEventListener('scroll', handleScroll);
       return () => {
         window.removeEventListener('scroll', handleScroll);
       };
     }, []);
   
   





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
    <div className={`header ${hideHeaderMiddle ? 'hideHeaderMiddle' : 'showWhiteBackground'}`}>
        <div className="header__left">
        <MenuIcon onClick={() => setOpen(true)} />
            <p>Uber <strong>Eats</strong></p>
        </div>
        <div className="header__middle">
            <FmdGoodIcon />
            <AddressSearch />
        </div>
        <div className="header__right">
          <Link to='/login'>
            <Button className='header__signIn'> <PersonIcon />Log in</Button>
            </Link>
            <Link to='/register'>
            <Button className='header__signUp' >Sign up</Button>
            </Link>
        </div>



{/* The below is Material Drawer for which opens rom left */}
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        {getList()}
      </Drawer>
    </div>
  )
}

export default Header