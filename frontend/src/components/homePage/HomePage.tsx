import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNavigationBar } from '../navigationBars/BottomNavigationBar';
import { HeaderBar } from '../headers/HeaderBar';
import { MuiButton } from '@ozlievano/fabric';
import './homePage.css';
import MatchHistoryTileContainer from '../matchHistory/MatchHistoryTileContainer';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <HeaderBar />
      <div className="create-match-container">
        <MuiButton
          onClick={() => navigate('/create-match')}
          variant="contained"
        >
          Create Match
        </MuiButton>
      </div>
      {/* Last 5 matches */}
      <MatchHistoryTileContainer />
      <BottomNavigationBar />
    </div>
  );
};
