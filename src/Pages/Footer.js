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

  let currentYear = new Date().getFullYear()


  return (
    <div className='footer'>
      <div className='footer__content'>
        <div className="footer__left">
            <img src={u_eats} />
            <div className="footer__leftBottom">
            <a  href='https://apps.apple.com/us/app/uber-eats-food-delivery/id1058959277'><img src={app_store} />
            </a>
            <a href='https://play.google.com/store/apps/details?id=com.ubercab.eats&pli=1'><img src={play_store} /> </a>
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
            <p>Privacy Policy</p>
            <p>Terms</p>
            <p>Pricing</p>
            <p>Do not sell or share my personal information</p>
        </div>
        </div>
        <div className="footer__bottomCopy">
         <p>
         This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
         </p>
         <p>&copy; {currentYear} Uber Technologies Inc.</p>
        </div>
    </div>
  )
}

export default Footer