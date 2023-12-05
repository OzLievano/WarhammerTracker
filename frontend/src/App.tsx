import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/loginPage/LoginPage";
import './app.css';
import { HomePage } from "./components/homePage/HomePage";

export const App:FunctionComponent = () => {
  return (
      <LoginPage/>
  )
}