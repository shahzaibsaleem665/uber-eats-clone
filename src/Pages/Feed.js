import React, { useEffect } from 'react'
import './Feed.css'
import { useLocation } from 'react-router-dom'
import FeedHeader from './FeedHeader.js';
import Toggle from '../Components/Toggle.js';
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
import Japanese from '../assets/choices/Japanese.png'
import Mexican from '../assets/choices/Mexican.png'
import American from "../assets/choices/American.png"
import Thai from '../assets/choices/Thai.png'
function Feed() {
 
  
  useEffect (() => {
    document.title = 'Order food online | Food delivery app | Uber Eats';
  })
  return (
    <div className='feed'>
        <FeedHeader />
        <div className="feed__content">
        <ChoiceSlide image={Grocery} title='Grocery'/>
        <ChoiceSlide image={Sushi} title='Sushi'/>
        <ChoiceSlide image={Pizza} title='Pizza'/>
        <ChoiceSlide image={Thai} title='Thai'/>
        <ChoiceSlide image={Burgers} title='Burgers'/>
        <ChoiceSlide image={Indian} title='Indian'/>
        <ChoiceSlide image={Chinese} title='Chinese'/>
        <ChoiceSlide image={Breakfast} title='Breakfast'/>
        <ChoiceSlide image={FastFood} title='Fast Food'/>
        <ChoiceSlide image={Korean} title='Korean'/>
        <ChoiceSlide image={Healthy} title='Healthy'/>
        <ChoiceSlide image={Sandwich} title='Sandwich'/>
        <ChoiceSlide image={Japanese} title='Japanese'/>
        <ChoiceSlide image={Mexican} title='Mexican'/>
        <ChoiceSlide image={American} title='American'/>
       
        </div>
        <div className="feed__footer">
          <Footer />
        </div>
    </div>
  )
}

export default Feed