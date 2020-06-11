import React  from 'react';
import './ColorTester.css';

function ColorTester({ handleUpdate, handleDrawSwoosh }) {

  return (
    <div className="color-tester-container">
      <input id='color-input'/>
      <button onClick={() => handleUpdate()}>Set Color</button>
      <div>
        <button onClick={() => handleDrawSwoosh()}>Swoosh</button>
      </div>
    </div>
  );
}

export default ColorTester;