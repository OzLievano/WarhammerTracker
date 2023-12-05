import React from 'react'
import { MatchHistoryTile } from './MatchHistoryTile'

const MatchHistoryTileContainer = () => {
  return (
    <div className='match-history-container'>
      <h2>Last 3 Matches</h2>
      <MatchHistoryTile />
      <MatchHistoryTile />
      <MatchHistoryTile />
    </div>
  )
}

export default MatchHistoryTileContainer