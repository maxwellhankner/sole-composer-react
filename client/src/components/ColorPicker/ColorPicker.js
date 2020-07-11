import React, { useState, useEffect } from 'react';
import './ColorPicker.css';
import { ChromePicker } from 'react-color';
import { handleConvertPartName } from '../../helpers/convertPartNames'

function ColorPicker({ handleColorChange, currentPartName, currentLayer, design }) {

  const [currentColor, setCurrentColor] = useState('#ffffaa')

  useEffect(() => {
    if (currentPartName === 'outerOverlay' || currentPartName === 'innerOverlay') {
      setCurrentColor(design.overlays[currentPartName].layers[currentLayer].color)
    }
    else {
      setCurrentColor(design.parts[currentPartName].layers[currentLayer].color)
    }
  }, [design, currentPartName, currentLayer])

  const handleColorChangeComplete = (color) => {
    setCurrentColor(color)
    handleColorChange(currentLayer, color.hex)
  }


  return (
    <div className="color-picker-container">
      <div className='view-title'>
        <p>{handleConvertPartName(currentPartName)}</p>
      </div>
      <div className='random-color'>
        <button onClick={() => handleColorChange(currentLayer, '#' + Math.floor(Math.random() * 16777215).toString(16))}>Random Color</button>
      </div>
      <div>
        <ChromePicker className='color-picker' color={currentColor} onChangeComplete={handleColorChangeComplete} />
      </div>
    </div>
  );
}

export default ColorPicker;