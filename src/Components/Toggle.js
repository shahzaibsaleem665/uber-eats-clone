import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import  React, { useState } from 'react'
import './Toggle.css'

function Toggle() {
    const [value, setValue] = useState('delivery');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='toggle'>
          <ToggleButtonGroup className='toggleButtonGroup'
        value={value}
        exclusive
      onChange={handleChange}
    >
      <ToggleButton className='toggleButton' value="delivery">Delivery</ToggleButton>
      <ToggleButton className='toggleButton' value="pickup">Pickup</ToggleButton>
    </ToggleButtonGroup>

    </div>
  )
}

export default Toggle