import React, { useContext } from 'react';
import UserProvider from '../../UserProvider';
import { Link } from 'react-router-dom';
import { ProfileContainer } from './styledComponents';
import { MenuButton } from '../../components/landingui/Buttons';
import { MenuPara } from '../../components/landingui/Text';

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
      <MenuPara>{userData.firstName}</MenuPara>
      <MenuPara>{userData.email}</MenuPara>
      <MenuButton onClick={() => handleLogout()}>Log Out</MenuButton>
      <Link to="/">
        <MenuButton>Back</MenuButton>
      </Link>
    </ProfileContainer>
  );
}

export default Profile;
