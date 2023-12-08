import React, {FunctionComponent, ReactHTMLElement, useState} from 'react'
import "./loginPage.css";
import { dummyUsers } from '../../../userData';
import {useNavigate} from 'react-router-dom';
import { HeaderBar } from '../headers/HeaderBar';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, selectUsers, selectUserById } from '../../slices/usersSlice';

export const LoginPage:FunctionComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  console.log('users', users);
  const [userData, setUserData] = useState({
    userName: '',
    userPassword: '',
  });
  const navigate = useNavigate();

  const login = () => {
    const matchingUser = Object.values(users).find(
      (user) => user.username === userData.userName
    );
    if(matchingUser) {
      const selectedUserId = matchingUser.id;
      dispatch(getUser({ selectedUserId }));
      navigate('/home')
    } else {
      alert('User Does not Exist!')
    }
  }

  const navigateToCreateNewUser = () => {
    navigate('/create-user')
  }

  const handleUserLoginInformation = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserData({...userData,[e.target.name] : e.target.value})
  }
  
  return (
    <div className='page-container'>
      <HeaderBar/>
      <form className='login-form' onSubmit={login}>
        <h1>Sigmar Tracker</h1>
        <label htmlFor="userName">
          User Name:
          <input name="userName" id="userName" required type="text" value={userData.userName} onChange={handleUserLoginInformation}/>
        </label>
        <label htmlFor='userPassword'>
          Password:
          <input name="userPassword" id="userPassword" required type="password" value={userData.userPassword} onChange={handleUserLoginInformation}/>
        </label>
        {/*TODO: wire up forgot password */}
        <span className='create-user' onClick={navigateToCreateNewUser}>Create a New Account</span>
        <span>Forgot Password?</span>
        <button>Login</button>
      </form>
    </div>
  )
}
