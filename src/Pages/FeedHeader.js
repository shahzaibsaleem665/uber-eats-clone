import React from 'react'
import './FeedHeader.css'
import Navbar from '../Components/Navbar'
import Toggle from '../Components/Toggle'
import FeedAddress from '../Components/FeedAddress'
import FoodSearch from '../Components/FoodSearch'
import { Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useHistory } from 'react-router-dom'
function FeedHeader() {
const history = useHistory();
    
  return (
    <div className='feedHeader'>
        <div className="feedHeader__left">
            <Navbar />
            <p>Uber <strong>Eats</strong></p>
        </div>
        <div className="feedHeader__middle">
        <Toggle />
        <FeedAddress />
        </div>
        <div className="feedHeader__right">
          <div className="feedHeader__rightSearch">
          <FoodSearch  />
          </div>
        <div className="feedHeader__rightButton">
        <Button className='button__cart'><ShoppingCartIcon/>Cart.0</Button>
        <Button onClick={(e) => history.push('/login')}><PersonIcon/>Log in</Button>
        <Button onClick={(e) => history.push('/register')}>Sign up</Button>
        </div>
        </div>
    </div>
  )
}

export default FeedHeader