import React, { useEffect, useState } from 'react'
import './Header.css'
import { Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Link } from 'react-router-dom';
import AddressSearch from '../Components/AddressSearch';
import Navbar from '../Components/Navbar';

function Header() { 
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
  return (
    <div className={`header ${hideHeaderMiddle ? 'hideHeaderMiddle' : 'showWhiteBackground'}`}>
        <div className="header__left">
        <Navbar />
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
    </div>
  )
}

export default Header