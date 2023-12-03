import React, {FunctionComponent, ReactHTMLElement, useState} from 'react'
import "./loginPage.css";
import { dummyUsers } from '../../../userData';
import {useNavigate} from 'react-router-dom';
import { HeaderBar } from '../headers/HeaderBar';

export const LoginPage:FunctionComponent = () => {
  const [userData, setUserData] = useState({
    userName: '',
    userPassword: '',
  });


  const isExistingUser = !!dummyUsers.find((user) => user.userName === userData.userName);

  const navigate = useNavigate();
  //TODO: onSubmit
  const login = () => {
    if(isExistingUser) {
      navigate('/home')
    } else {
      alert('User Does not Exist!')
    }
  }

  const handleUserLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserData({...userData,[e.target.name] : e.target.value})
  }
  
  return (
    <div className='page-container'>
      <HeaderBar/>
      <form className='login-form' onSubmit={login}>
        <h1>Sigmar Tracker</h1>
        <label htmlFor="userName">
          <span>User Name:</span>
          <input name="userName" id="userName" required type="text" value={userData.userName} onChange={handleUserLoginInput}/>
        </label>
        <label htmlFor='userPassword'>
          <span>Password:</span>
          <input name="userPassword" id="userPassword" required type="password" value={userData.userPassword} onChange={handleUserLoginInput}/>
        </label>
        {/*TODO: wire up forgot password */}
        <span>Forgot Password?</span>
        <button>Login</button>
      </form>
    </div>
  )
}
