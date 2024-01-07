import React from 'react'
import './Footer.css'
import u_eats from '../assets/u_eats.svg'
import play_store from '../assets/play_store.png'
import app_store from '../assets/app_store.svg'
import { List, ListItem, ListItemText } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
  // Creating array of list items, to populate the lis text
  const list1 = ['Get Help', 'Buy gift cards', 'Add your restaurant', 'Sign up to deliver', 'Create a business account', 'Promotions'];
  const list2 = ['Restaurants near me', 'View all cities', 'View all countries', 'Pick-up near me', 'About Uber Eats', 'English'];
  const list3 = ['Privacy Policy', 'Terms', 'Pricing', 'Do not sell or share my personal information' ];

  let currentYear = new Date().getFullYear()


  return (
    <div className='footer'>
      <div className='footer__content'>
        <div className="footer__left">
            <img src={u_eats} />
            <div className="footer__leftBottom">
                <img src={app_store} />
                <img src={play_store} />
            </div>
         </div>
         <div className="footer__right">
          <div className="footer__rightList">
          <List className='list'>
           {list1.map((text, index) => (
            <ListItem className='listItem' key={index}>
               <ListItemText className='listItemText' primary={text} />
            </ListItem>
           ))}
         </List>

         <List className='list'>
           {list2.map((text, index) => (
            <ListItem className='listItem' key={index}>
               <ListItemText className='listItemText' primary={text} />
            </ListItem>
           ))}
         </List>
          </div>
         </div>
          </div>
          <hr></hr>
        <div className="footer__bottom">
        <div className="footer__bottomLeft">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
        <div className="footer__bottomRight">
        <List className='list'>
           {list3.map((text, index) => (
            <ListItem className='listItem' key={index}>
               <ListItemText className='listItemText' primary={text} />
            </ListItem>
           ))}
         </List>
        </div>
        <div className="footer__bottomCopy">
         <p>
         This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
         </p>
         <p>&copy; {currentYear} Uber Technologies Inc.</p>
        </div>
        </div>
    </div>
  )
}

export default Footer