import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { BottomNavigationBar } from '../navigationBars/BottomNavigationBar';
import { HeaderBar } from '../headers/HeaderBar';

export const RoundInformation = () => {
  const [currentRound, setCurrentRound] = useState(1);
  
  const [matchData, setMatchData] =  useState(Array(5).fill({
    player1: {
      hold1: false,
      hold2: false,
      holdMore: false,
      battleTactic: false,
      grandStrategy: false,
      totalScore: 0,
    },
    player2: {
      hold1: false,
      hold2: false,
      holdMore: false,
      battleTactic: false,
      grandStrategy: false,
      totalScore: 0,
    },
  }))

  const navigate = useNavigate();

  const handleRoundChange = (newRound:number) => {
    setCurrentRound(newRound);
  };

  const handleCheckboxChange = (roundIndex: number, playerIndex: number, checkboxName: string, isChecked: boolean) => {
    setMatchData((prevData) => {
      const newData = [...prevData];
      const currentPlayerData = newData[roundIndex][`player${playerIndex + 1}`];
      let totalScoreIncrement = isChecked ? 1 : -1;
      if(checkboxName === 'battleTactic' && isChecked) {
        totalScoreIncrement += 1;
      } if (checkboxName === 'battleTactic' && !isChecked) {
        totalScoreIncrement -= 1;
      }
      if(checkboxName === 'grandStrategy' && isChecked) {
        totalScoreIncrement += 2;
      } if (checkboxName === 'grandStrategy' && !isChecked) {
        totalScoreIncrement -= 2;
      }
      newData[roundIndex] = {
        ...newData[roundIndex],
        [`player${playerIndex + 1}`]: {
          ...currentPlayerData,
          [checkboxName]: isChecked,
          totalScore: currentPlayerData.totalScore + totalScoreIncrement,
        },
      };
      return newData;
    });
  };
  
  const handleSubmitResults = (e:any) => {
    e.preventDefault()
    navigate('/match-summary')
  }

  return (
    <div className='page-container'>
      <HeaderBar/>
      <div>
        {[1, 2, 3, 4, 5].map((round) => (
          <button key={round} onClick={() => handleRoundChange(round)}>
            Round {round}
          </button>
        ))}
      </div>
      <div>
        <h2>Round {currentRound}</h2>
      <form>
          <h2>Player 1</h2>
          {Object.keys(matchData[currentRound - 1].player1)
          .filter(checkboxName => checkboxName !== 'totalScore' && checkboxName !== 'grandStrategy')
          .map((checkboxName) => (
            <label key={checkboxName}>
              {checkboxName}
              <input
                type="checkbox"
                name={checkboxName}
                checked={matchData[currentRound - 1].player1[checkboxName]}
                onChange={(e) => handleCheckboxChange(currentRound - 1, 0, checkboxName, e.target.checked)}
              />
            </label>
          ))}
          {currentRound === 5 ? (
            <label>
              Grand Strategy
              <input
                type="checkbox"
                name='grandStrategy'
              />
            </label>
          ) : <></>}
          <label>
            Total Round Score:
            <input
              type="number"
              value={matchData[currentRound - 1].player1.totalScore}
            />
          </label>
        </form>
        <form>
          <h2>Player 2</h2>
          {Object.keys(matchData[currentRound - 1].player2)
          .filter(checkboxName => checkboxName !== 'totalScore' && checkboxName !== 'grandStrategy')
          .map((checkboxName) => (  
            <label key={checkboxName}>
              {checkboxName}
              <input
                type="checkbox"
                name={checkboxName}
                checked={matchData[currentRound - 1].player2[checkboxName]}
                onChange={(e) => handleCheckboxChange(currentRound - 1, 1, checkboxName, e.target.checked)}
              />
            </label>
          ))}
          {currentRound === 5 ? (
            <label>
              Grand Strategy
              <input
                type="checkbox"
                name='grandStrategy'
              />
            </label>
          ) : <></>}
          <label>
            Total Round Score:
            <input
              type="number"
              value={matchData[currentRound - 1].player2.totalScore}
            />
          </label>
          {currentRound === 5 ? <button onClick={handleSubmitResults}>Review Match Results</button> : <></>}
        </form>
      </div>
      <BottomNavigationBar/>
    </div>
  )
}
