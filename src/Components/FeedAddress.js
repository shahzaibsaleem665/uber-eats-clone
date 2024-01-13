import React from 'react'
import './FeedAddress.css'
import { useLocation } from 'react-router-dom';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

function FeedAddress() {
  const location = useLocation();
  const selectedAddress = new URLSearchParams(location.search).get('address');
  let trimmedAddress = selectedAddress ? selectedAddress.split(',')[0] : '';

  if (trimmedAddress.length > 20) {
    trimmedAddress = trimmedAddress.substring(0, 19);
  }

  return (
    <div className='feedAddress'>
      <div className="feedAddress__text">
        <p> <FmdGoodIcon />{trimmedAddress}</p>
      </div>
    </div>
  )
}

export default FeedAddress