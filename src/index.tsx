import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {App} from './App';
import { LoginPage } from './components/loginPage/LoginPage';
import { HomePage } from './components/HomePage';

// `!` is a non-null assertion because we are sure the value will never be null
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/home' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);