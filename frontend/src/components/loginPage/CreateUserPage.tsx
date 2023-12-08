import React, {useState} from 'react'
import { HeaderBar } from '../headers/HeaderBar'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser, User } from '../../slices/usersSlice';


interface NewUser {
  name: string;
  email: string;
  username: string;
  password: string;
  region: string;
}
export const CreateUserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newUserData, setNewUserData] = useState<NewUser>({
    name: '',
    email: '',
    username: '',
    password: '',
    region: ''
  })

  const submitCreateUser = () => {
    try{
      if (!newUserData.name || !newUserData.username || !newUserData.password || !newUserData.region) {
        console.error('Validation failed: Please fill out all fields');
        throw new Error('Please fill out all fields');
      }
      dispatch(createUser({newUserData}))
      console.log(`created new User ${newUserData}`);
      navigate('/');
    } 
    catch(error) {
      alert('OOOPS!')
    }
  }

  const handleNewUserInformation = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewUserData({...newUserData,[e.target.name] : e.target.value})
  }

  return (
    <div className='page-container'>
      <HeaderBar />
      <h1>Create New User</h1>
      <form className='login-form' onSubmit={submitCreateUser}>
        <h2>Please Enter Your Information</h2>
        <label>
          Email:
          <input type='email' value={newUserData.email} onChange={handleNewUserInformation} />
        </label>
        <label>
          Name:
          <input type='text' value={newUserData.name} onChange={handleNewUserInformation}/>
        </label>
        <label>
          Region:
          <select value={newUserData.region} onChange={(e) => handleNewUserInformation}>
            <option value='North America'>
              North America
            </option>
            <option value='Europe'>
              Europe
            </option>
            <option value='Latin America'>
              Latin America
            </option>
            <option value='UK'>
              UK
            </option>
          </select>
        </label>
        <label>
          Username:
          <input type='text' value={newUserData.username} onChange={handleNewUserInformation}/>
        </label>
        <label>
          Password:
          <input type='password' value={newUserData.password} onChange={handleNewUserInformation}/>
        </label>
        <button>Create Your Account</button>
      </form>
    </div>
  )
}
