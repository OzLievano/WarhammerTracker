import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faKhanda, faChartColumn, faUser } from '@fortawesome/free-solid-svg-icons';
import './navigationBar.css';

export const BottomNavigationBar = () => {
  return (
    <div>
      <ul className='bottom-nav-bar'>
        <li><FontAwesomeIcon icon={faHome} /></li>
        <li><FontAwesomeIcon icon={faKhanda} /></li>
        <li><FontAwesomeIcon icon={faChartColumn} /></li>
        <li><FontAwesomeIcon icon={faUser} /></li>
      </ul>
    </div>
  )
}
