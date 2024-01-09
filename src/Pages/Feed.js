import React, { useEffect } from 'react'
import './Feed.css'
import { useLocation } from 'react-router-dom'
import FeedHeader from './FeedHeader.js';
function Feed() {
  const location = useLocation();
  const selectedAddress = new URLSearchParams(location.search).get('address');
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