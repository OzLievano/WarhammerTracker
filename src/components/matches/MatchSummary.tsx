import React from 'react'
import { BottomNavigationBar } from '../navigationBars/BottomNavigationBar'
import { HeaderBar } from '../headers/HeaderBar'

export const MatchSummary = () => {
  return (
    <div className='page-container'>
      <HeaderBar/>
      <div>

        <h2>Player 1</h2>
        
        <p> X / 5 Battle Tactics </p>
        <p> X / 1 Grand Strategy </p>
        <p> Total Score : X </p>

      </div>
      <div>
        
        <h2>Player 2</h2>
        
        <p> X / 5 Battle Tactics </p>
        <p> X / 1 Grand Strategy </p>
        <p> Total Score : X </p>

      </div>

      <button>Submit Match Results</button>
      <BottomNavigationBar/>
    </div>
  )
}
