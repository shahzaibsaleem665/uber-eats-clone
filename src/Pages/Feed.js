import React, { useEffect, useState } from 'react';
import './Feed.css';
import FeedHeader from './FeedHeader.js';
import Footer from './Footer.js'
import ChoiceSlide from '../Components/ChoiceSlide.js';
import Grocery from '../assets/choices/Grocery.png'
import Sushi from '../assets/choices/Sushi.png'
import Pizza from '../assets/choices/Pizza.png'
import Burgers from '../assets/choices/Burgers.png'
import Indian from '../assets/choices/Indian.png'
import Chinese from '../assets/choices/Chinese.png'
import Breakfast from '../assets/choices/Breakfast.png'
import FastFood from '../assets/choices/FastFood.png'
import Korean from '../assets/choices/Korean.png'
import Healthy from '../assets/choices/Healthy.png'
import Sandwich from '../assets/choices/Sandwich.png'
import American from "../assets/choices/American.png"
import Thai from '../assets/choices/Thai.png'
import Filter from '../Components/Filter.js';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

function Feed() {
  const [selectedItem, setSelectedItem] = useState(null);
  

  const handleSlideClick = (image) => {
    setSelectedItem(image === selectedItem ? null : image);
  };
 
  
  useEffect (() => {
    document.title = 'Order food online | Food delivery app | Uber Eats';
  })

  
  return (
    <div className='feed'>
        <FeedHeader />
        <div className="feed__content">
        <ChoiceSlide image={Grocery} title='Grocery' isSelected={selectedItem === Grocery} onSlideClick={handleSlideClick} />
        <ChoiceSlide image={Sushi} title='Sushi' isSelected={selectedItem === Sushi} onSlideClick={handleSlideClick} />
        <ChoiceSlide image={Pizza} title='Pizza' isSelected={selectedItem === Pizza} onSlideClick={handleSlideClick} />
        <ChoiceSlide image={Thai} title='Thai' isSelected={selectedItem === Thai} onSlideClick={handleSlideClick} />
        <ChoiceSlide image={Burgers} title='Burgers' isSelected={selectedItem === Burgers} onSlideClick={handleSlideClick} />
        <ChoiceSlide image={Indian} title='Indian' isSelected={selectedItem === Indian} onSlideClick={handleSlideClick} />
        <ChoiceSlide image={Chinese} title='Chinese' isSelected={selectedItem === Chinese} onSlideClick={handleSlideClick} />
        <ChoiceSlide image={Breakfast} title='Breakfast' isSelected={selectedItem === Breakfast} onSlideClick={handleSlideClick} />
        <ChoiceSlide image={FastFood} title='Fast Food' isSelected={selectedItem === FastFood} onSlideClick={handleSlideClick} />
        <ChoiceSlide image={Korean} title='Korean' isSelected={selectedItem === Korean} onSlideClick={handleSlideClick} />
        <ChoiceSlide image={Healthy} title='Healthy' isSelected={selectedItem === Healthy} onSlideClick={handleSlideClick} />
        <ChoiceSlide image={Sandwich} title='Sandwich' isSelected={selectedItem === Sandwich} onSlideClick={handleSlideClick} />
        <ChoiceSlide image={American} title='American' isSelected={selectedItem === American} onSlideClick={handleSlideClick} />
        </div>


        <div className="feed__contentFilter"> 
        <Filter  secondIcon={<KeyboardArrowDownIcon />} text='Delivery fee' />
        <Filter icon={<LocalOfferIcon />} text='Offers'/>
        <Filter icon={<StarBorderPurple500Icon />} text='Rating' secondIcon={<KeyboardArrowDownIcon />}/>
        <Filter text='Under 30 minutes'/>
        <Filter secondIcon={<KeyboardArrowDownIcon />} text='Price'/>
        <Filter icon={<WorkspacePremiumIcon />} text='Highest rated'/>
        <Filter secondIcon={<KeyboardArrowDownIcon />} text='Dietry'/>
        <Filter secondIcon={<KeyboardArrowDownIcon />} text='Sort' />
        </div>
        <div className="feed__footer">
          <Footer />
        </div>
    </div>
  )
}

export default Feed