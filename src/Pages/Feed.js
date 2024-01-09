import React, { useEffect } from 'react'
import './Feed.css'
import { useLocation } from 'react-router-dom'
import FeedHeader from './FeedHeader.js';
import Toggle from '../Components/Toggle.js';
function Feed() {
  
  useEffect (() => {
    document.title = 'Order food online | Food delivery app | Uber Eats';
  })
  return (
    <div className='feed'>
        <FeedHeader />
        
    </div>
  )
}

export default Feed