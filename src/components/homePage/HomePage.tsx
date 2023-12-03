import React from 'react'
import {useNavigate} from 'react-router-dom';
import { BottomNavigationBar } from '../navigationBars/BottomNavigationBar'

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/create-match')}>Create Match</button>
      {/* Last 5 matches */}
      {/* Match History Container , Match History Tile */}
      <BottomNavigationBar/>
    </div>
  )
}
