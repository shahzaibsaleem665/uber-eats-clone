import React from 'react'
import './Filter.css'
import { Button } from '@mui/material'



function Filter({icon, text, secondIcon}) {
  return (
    <div className='filter'>
        <Button startIcon={icon} endIcon={secondIcon} className='iconClassName'>{text}</Button>
    </div>
  )
}

export default Filter