import React from 'react';
import { NewDesignButtonStyled } from './styledComponents';
import { useHistory } from 'react-router-dom';

function NewDesignButton() {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/designer`);
  };
  return (
    <NewDesignButtonStyled onClick={() => handleClick()}>
      N E W &nbsp; D E S I G N
    </NewDesignButtonStyled>
  );
}

export default NewDesignButton;
