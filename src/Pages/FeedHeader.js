import React from 'react'
import './FeedHeader.css'
import Navbar from '../Components/Navbar'
import Toggle from '../Components/Toggle'
function FeedHeader() {

    
  return (
    <div className='feedHeader'>
        <div className="feedHeader__left">
            <Navbar />
            <p>Uber <strong>Eats</strong></p>
        </div>
        <div className="feedHeader__middle">
        <Toggle />
        </div>
    </div>
  )
}

export default FeedHeader