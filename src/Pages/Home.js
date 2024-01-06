import React from 'react'
import "./Home.css"
import Banner from '../Components/Banner'
import Card from '../Components/Card'
import feed from '../assets/feed.jpg'
import deliver from '../assets/deliver.jpg'
import cook from '../assets/cook.jpg'

function Home() {
  return (
    <div className='home'>
        <Banner />

        <div className="home__section">
            <Card src={feed} title='Feed your employees' description='create your business account' />
            <Card src={cook} title='Your restaurant, delivered' description='Add your restaurant' />
            <Card src={deliver} title='Deliver with uber eats' description='Sign up to deliver' />
        </div>
    </div>
  )
}

export default Home