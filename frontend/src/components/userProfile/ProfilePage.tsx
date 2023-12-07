import React from 'react'
import { BottomNavigationBar } from '../navigationBars/BottomNavigationBar'
import { HeaderBar } from '../headers/HeaderBar'
import { MatchHistoryTable } from '../matchHistory/MatchHistoryTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './profilePage.css';

export const ProfilePage = () => {
  return (
    <div className='page-container'>
      <HeaderBar/>
      <div className='profile-image-box'>
      <FontAwesomeIcon className="user-icon" icon={faUser} />
        <h3>BasedOz</h3>
      </div>
      <div className='profile-info-card'>
        <h4>Profile Information</h4>
        <div className="profile-info-items">
          <span>Username: BasedOz</span>
          <span>name: Osvaldo Lievano</span>
          <span>Email: osvaldoalievano@gmail.com</span>
          <span>Region: North America</span>
          <span>Rank: #100</span> {/* could just get the best w-l from table */}
        </div>
        <button>Change password</button>
      </div>
      <MatchHistoryTable/>
      <BottomNavigationBar/>
    </div>
  )
}
