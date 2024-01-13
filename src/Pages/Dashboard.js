import React, { useEffect } from 'react'
import UserHeader from './UserHeader'
import './Dashboard.css';
import Feed from './Feed';

function Dashboard() {

  return (
    <div className='dashboard'>
        <UserHeader />
        <div className="dashboard__content">
            <Feed />
        </div>
    </div>
  )
}

export default Dashboard