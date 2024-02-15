import React, { FunctionComponent, ReactHTMLElement, useState } from 'react';
import './loginPage.css';
import { dummyUsers } from '../../../userData';
import { useNavigate } from 'react-router-dom';
import { HeaderBar } from '../headers/HeaderBar';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, selectUsers, selectUserById } from '../../slices/usersSlice';
import {
  MuiButton,
  MuiTextField,
  MuiTypography,
  MuiPaper,
  MuiBox
} from '@ozlievano/fabric';

export const LoginPage: FunctionComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const [userData, setUserData] = useState({
    userName: '',
    userPassword: ''
  });
  const navigate = useNavigate();

  const login = () => {
    const matchingUser = Object.values(users).find(
      (user) => user.username === userData.userName
    );
    if (matchingUser) {
      const selectedUserId = matchingUser.id;
      dispatch(getUser({ selectedUserId }));
      navigate('/home');
    } else {
      alert('User Does not Exist!');
    }
  };

  const navigateToCreateNewUser = () => {
    navigate('/create-user');
  };

  const handleUserLoginInformation = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="page-container">
      <HeaderBar />
      <MuiBox
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 0.5,
            flex: '0 0 auto',
            width: '25rem',
            height: '25rem'
          }
        }}
      >
        <MuiPaper
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <form className="login-form" onSubmit={login}>
            <MuiTypography variant="h5">Log In to SigmarTracker</MuiTypography>
            <MuiTextField
              label="Username"
              size="small"
              variant="outlined"
              name="userName"
              id="userName"
              required
              type="text"
              value={userData.userName}
              onChange={handleUserLoginInformation}
            />
            <MuiTextField
              label="Password"
              size="small"
              name="userPassword"
              id="userPassword"
              required
              type="password"
              value={userData.userPassword}
              onChange={handleUserLoginInformation}
            />
            {/*TODO: wire up forgot password */}
            <span className="create-user" onClick={navigateToCreateNewUser}>
              Create a New Account
            </span>
            <span>Forgot Password?</span>
            <MuiButton variant="contained" onClick={login}>
              Login
            </MuiButton>
          </form>
        </MuiPaper>
      </MuiBox>
    </div>
  );
};
