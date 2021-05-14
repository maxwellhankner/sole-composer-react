import React from 'react';
import { useHistory } from 'react-router-dom';
import { SplashButton } from './styledComponents';

function SplashDesignButton() {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/designer`);
  };
  return (
    <SplashButton onClick={() => handleClick()}>
      S T A R T &nbsp; D E S I G N I N G
    </SplashButton>
  );
}

export default SplashDesignButton;
