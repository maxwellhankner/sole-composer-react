import React  from 'react';
import './ColorTester.css';

function ColorTester({ handleDesignChange }) {

  return (
    <div className="color-tester-container">
      <div>
        <button onClick={() => handleDesignChange('outerSwoosh', '#' + Math.floor(Math.random()*16777215).toString(16))}>Outer Swoosh</button>
      </div>
      <div>
        <button onClick={() => handleDesignChange('outerHeel', '#' + Math.floor(Math.random()*16777215).toString(16))}>Outer Heel</button>
      </div>
      <div>
        <button onClick={() => handleDesignChange('outerQuarter', '#' + Math.floor(Math.random()*16777215).toString(16))}>Outer Quarter</button>
      </div>
      <div>
        <button onClick={() => handleDesignChange('toeCap', '#' + Math.floor(Math.random()*16777215).toString(16))}>Toe Cap</button>
      </div>
      <div>
        <button onClick={() => handleDesignChange('toeBox', '#' + Math.floor(Math.random()*16777215).toString(16))}>Toe Box</button>
      </div>
      <div>
        <button onClick={() => handleDesignChange('heelWing', '#' + Math.floor(Math.random()*16777215).toString(16))}>Heel Wing</button>
      </div>
      <div>
        <button onClick={() => handleDesignChange('heelTab', '#' + Math.floor(Math.random()*16777215).toString(16))}>Heel Tab</button>
      </div>
    </div>
  );
}

export default ColorTester;