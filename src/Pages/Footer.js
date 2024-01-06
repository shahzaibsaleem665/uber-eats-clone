import React from 'react'
import './Footer.css'
import u_eats from '../assets/u_eats.png'
import play_store from '../assets/play_store.png'
import app_store from '../assets/app_store.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer__left">
            <img src={u_eats} />
            <div className="footer__leftBottom">
                <img src={app_store} />
                <img src={play_store} />
            </div>
        </div>
    </div>
  )
}

export default Footer