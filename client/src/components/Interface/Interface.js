import React  from 'react';
import './Interface.css';

function Interface({setColor}) {

  const handleUpdate = () => {
    setColor(document.getElementById('color-input').value)
  }

  return (
    <div className="interface-container">
      <input id='color-input'/>
      <button onClick={() => handleUpdate()}>Set Color</button>
    </div>
  );
}

export default Interface;