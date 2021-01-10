import React, { useState, useEffect } from 'react';
import './ColorPicker.css';
import { handleConvertPartName } from '../../helpers/convertPartNames';
import CurrentColors from '../CurrentColors/CurrentColors';
import CustomColor from '../CustomColor/CustomColor';

function ColorPicker({ props }) {
  const {
    currentLayer,
    currentPartName,
    design,
    handlePartChangeManager,
    setLayersView,
    setCanSave,
    currentShoe,
  } = props;

  const [currentColor, setCurrentColor] = useState('#ffffaa');
  const [colorsArray, setColorsArray] = useState([]);

  useEffect(() => {
    const getDesignColors = () => {
      const colors = [];
      for (const property in design.outlineData.parts) {
        for (const layer in design.outlineData.parts[property].right) {
          const type = design.outlineData.parts[property].right[layer].type;
          if (type === 'color' || type === 'mask') {
            const thisColor =
              design.outlineData.parts[property].right[layer].color;
            if (!colors.includes(thisColor)) {
              colors.push(thisColor);
            }
          }
        }
        for (const layer in design.outlineData.parts[property].left) {
          const type = design.outlineData.parts[property].left[layer].type;
          if (type === 'color' || type === 'mask') {
            const thisColor =
              design.outlineData.parts[property].left[layer].color;
            if (!colors.includes(thisColor)) {
              colors.push(thisColor);
            }
          }
        }
      }
      for (const property in design.outlineData.overlays) {
        for (const layer in design.outlineData.overlays[property].right) {
          if (
            design.outlineData.overlays[property].right[layer].type === 'color'
          ) {
            const thisColor =
              design.outlineData.overlays[property].right[layer].color;
            if (!colors.includes(thisColor)) {
              colors.push(thisColor);
            }
          }
        }
        for (const layer in design.outlineData.overlays[property].left) {
          if (
            design.outlineData.overlays[property].left[layer].type === 'color'
          ) {
            const thisColor =
              design.outlineData.overlays[property].left[layer].color;
            if (!colors.includes(thisColor)) {
              colors.push(thisColor);
            }
          }
        }
      }

      const rightBaseColor = design.outlineData.baseColors.right;
      if (!colors.includes(rightBaseColor)) {
        colors.push(rightBaseColor);
      }

      const leftBaseColor = design.outlineData.baseColors.left;
      if (!colors.includes(leftBaseColor)) {
        colors.push(leftBaseColor);
      }

      return colors;
    };

    setColorsArray(getDesignColors());

    if (
      currentPartName === 'outerOverlay' ||
      currentPartName === 'innerOverlay'
    ) {
      setCurrentColor(
        design.outlineData.overlays[currentPartName][currentShoe][currentLayer]
          .color
      );
    } else {
      setCurrentColor(
        design.outlineData.parts[currentPartName][currentShoe][currentLayer]
          .color
      );
    }
  }, [design, currentPartName, currentLayer, setColorsArray, currentShoe]);

  const handleColorChange = (color) => {
    setCanSave(true);
    const newColor = color.hex || color;
    setCurrentColor(color);
    handlePartChangeManager({
      type: 'color-changed',
      partName: currentPartName,
      layerIndex: currentLayer,
      newColor,
    });
  };

  return (
    <div className='color-picker-container'>
      <div className='view-title'>
        <p>{handleConvertPartName(currentPartName)}</p>
      </div>
      <div className='standard-button'>
        <button
          onClick={() =>
            handleColorChange(
              '#' + Math.floor(Math.random() * 16777215).toString(16)
            )
          }
        >
          Random Color
        </button>
      </div>
      <div>
        <CurrentColors
          colorsArray={colorsArray}
          handleColorChange={handleColorChange}
        />
      </div>
      <div>
        <CustomColor
          color={currentColor}
          onChangeComplete={handleColorChange}
        />
      </div>
      <div className='standard-button'>
        <button onClick={() => setLayersView('LayerOverview')}>Back</button>
      </div>
    </div>
  );
}

export default ColorPicker;
