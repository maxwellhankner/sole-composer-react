import React from 'react';
import './LandingSplash.css';
import SplashDesignButton from '../SplashDesignButton/SplashDesignButton';

function LandingSplash() {
  return (
    <div className="landing-splash-container">
      <div className="splash-left">
        <p className="splash-header">Create Something New</p>
        <p className="splash-para">
          Sole Composer gives you the ability to design and visualize
          one&#8209;of&#8209;a&#8209;kind sneakers.
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
