import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const production = process.env.NODE_ENV === 'production';
const url = production
  ? process.env.URL
  : `http://localhost:${process.env.PORT}/`;
console.log('login', url);
console.log('prod', production);

function Login() {
  const loginWithGoogle = () => {
    window.open(
      `http://solecomposer-env.eba-ymcibxmu.us-east-2.elasticbeanstalk.com/auth/google`,
      '_self'
    );
  };

  return (
    <div className='login-container'>
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
