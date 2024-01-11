import React from 'react'
import './Brands.css'

function Brands({image, title, rating, time}) {
  return (
    <div className='brands'>
    <div className="brands__card">
        <img src={image} />
        <div className="text">
        <h4>{title}</h4>
        <p>{rating}</p>
        </div>
        <p>{time}</p>
    </div>
    </div>
  )
}

export default Brands