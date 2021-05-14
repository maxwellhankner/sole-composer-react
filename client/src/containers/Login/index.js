import React from 'react';
import { Link } from 'react-router-dom';
import { LoginContainer } from './styledComponents';
import { MenuButton } from '../../components/landingui/Buttons';

function Login() {
  const loginWithGoogle = () => {
    if (process.env.NODE_ENV === 'production') {
      window.open(`http://solecomposer.com/auth/google`, '_self');
    } else {
      window.open(`http://localhost:8000/auth/google`, '_self');
    }
  };

  return (
    <LoginContainer>
      <MenuButton google onClick={() => loginWithGoogle()}>
        Login With Google
      </MenuButton>
      <Link to="/">
        <MenuButton>Back</MenuButton>
      </Link>
    </LoginContainer>
  );
}

export default Login;
