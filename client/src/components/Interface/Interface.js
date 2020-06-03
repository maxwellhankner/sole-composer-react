import React  from 'react';
import './Interface.css';

function Interface({setColor, setDrawSwoosh}) {

  const handleUpdate = () => {
    setColor(document.getElementById('color-input').value)
  }

  const handleDrawSwoosh = () => {
    setDrawSwoosh(true);
  }

  return (
    <div className="interface-container">
      <input id='color-input'/>
      <button onClick={() => handleUpdate()}>Set Color</button>
      <div>
        <button onClick={() => handleDrawSwoosh()}>Swoosh</button>
      </div>
    </div>
  );
}

export default Interface;