import React, {useState, useEffect} from 'react'
import './UserNavbar.css'
import AppleIcon from '@mui/icons-material/Apple';
import AdbIcon from '@mui/icons-material/Adb';
import main_logo from '../assets/main_logo.png'
import { Avatar, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import WalletIcon from '@mui/icons-material/Wallet';
import WorkIcon from '@mui/icons-material/Work';
import AssistantIcon from '@mui/icons-material/Assistant';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import './Navbar.css'
import {
    Drawer,
    ListItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
function UserNavbar() {
    const [open, setOpen] = useState(false);

    const signOut = () => {

    }


    const getList = () => (
        <div style={{ width: 270 }} onClick={() => setOpen(false)} className='userNavbar'>
          <div className='navbar__top'>
            <div className="userNavbar__topUser">
              <Avatar className='avatar'/>
            <div className="navbar__topRight">
              <p>Name</p>
              <p className='manage__account'>
              Manage account</p>
            </div>
            </div>
            <div className="navbar__links">
              <ListItem className='icon'>
              <FeaturedPlayListIcon />
                <p>Orders</p>
              </ListItem>
              <ListItem className='icon'>
              <FavoriteIcon />
                <p>Favourites</p>
              </ListItem>
              <ListItem className='icon'>
              <WalletIcon />
                <p>Wallet</p>
              </ListItem>
              <ListItem className='icon'>
              <WorkIcon />
                <p>Meal Plan</p>
              </ListItem>
              <ListItem className='icon'>
              <AssistantIcon />
                <p>Help</p>
              </ListItem>
              <ListItem className='icon'>
              <LocalOfferIcon />
                <p>Promotions</p>
              </ListItem>
              <ListItem className='icon'>
              <CardGiftcardIcon />
                <p>Invite friends</p>
              </ListItem >
              <p className='signout'>Sign out</p>
            </div>
            <hr></hr>
            </div>
            <div className="navbar__bottom">
                <div className="navbar__bottomList">
                    <ListItem className='text'>
                        <p>Create business with uber</p>
                    </ListItem>
                    <ListItem className='text'>
                        <p>Add your restaurant</p>
                    </ListItem>
                    <ListItem className='text'>
                        <p onClick={signOut}>Sign up to deliver</p>
                    </ListItem>
                </div>
            <ListItem className='navbar__bottomIconList'>
                <img  src={main_logo} />
                <p>There's more to love in the app.</p>
              </ListItem>
              <ListItem className='navbar__bottomButtons'>
                <a  href='https://apps.apple.com/us/app/uber-eats-food-delivery/id1058959277'>
                <Button className='apple__store'><AppleIcon /> iphone</Button>
                </a>
                <a href='https://play.google.com/store/apps/details?id=com.ubercab.eats&pli=1'>
                <Button className='apple__store'><AdbIcon />Android</Button>
                </a>
              </ListItem>
  
            </div>
        </div>
      );
    
  return (
    <div className='userNavbar'>
        <MenuIcon onClick={() => setOpen(true)} />
        <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        {getList()}
      </Drawer>
    </div>
  )
}

export default UserNavbar