import React from 'react';
import './LandingSplash.css';
import SplashDesignButton from '../SplashDesignButton/SplashDesignButton';

function LandingSplash() {
  return (
    <div className="landing-splash-container">
      <div className="splash-left">
        <p className="splash-header">Create something new</p>
        <p className="splash-para">
          Sole Composer gives you the ability to fully design and visualize
          one-of-a-kind sneakers.
        </p>
        <SplashDesignButton />
      </div>
      <div className="splash-right">
        <img src="/sole-cover.png" className="splash-image"></img>
      </div>
    </div>
  );
}

export default LandingSplash;
