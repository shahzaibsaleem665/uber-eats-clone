import React from 'react'
import './UserHeader.css'
import Navbar from '../Components/Navbar'
import Toggle from '../Components/Toggle'
import FeedAddress from '../Components/FeedAddress'
import FoodSearch from '../Components/FoodSearch'
import { Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useHistory } from 'react-router-dom'
import UserNavbar from '../Components/UserNavbar'

function UserHeader() {
  return (
    <div className='userHeader'>
<div className="userHeader__left">
            <UserNavbar/>
            <p>Uber <strong>Eats</strong></p>
        </div>
        <div className="userHeader__middle">
        <FeedAddress />
        </div>
        <div className="userHeader__right">
          <div className="userHeader__rightSearch">
          <FoodSearch />
          </div>
        <div className="userHeader__rightButton">
        <Button className='button__cart'><ShoppingCartIcon/>Items</Button>
        </div>
        </div>
    </div>
  )
}

export default UserHeader