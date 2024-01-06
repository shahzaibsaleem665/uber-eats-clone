import React from 'react'
import './Home.css'
import Header from './Header'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Button } from '@mui/material';
import Cards from '../Components/Cards';

function Home() {
  return (
    <div className='home'>
      <Header />
      <div className="home__container">
        <h1>Order delivery near you</h1>
      </div>
      <div className="home__containerSearchBox">
      <div className="home__containerSearch">
            <FmdGoodIcon />
      <input type='text' placeholder='Enter delivery address' /> 
      </div>
      <div className="home__containerSearchSelectButton">
      <select>
             <option>Deliver Now</option>
             <option>Schedule for later</option>
            </select>
            <Button >Find Food</Button>
      </div>         
      </div>
      <div className="home__cards">
      <Cards />
      </div>
    </div>
  )
}

export default Home