import React from 'react'
import { BottomNavigationBar } from './navigationBars/BottomNavigationBar'

export const HomePage = () => {
  return (
    <div>
      <button>Create Match</button>
      {/* Last 5 matches */}
      {/* Match History Container , Match History Tile */}
      <BottomNavigationBar/>
    </div>
  )
}
