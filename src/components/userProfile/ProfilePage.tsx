import React from 'react'
import { BottomNavigationBar } from '../navigationBars/BottomNavigationBar'
import { HeaderBar } from '../headers/HeaderBar'

export const ProfilePage = () => {
  return (
    <div className='page-container'>
      <HeaderBar/>
      Profile Page
      <BottomNavigationBar/>
    </div>
  )
}
