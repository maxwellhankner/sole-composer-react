import React from 'react';
import './NewDesignButton.css';
import { useHistory } from 'react-router-dom';

function NewDesignButton({ userData }) {
  const history = useHistory();

  const handleClick = () => {
    if (userData) {
      history.push(`/designer`);
    }
  };
  return (
    <div
      className='new-design-button standard-button'
      onClick={() => handleClick()}
    >
      <button>N E W &nbsp; D E S I G N</button>
    </div>
  );
}

export default NewDesignButton;
