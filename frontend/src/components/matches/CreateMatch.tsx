import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { BottomNavigationBar } from '../navigationBars/BottomNavigationBar';
import { HeaderBar } from '../headers/HeaderBar';
import { AllianceKeys, ArmyKeys } from '../../utils/constants';
import { allArmyAOSData } from '../../utils/armyData';
import { getGrandAlliance, getArmies, getSubfactions, getGrandStrategies } from '../../utils/armyData.service';

export default function CreateMatch() {

  const [playerData, setPlayerData] = useState({
    player1: {
      userName: '',
      selectedGrandAlliance: 'Chaos',
      selectedArmy: '',
      selectedSubfaction: '',
      selectedGrandStrategy: ''
    },
    player2: {
      userName: '',
      selectedGrandAlliance: 'Chaos',
      selectedArmy: '',
      selectedSubfaction: '',
      selectedGrandStrategy: ''
    },
  });

  const navigate = useNavigate();

  const handleCreateMatch = () => {
    // this will submit data and redirect to 'match-1'
    // send playerData: {p1Info, p2Info} 
    // match : {matchId, status: started, playerData: {p1:{}, p2:{}}}
    navigate('/round-data');
  }

  const handleChangeInput = (player: 'player1' | 'player2', field: string, value: string) => {
    setPlayerData(prevState => ({
      ...prevState,
      [player]: {
        ...prevState[player],
        [field]: value
      }
    }));
  }

  return (
    <div className='page-container'>
      <HeaderBar/>
      <form>
        <h2> Player 1 </h2>
        <label>
          User Name:
          <input type='text' name='username' onChange={(e) => handleChangeInput('player1', 'userName', e.target.value)}/>
        </label>
        <label>Choose an Grand Alliance:</label>
          <select value={playerData.player1.selectedGrandAlliance} onChange={(e) => handleChangeInput('player1', 'selectedGrandAlliance', e.target.value)}>
          {getGrandAlliance().map((army:string, index:number) => (
              <option key={index} value={army}>
                {army}
              </option>
            ))}
          </select>
          {playerData.player1.selectedGrandAlliance && (
            <div>
              <label>Choose an Army:</label>
              <select value={playerData.player1.selectedArmy} onChange={(e) => handleChangeInput('player1', 'selectedArmy', e.target.value)}>
                <option value="">Select an army</option>
                {getArmies(playerData.player1.selectedGrandAlliance as AllianceKeys).map((army, index) => (
                  <option key={index} value={army}>
                    {army}
                  </option>
                ))}
              </select>
            </div>
        )}
        {playerData.player1.selectedArmy && (
          <div>
            <label>Choose a subfaction:</label>
            <select value={playerData.player1.selectedSubfaction} onChange={(e) => handleChangeInput('player1', 'selectedSubfaction', e.target.value)}>
              <option value="">Select a subfaction</option>
              {getSubfactions(playerData.player1.selectedGrandAlliance as AllianceKeys, playerData.player1.selectedArmy).map((subfaction:string, index:number) => (
                <option key={index} value={subfaction}>
                  {subfaction}
                </option>
              ))}
            </select>
          </div>
        )}
        {playerData.player1.selectedArmy && (
          <div>
            <label>Choose a Grand Strategy:</label>
            <select value={playerData.player1.selectedSubfaction} onChange={(e) => handleChangeInput('player1', 'selectedGrandStrategy', e.target.value)}>
              <option value="">Select a Grand Strategy</option>
              {getGrandStrategies(playerData.player1.selectedGrandAlliance as AllianceKeys, playerData.player1.selectedArmy).map((grandStrategy:string, index:number) => (
                <option key={index} value={grandStrategy}>
                  {grandStrategy}
                </option>
              ))}
            </select>
          </div>
        )}
      </form>
      <form>
        <h2> Player 2 </h2>
        <label>
          User Name:
          <input type='text' name='username'/>
        </label>
        <label>Choose an Grand Alliance:</label>
          <select value={playerData.player2.selectedGrandAlliance} onChange={(e) => handleChangeInput('player2', 'selectedGrandAlliance', e.target.value)}>
          {getGrandAlliance().map((army:string, index:number) => (
              <option key={index} value={army} >
                {army}
              </option>
            ))}
          </select>
          {playerData.player2.selectedGrandAlliance && (
            <div>
              <label>Choose an Army:</label>
              <select value={playerData.player2.selectedArmy} onChange={(e) => handleChangeInput('player2', 'selectedArmy', e.target.value)}>
                <option value={''}>Select an army</option>
                {getArmies(playerData.player2.selectedGrandAlliance as AllianceKeys).map((army, index) => (
                  <option key={index} value={army}>
                    {army}
                  </option>
                ))}
              </select>
            </div>
        )}
        {playerData.player2.selectedArmy && (
          <div>
            <label>Choose a subfaction:</label>
            <select value={playerData.player2.selectedSubfaction} onChange={(e) => handleChangeInput('player2', 'selectedSubfaction', e.target.value)}>
              <option value={''}>Select a subfaction</option>
              {getSubfactions(playerData.player2.selectedGrandAlliance as AllianceKeys,playerData.player2.selectedArmy).map((subfaction, index) => (
                <option key={index} value={subfaction}>
                  {subfaction}
                </option>
              ))}
            </select>
          </div>
        )}
        {playerData.player2.selectedArmy && (
          <div>
            <label>Choose a Grand Strategy:</label>
            <select value={playerData.player2.selectedSubfaction} onChange={(e) => handleChangeInput('player2', 'selectedGrandStrategy', e.target.value)}>
              <option value="">Select a Grand Strategy</option>
              {getGrandStrategies(playerData.player2.selectedGrandAlliance as AllianceKeys, playerData.player2.selectedArmy).map((grandStrategy:string, index:number) => (
                <option key={index} value={grandStrategy}>
                  {grandStrategy}
                </option>
              ))}
            </select>
          </div>
        )}
        <button onClick={handleCreateMatch}>Submit Player Info</button>
      </form>
      <BottomNavigationBar/>
    </div>
  )
}
