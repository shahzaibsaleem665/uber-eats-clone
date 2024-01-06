import React, { useState } from 'react';
import './Banner.css';
import Header from '../Pages/Header';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Button, ListItemIcon, ListItemText, MenuItem, Select } from '@mui/material';

function Banner() {
  const [selectedOption, setSelectedOption] = useState("deliver-now");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='banner'>
      <Header />
      <div className="banner__container">
        <h1>Order delivery near you</h1>
      </div>
      <div className="banner__containerSearchBox">
        <div className="banner__containerSearch">
          <FmdGoodIcon />
          <input type='text' placeholder='Enter delivery address' /> 
        </div>
        <div className="banner__containerSearchSelectButton">
          <Select className="select" value={selectedOption} onChange={handleSelectChange}>
            <MenuItem value="deliver-now" className="MenuItem">
              <ListItemIcon className='icon'>
                <WatchLaterIcon />
              </ListItemIcon>
              <ListItemText className='text' primary="Deliver Now" />
            </MenuItem>

            <MenuItem value="schedule-later"  className="MenuItem">
              <ListItemIcon className='icon'>
                <DateRangeIcon />
              </ListItemIcon>
              <ListItemText className='text' primary="Schedule for later" />
            </MenuItem>
          </Select>
          <Button>Find Food</Button>
        </div>     
      </div>
    </div>
  )
}

export default Banner;
