import React from 'react'
import './Filter.css'
import { Button } from '@mui/material'



function Filter({icon, text, secondIcon, iconStyle, secondIconStyle}) {
  return (
    <div className='filter'>
        <Button startIcon={icon} style={iconStyle} endIcon={secondIcon} className='iconClassName'>{text}</Button>
    </div>
  )
}

export default Filter