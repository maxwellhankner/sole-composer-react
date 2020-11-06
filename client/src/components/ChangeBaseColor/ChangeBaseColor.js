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
    tempDesign.outlineData.baseColor = baseColor;
    setCanSave(true);
    setDesign(tempDesign);
    handleUpdateBaseColor(tempDesign);
    handleViewChange('DesignPreview');
  };

  const handleColorChange = (color) => {
    const newColor = color.hex || color;
    setBaseColor(newColor);
  };

  return (
    <div className='changedesignname-container'>
      <div className='view-title'>
        <p>Change Base Color</p>
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
        <CustomColor color={baseColor} onChangeComplete={handleColorChange} />
      </div>
      <div className='standard-button'>
        <button onClick={() => updateBaseColor()}>Apply</button>
      </div>
      <div className='standard-button'>
        <button onClick={() => handleViewChange('DesignPreview')}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ChangeBaseColor;
