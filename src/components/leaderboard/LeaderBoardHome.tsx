import React from 'react'
import { BottomNavigationBar } from '../navigationBars/BottomNavigationBar'
import { HeaderBar } from '../headers/HeaderBar'

export const LeaderBoardHome = () => {
  return (
    <div className='page-container'>
      <HeaderBar/>
      Leader Boards
      <BottomNavigationBar/>
    </div>
  )
}
