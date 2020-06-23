import React, { useState, useEffect } from 'react';
import './ColorPicker.css';
import { partsObject } from '../../helpers/partsObject'
import { ChromePicker } from 'react-color';
import { handleConvertPartName } from '../../helpers/convertPartNames'

function ColorPicker({ handleDesignChange, currentPart, currentLayer, design, currentPartName, handleUpdateLayer }) {
  
  handleUpdateLayer(currentPartName, currentLayer, design.parts[Object.keys(partsObject)[currentPart]].layers[currentLayer])

  const [ currentColor, setCurrentColor ] = useState('#ffffaa')

  useEffect(() => {
    if(design){
      setCurrentColor(design.parts[Object.keys(partsObject)[currentPart]].layers[currentLayer].color)
    }
    
  }, [design, currentPart, currentLayer])

  const handleChangeComplete = (color) => {
    setCurrentColor(color)
    handleDesignChange(Object.keys(partsObject)[currentPart], currentLayer, color.hex)
  }

  return (
    <div className="color-picker-container">
      <div className='view-title'>
          <p>{handleConvertPartName(Object.keys(partsObject)[currentPart])}</p>
      </div>
      <div className='random-color'>
        <button onClick={() => handleDesignChange(Object.keys(partsObject)[currentPart], currentLayer, '#' + Math.floor(Math.random() * 16777215).toString(16))}>Random Color</button>
      </div>
      <div>
        <ChromePicker className='color-picker' color={currentColor} onChangeComplete={handleChangeComplete} />
      </div>
    </div>
  );
}

export default ColorPicker;