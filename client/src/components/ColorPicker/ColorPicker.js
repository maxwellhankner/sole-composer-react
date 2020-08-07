import React, { useState, useEffect } from 'react';
import './ColorPicker.css';
// import { ChromePicker } from 'react-color';
import { handleConvertPartName } from '../../helpers/convertPartNames';
import CurrentColors from '../CurrentColors/CurrentColors';
import CustomColor from '../CustomColor/CustomColor';

function ColorPicker({ currentPartName, currentLayer, design, setLayersView, handleDesignChangeManager }) {

  const [currentColor, setCurrentColor] = useState('#ffffaa')

  const [colorsArray, setColorsArray] = useState([])

  useEffect(() => {
    
    const getDesignColors = () => {
      const colors = []
      for (const property in design.parts) {
        for (const layer in design.parts[property].layers) {
  
          if (design.parts[property].layers[layer].type === 'color') {
            const thisColor = design.parts[property].layers[layer].color
            if (!colors.includes(thisColor)) {
              colors.push(thisColor)
            }
  
          }
        }
      }
      return colors
    }

    setColorsArray(getDesignColors())
    if (currentPartName === 'outerOverlay' || currentPartName === 'innerOverlay') {
      setCurrentColor(design.overlays[currentPartName].layers[currentLayer].color)
    }
    else {
      setCurrentColor(design.parts[currentPartName].layers[currentLayer].color)
    }
  }, [design, currentPartName, currentLayer, setColorsArray])

  const handleColorChangeComplete = (color) => {
    setCurrentColor(color)
    handleDesignChangeManager(['color-changed', currentPartName, currentLayer, color.hex])
  }

  const handleColorChange = (color) => {
    setCurrentColor(color)
    handleDesignChangeManager(['color-changed', currentPartName, currentLayer, color])
  }


  return (
    <div className="color-picker-container">
      <div className='view-title'>
        <p>{handleConvertPartName(currentPartName)}</p>
      </div>
      <div className='random-color'>
        <button onClick={() => handleColorChange('#' + Math.floor(Math.random() * 16777215).toString(16))}>Random Color</button>
      </div>
      <div>
        <CurrentColors colorsArray={colorsArray} handleColorChange={handleColorChange} />
      </div>
      {/* <div>
        <ChromePicker className='color-picker' color={currentColor} onChangeComplete={handleColorChangeComplete} />
      </div> */}
      <div>
        <CustomColor color={currentColor} onChangeComplete={handleColorChangeComplete} />
      </div>
      <div className='change-view-button'>
        <button onClick={() => setLayersView('Layers')}>Back</button>
      </div>
    </div>
  );
}

export default ColorPicker;