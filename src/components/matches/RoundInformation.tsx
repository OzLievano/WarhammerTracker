import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { BottomNavigationBar } from '../navigationBars/BottomNavigationBar';

export const RoundInformation = () => {
  const [currentRound, setCurrentRound] = useState(1);
  
  const [matchData, setMatchData] =  useState(Array(5).fill({
    player1: {
      hold1: false,
      hold2: false,
      holdMore: false,
      battleTactic: false,
      totalScore: 0,
    },
    player2: {
      hold1: false,
      hold2: false,
      holdMore: false,
      battleTactic: false,
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
      newData[roundIndex] = {
        ...newData[roundIndex],
        [`player${playerIndex + 1}`]: {
          ...newData[roundIndex][`player${playerIndex + 1}`],
          [checkboxName]: isChecked,
        },
      };
      return newData;
    });
  };

  const handleTotalScoreChange = (roundIndex:number, playerIndex:number, value:number) => {
    // Implement logic to update total score state
  };
  
  const handleSubmitResults = (e:any) => {
    e.preventDefault()
    navigate('/match-summary')
  }

  return (
    <div>
      <div>
        {/* Navigation buttons */}
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
          {/* Render checkboxes based on matchData[currentRound - 1].player1.checkboxes */}
          {/* Update handleCheckboxChange accordingly */}
          {Object.keys(matchData[currentRound - 1].player1).map((checkboxName) => (
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
          
          {/* Repeat for other checkboxes */}

          {/* Total round score input */}
          <label>
            Total Round Score:
            <input
              type="number"
              value={matchData[currentRound - 1].player1.totalScore}
              onChange={(e) => handleTotalScoreChange(currentRound - 1, 0, parseInt(e.target.value))}
            />
          </label>
        </form>

        {/* Form for the current round and player 2 */}
        <form>
          <h2>Player 2</h2>
          {/* Render checkboxes based on matchData[currentRound - 1].player2.checkboxes */}
          {/* Update handleCheckboxChange accordingly */}
          {Object.keys(matchData[currentRound - 1].player2).map((checkboxName) => (
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
          {/* Repeat for other checkboxes */}

          {/* Total round score input */}
          <label>
            Total Round Score:
            <input
              type="number"
              value={matchData[currentRound - 1].player2.totalScore}
              onChange={(e) => handleTotalScoreChange(currentRound - 1, 1, parseInt(e.target.value))}
            />
          </label>
          {currentRound === 5 ? <button onClick={handleSubmitResults}>Submit Match Results</button> : <></>}
        </form>
      </div>
      {/* if round 5 , show submit score  */}
      <BottomNavigationBar/>
    </div>
  )
}
