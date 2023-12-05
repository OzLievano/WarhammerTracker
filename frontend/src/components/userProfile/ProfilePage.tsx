import React from 'react'
import { BottomNavigationBar } from '../navigationBars/BottomNavigationBar'
import { HeaderBar } from '../headers/HeaderBar'

export const ProfilePage = () => {
  return (
    <div className='page-container'>
      <HeaderBar/>
      {/* 
      User Information 
        User Name
        email 
        Password
        Region 
          by Country IMO??
      Match History all time as a Table
        Win Loss Record 

        Become a subscriber?
       */}
      Profile Page
      <BottomNavigationBar/>
    </div>
  )
}
