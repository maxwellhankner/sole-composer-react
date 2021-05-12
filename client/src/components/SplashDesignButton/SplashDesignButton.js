import React from 'react';
import './SplashDesignButton.css';
import { useHistory } from 'react-router-dom';

function SplashDesignButton() {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/designer`);
  };
  return (
    <div className="splash-design-button" onClick={() => handleClick()}>
      <button>S T A R T &nbsp; D E S I G N I N G</button>
    </div>
  );
}

export default SplashDesignButton;
