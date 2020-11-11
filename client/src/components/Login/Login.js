import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const loginWithGoogle = () => {
    window.open('http://localhost:8000/auth/google', '_self');
  };

  return (
    <div id='login-container'>
      <div className='login-google-button'>
        <button onClick={() => loginWithGoogle()}>Login With Google</button>
      </div>
      <Link to='/'>
        <div className='basic-button'>
          <button>Back</button>
        </div>
      </Link>
    </div>
  );
}

export default Login;