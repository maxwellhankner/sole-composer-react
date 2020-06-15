import React, { useState, useEffect } from 'react';
import './ColorPicker.css';
import { partsObject } from '../../helpers/partsObject'
import { ChromePicker } from 'react-color';

function ColorPicker({ handleDesignChange, currentPart, design }) {

  const [ currentColor, setCurrentColor ] = useState('#ffffaa')

  useEffect(() => {
    if(design){
      setCurrentColor(design.parts[Object.keys(partsObject)[currentPart]].color)
    }
    
  }, [design, currentPart])

  const handleChangeComplete = (color) => {
    setCurrentColor(color)
    handleDesignChange(Object.keys(partsObject)[currentPart], color.hex)
  }

  

  return (
    <div className="color-picker-container">
      <div className='random-color'>
        <button onClick={() => handleDesignChange(Object.keys(partsObject)[currentPart], '#' + Math.floor(Math.random() * 16777215).toString(16))}>Random Color</button>
      </div>
      <div>
        <ChromePicker className='color-picker' color={currentColor} onChangeComplete={handleChangeComplete} />
      </div>
    </div>
  );
}

export default ColorPicker;