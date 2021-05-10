import React, { useContext } from 'react';
import UserProvider from '../../UserProvider';
import { Link } from 'react-router-dom';
import { ProfileContainer } from './styledComponents';
import BasicButton from '../../components/baseui/BasicButton';
import BasicPara from '../../components/baseui/BasicPara';

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
    <ProfileContainer>
      <BasicPara>{userData.firstName}</BasicPara>
      <BasicPara>{userData.email}</BasicPara>
      <BasicButton onClick={() => handleLogout()}>Log Out</BasicButton>
      <Link to="/">
        <BasicButton>Back</BasicButton>
      </Link>
    </ProfileContainer>
  );
}

export default Profile;
