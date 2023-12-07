import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {App} from './App';
import { HomePage } from './components/homePage/HomePage';
import { LeaderBoardHome } from './components/leaderboard/LeaderBoardHome';
import { MatchFinder } from './components/matches/MatchFinder';
import { ProfilePage } from './components/userProfile/ProfilePage';
import CreateMatch from './components/matches/CreateMatch';
import { RoundInformation } from './components/matches/RoundInformation';
import { MatchSummary } from './components/matches/MatchSummary';

// `!` is a non-null assertion because we are sure the value will never be null
const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/leaderboards' element={<LeaderBoardHome/>} />
        <Route path="/create-match" element={<CreateMatch/>}/>
        <Route path="/match-summary" element={<MatchSummary />} />
        <Route path="/round-data" element={<RoundInformation />} />
        <Route path='/match-finder' element={<MatchFinder/>} />
        <Route path='/user-profile' element={<ProfilePage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);