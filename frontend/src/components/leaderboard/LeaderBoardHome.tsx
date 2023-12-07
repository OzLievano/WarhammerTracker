import React from 'react'
import { BottomNavigationBar } from '../navigationBars/BottomNavigationBar'
import { HeaderBar } from '../headers/HeaderBar'

export const LeaderBoardHome = () => {
  return (
    <div className='page-container'>
      <HeaderBar/>
      <h2>North America Leaderboard</h2>
      <table>
      <tr>
        <th>Player Rank</th>
        <th>Name</th>
        <th>Record</th>
        <th>Win Percentage</th>
        <th>Most Common Army</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Chris Johnson</td>
        <td>10-3</td>
        <td>76.9%</td>
        <td>Slaves to Darkness</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Fabien </td>
        <td>9-4</td>
        <td>69.2%</td>
        <td>Blades of Khorne</td>
      </tr>
      <tr>
        <td>3</td>
        <td> Mike SchLELELELEL </td>
        <td>8-5</td>
        <td>61.5%</td>
        <td>Castigators</td>
      </tr>
    </table>
      <BottomNavigationBar/>
    </div>
  )
}
