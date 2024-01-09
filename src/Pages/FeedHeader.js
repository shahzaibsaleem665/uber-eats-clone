import React from 'react'
import './FeedHeader.css'
import Navbar from '../Components/Navbar'
import Toggle from '../Components/Toggle'
import FeedAddress from '../Components/FeedAddress'
function FeedHeader() {

    
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
    </div>
  )
}

export default FeedHeader