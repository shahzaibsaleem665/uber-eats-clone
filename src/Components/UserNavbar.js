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


    const getList = () => (
        <div style={{ width: 280 }} onClick={() => setOpen(false)} className='navbar'>
          <div className='navbar__top'>
            <div className="navbar__topLeft">
            <ListItem>
              <Avatar />
            </ListItem>
            <div className="navbar__topRight">
            <ListItem id='list'>
              <p>Name</p>
              <p>Manage Account</p>
            </ListItem>
            </div>
            </div>
            <div className="navbar__links">
              <ListItem>
              <FeaturedPlayListIcon />
                <p>Orders</p>
              </ListItem>
              <ListItem>
              <FavoriteIcon />
                <p>Favourites</p>
              </ListItem>
              <ListItem>
              <WalletIcon />
                <p>Wallet</p>
              </ListItem>
              <ListItem>
              <WorkIcon />
                <p>Meal Plan</p>
              </ListItem>
              <ListItem>
              <AssistantIcon />
                <p>Help</p>
              </ListItem>
              <ListItem>
              <LocalOfferIcon />
                <p>Promotions</p>
              </ListItem>
              <ListItem>
              <CardGiftcardIcon />
                <p>Invite friends</p>
              </ListItem>
              <ListItem>
                <p>Sign out</p>
              </ListItem>
            </div>
            <hr></hr>
            </div>
            <div className="navbar__bottom">
                <div className="navbar__bottomList">
                    <ListItem>
                        <p>Create business with uber</p>
                    </ListItem>
                    <ListItem>
                        <p>Add your restaurant</p>
                    </ListItem>
                    <ListItem>
                        <p>Sign up to deliver</p>
                    </ListItem>
                </div>
            <ListItem className='navbar__bottomIconList'>
                <img  src={main_logo} />
                <p>There's more to love in the app.</p>
              </ListItem>
              <ListItem className='navbar__bottomButtons'>
                <a  href='https://apps.apple.com/us/app/uber-eats-food-delivery/id1058959277'>
                <Button className='apple__store'><AppleIcon /> Iphone</Button>
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