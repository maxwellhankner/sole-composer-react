import React, { useState, useEffect } from 'react';
import './ColorPicker.css';
import { partsObject } from '../../helpers/partsObject'
import { ChromePicker } from 'react-color';
import { handleConvertPartName } from '../../helpers/convertPartNames'

function ColorPicker({ handleColorChange, currentPart, currentLayer, design }) {

  const [ currentColor, setCurrentColor ] = useState('#ffffaa')

  useEffect(() => {
    if(design){
      setCurrentColor(design.parts[Object.keys(partsObject)[currentPart]].layers[currentLayer].color)
    }
    
  }, [design, currentPart, currentLayer])

  const handleColorChangeComplete = (color) => {
    setCurrentColor(color)
    handleColorChange(currentLayer, color.hex)
  }


  return (
    <div className="color-picker-container">
      <div className='view-title'>
          <p>{handleConvertPartName(Object.keys(partsObject)[currentPart])}</p>
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