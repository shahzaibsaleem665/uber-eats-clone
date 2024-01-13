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
import megaphone from '../assets/megaphone.png'
import Brands from '../Components/Brands.js';
import KFC from '../assets/Brands/KFC.jpeg'
import BroasterChicken from '../assets/Brands/BroasterChicken.jpeg'
import Mcdonalds from '../assets/Brands/Mcdonalds.jpeg'
import GYG from '../assets/Brands/GYG.jpeg'
import BP from '../assets/Brands/BP.jpeg'
import Crust from '../assets/Brands/Crust.jpeg'
import EJ from '../assets/Brands/EJ.jpeg'
import IJuice from '../assets/Brands/IJuice.jpeg'
import Olivers from '../assets/Brands/Olivers.jpeg'
import Snacks from '../assets/Brands/Snacks.jpeg'
import SubWay from '../assets/Brands/SubWay.jpeg'


function Feed() {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect (() => {
    
    document.title = 'Order food online | Food delivery app | Uber Eats';
  })
  const nationalBrands = [
    { image: GYG, title: 'Guzman y Gomez', rating: 4.5, time: '15-20 mins' },
    { image: Mcdonalds, title: 'Mcdonalds (Sydney)', rating: 4.5, time: '15-20 mins' },
    { image: KFC, title: 'KFC (Sydney)', rating: 4.7, time: '15-20 mins' },
    { image: BroasterChicken, title: 'Broaster Chicken (Sydney)', rating: 4.9, time: '15-20 mins' },
  ];
  const healthy = [
    { image: EJ, title: 'El Jannah (Granville)', rating: 4.9, time: '30-40 mins' },
    { image: SubWay, title: 'Subway (Sydney)', rating: 4.1, time: '25-35 mins' },
    { image: IJuice, title: 'IJuice (Green Acre)', rating: 4.8, time: '25-50 mins' },
    { image: Olivers, title: 'Olivers (Sydney)', rating: 4.4, time: '10-3 0 mins' },
  ];

  const renderBrands = (brandData, headerText) => {
    return (
      <div className="feed__contentBrands">
        <h2>{headerText}</h2>
        <div className="feed__contentBrandsDetails">
          {brandData.map((brand, index) => (
            <Brands key={index} {...brand} />
          ))}
        </div>
        <hr />
      </div>
    );
  };
  const choiceSlides = () => {
 return (
        <div className='feed__content'>
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
 )};

 const filters = () => {
  return (
    <div className="feed__contentFilter"> 
    <Filter  secondIcon={<KeyboardArrowDownIcon className='material-ui-icon' />} textClassName="filter-text" text='Delivery fee'  />
    <Filter icon={<LocalOfferIcon className='material-ui-icon' />} text='Offers' textClassName="filter-text" />
    <Filter icon={<StarBorderPurple500Icon className='material-ui-icon' />}  textClassName="filter-text" text='Rating' secondIcon={<KeyboardArrowDownIcon  className='material-ui-icon'/>}/>
    <Filter textClassName="filter-text"  text='Under 30 minutes'/>
    <Filter secondIcon={<KeyboardArrowDownIcon  className='material-ui-icon'/>} textClassName="filter-text"  text='Price'/>
    <Filter icon={<WorkspacePremiumIcon  className='material-ui-icon'/>} textClassName="filter-text"  text='Highest rated'/>
    <Filter secondIcon={<KeyboardArrowDownIcon className='material-ui-icon' />} textClassName="filter-text"  text='Dietry'/>
    <Filter secondIcon={<KeyboardArrowDownIcon className='material-ui-icon' />} textClassName="filter-text"  text='Sort' />
    </div>
  )
 }

  const handleSlideClick = (image) => {
    setSelectedItem(image === selectedItem ? null : image);
  };
  

  
  return (
    <div className='feed'>
        <FeedHeader />
        {choiceSlides()}
        {filters()}
        <div className="feed__contentBrands">
        <div className="feed__contentBrandsHeader">
          <img src={megaphone} alt="Megaphone" />
          <div className="text">
            <h1>Additional fees may apply</h1>
            <p>How do fees work?</p>
          </div>
        </div>
        {renderBrands(nationalBrands, 'National brands')}
      {renderBrands(healthy, 'Healthy Options to explore')}
        </div>
        <div className="feed__footer">
          <Footer />
        </div>
    </div>
  )
}

export default Feed