import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { BottomNavigationBar } from '../navigationBars/BottomNavigationBar';
import { HeaderBar } from '../headers/HeaderBar';

export default function CreateMatch() {

  const [playerData, setPlayerData] = useState({
    player1: {
      userName: '',
      army: '',
      subFaction: '',
      grandStrategy: ''
    },
    player2: {
      userName: '',
      army: '',
      subFaction: '',
      grandStrategy: ''
    },
  });

  const navigate = useNavigate();

  const handleCreateMatch = () => {
    // this will submit data and redirect to 'match-1'
    navigate('/round-data');
  }

  return (
    <div className='page-container'>
      {/* 
        redirect to matchRound Page 
          matchRound page 
            1-5 buttons with numeric value
            each button renders a roundForm with own values
            player can select battle tactics
      */}
      <HeaderBar/>
      <form>
        <h2> Player 1 </h2>
        <label>
          User Name:
          <input type='text' name='username'/>
        </label>
        <label>
          Army:
          <input type='text' name='army'/>
        </label>
        <label>
          Subfaction:
          <input type='text' name='subfaction'/>
        </label>
        <label>
          Grand Strategy:
          <input type='text' name='grandstrategy'/>
        </label>
      </form>
      <form>
        <h2> Player 2 </h2>
        <label>
          User Name:
          <input type='text' name='username'/>
        </label>
        <label>
          Army:
          <input type='text' name='army'/>
        </label>
        <label>
          Subfaction:
          <input type='text' name='subfaction'/>
        </label>
        <label>
          Grand Strategy:
          <input type='text' name='grandstrategy'/>
        </label>
        <button onClick={handleCreateMatch}>Submit</button>
      </form>
      <BottomNavigationBar/>
    </div>
  )
}
