import React, { FunctionComponent } from "react";
import { LoginPage } from "./components/loginPage/LoginPage";
import './app.css';

export const App:FunctionComponent = () => {
  return (
    <div>
      <LoginPage/>
    </div>
  )
}