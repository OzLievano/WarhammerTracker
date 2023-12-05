import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faKhanda, faChartColumn, faUser } from '@fortawesome/free-solid-svg-icons';
import './navigationBar.css';

export const BottomNavigationBar = () => {
  return (
    <nav className='bottom-nav'>
      <ul className='bottom-nav-bar'>
        {/* Go Home */}
        <li><Link to="/home"><FontAwesomeIcon icon={faHome} /></Link></li>
        {/* goes to find a match */}
        <li><Link to="/match-finder"><FontAwesomeIcon icon={faKhanda} /></Link></li>
        {/* goes to leaderboard */}
        <li><Link to="/leaderboards"><FontAwesomeIcon icon={faChartColumn} /></Link></li>
        {/* goes to user profile page */}
        <li><Link to="/user-profile"><FontAwesomeIcon icon={faUser} /></Link></li>
      </ul>
    </nav>
  )
}
