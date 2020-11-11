import React, { useContext } from 'react';
import './Profile.css';
import UserProvider from '../../context/UserProvider';
import { Link } from 'react-router-dom';

function Profile() {
  const userData = useContext(UserProvider.context);

  const handleLogout = () => {
    window.open('http://localhost:8000/auth/logout', '_self');
  };

  return (
    <div id='login-container'>
      <p className='simple-paragraph'>{userData.firstName}</p>
      <p className='simple-paragraph'>{userData.email}</p>
      <div className='basic-button'>
        <button onClick={() => handleLogout()}>Log Out</button>
      </div>
      <Link to='/'>
        <div className='basic-button'>
          <button>Back</button>
        </div>
      </Link>
    </div>
  );
}

export default Profile;
