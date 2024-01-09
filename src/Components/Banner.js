import React, { useState } from 'react';
import './Banner.css';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Button, ListItemIcon, ListItemText, MenuItem, Select } from '@mui/material';
import Header from '../Pages/Header';
import AddressSearch from './AddressSearch';

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
          <AddressSearch />
        </div>
        <div className="banner__containerSearchSelectButton">
          <Select className="select" value={selectedOption} onChange={handleSelectChange}>
            <MenuItem value="deliver-now" className="MenuItem">
              <ListItemIcon  className='icon'>
                <WatchLaterIcon />
              </ListItemIcon>
              <ListItemText primary="Deliver Now" className='text' />
            </MenuItem>

            <MenuItem value="schedule-later" className="MenuItem">
              <ListItemIcon  className='icon'>
                <DateRangeIcon />
              </ListItemIcon>
              <ListItemText primary="Schedule for later" className='text' />
            </MenuItem>
          </Select>
          <Button>Find Food</Button>
        </div>     
      </div>
    </div>
  );
}

export default Banner;
