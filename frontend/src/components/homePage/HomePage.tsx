import React from 'react'
import {useNavigate} from 'react-router-dom';
import { BottomNavigationBar } from '../navigationBars/BottomNavigationBar'
import { HeaderBar } from '../headers/HeaderBar';
import './homePage.css';
import MatchHistoryTileContainer from '../matchHistory/MatchHistoryTileContainer';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className='page-container'>
      <HeaderBar/>
      <div className='create-match-container'>
        <button className='create-match-button' onClick={() => navigate('/create-match')}>Create Match</button>
      </div>
      {/* Last 5 matches */}
      <MatchHistoryTileContainer/>
      <BottomNavigationBar/>
    </div>
  )
}
