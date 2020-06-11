import React  from 'react';
import './Interface.css';
import ColorTester from '../ColorTester/ColorTester'

function Interface({setColor, setDrawSwoosh}) {

  const handleUpdate = () => {
    setColor(document.getElementById('color-input').value)
  }

  const handleDrawSwoosh = () => {
    setDrawSwoosh(true);
  }

  return (
    <div className="interface-container">
      <ColorTester handleUpdate={handleUpdate} handleDrawSwoosh={handleDrawSwoosh} />
    </div>
  );
}

export default Interface;