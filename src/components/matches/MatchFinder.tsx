import React from 'react'
import { BottomNavigationBar } from '../navigationBars/BottomNavigationBar'
import { HeaderBar } from '../headers/HeaderBar'

export const MatchFinder = () => {
  return (
    <div className='page-container'>
      <HeaderBar/>
      Match Finder
      <BottomNavigationBar/>
    </div>
  )
}
