import React, {FunctionComponent, useState} from 'react'
import "./loginPage.css";

export const LoginPage:FunctionComponent = () => {
  const [userData, setUserData] = useState({
    userName: '',
    userPassword: '',
  });
  //TODO: onSubmit
  //TODO: handleChange
  return (
    <div className='login-box'>
      <form className='login-form'>
        <h1>Warhammer Tracker</h1>
        <label htmlFor="username">
          <span>User Name:</span>
          <input id="userName" type="text" value={userData.userName}/>
        </label>
        <label htmlFor='userPassword'>
          <span>Password:</span>
          <input id="userPassword" type="text" value={userData.userPassword}/>
        </label>
        {/*TODO: wire up forgot password */}
        <span>Forgot Password?</span>
        <button>Login</button>
      </form>
    </div>
  )
}
