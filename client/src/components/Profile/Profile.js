import React, { useContext } from 'react';
import './Profile.css';
import UserProvider from '../../UserProvider';
import { Link } from 'react-router-dom';

function Profile() {
  const userData = useContext(UserProvider.context);

  const handleLogout = () => {
    if (process.env.NODE_ENV === 'production') {
      window.open(`http://solecomposer.com/auth/logout`, '_self');
    } else {
      window.open(`http://localhost:8000/auth/logout`, '_self');
    }
  };

  return (
    <div className="profile-container">
      <p className="basic-paragraph">{userData.firstName}</p>
      <p className="basic-paragraph">{userData.email}</p>
      <div className="basic-button">
        <button onClick={() => handleLogout()}>Log Out</button>
      </div>
      <Link to="/">
        <div className="basic-button">
          <button>Back</button>
        </div>
      </Link>
    </div>
  );
}

export default Profile;
