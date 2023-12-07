import React from 'react'
import { BottomNavigationBar } from '../navigationBars/BottomNavigationBar'
import { HeaderBar } from '../headers/HeaderBar'

export const MatchFinder = () => {
  return (
    <div className='page-container'>
      <HeaderBar/>
      COMING SOON TM
      {/* 
        match with unique ID 
          user selects options with 1/2 
          by event or local match 
      */}
      <BottomNavigationBar/>
    </div>
  )
}
