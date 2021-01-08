import React, { useState } from 'react';
import './ChangeBaseColor.css';
import { cloneDeep } from 'lodash';
import CustomColor from '../CustomColor/CustomColor';

function ChangeBaseColor({
  handleViewChange,
  design,
  setDesign,
  setCanSave,
  handleUpdateBaseColor,
}) {
  const [baseColor, setBaseColor] = useState(design.outlineData.baseColor);

  const updateBaseColor = () => {
    const tempDesign = cloneDeep(design);
    tempDesign.outlineData.baseColors.right = baseColor;
    tempDesign.outlineData.baseColors.left = baseColor;
    setCanSave(true);
    setDesign(tempDesign);
    handleUpdateBaseColor(tempDesign);
  };

  const handleColorChange = (color) => {
    const newColor = color.hex || color;
    setBaseColor(newColor);
  };

  return (
    <div className='changedesignname-container'>
      <div className='base-color-selector'>
        <CustomColor color={baseColor} onChangeComplete={handleColorChange} />
      </div>
      <div className='base-color-buttons'>
        <div className='base-color-button'>
          <button
            onClick={() =>
              handleColorChange(
                '#' + Math.floor(Math.random() * 16777215).toString(16)
              )
            }
          >
            Random
          </button>
        </div>
        <div className='base-color-button'>
          <button onClick={() => updateBaseColor()}>Apply</button>
        </div>
        <div className='base-color-button'>
          <button onClick={() => handleViewChange('DesignPreview')}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangeBaseColor;
