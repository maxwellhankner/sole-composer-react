import React from 'react';
import { Link } from 'react-router-dom';
import { LoginContainer } from './styledComponents';
import BasicButton from '../../components/baseui/BasicButton';

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
      <BasicButton google onClick={() => loginWithGoogle()}>
        Login With Google
      </BasicButton>
      <Link to="/">
        <BasicButton>Back</BasicButton>
      </Link>
    </LoginContainer>
  );
}

export default Login;
