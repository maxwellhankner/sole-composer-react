import React from 'react';
import './ChangeBaseColor.css';
import { cloneDeep } from 'lodash';

function ChangeBaseColor({
  handleViewChange,
  design,
  setDesign,
  setCanSave,
  handleUpdateBaseColor,
}) {
  const updateBaseColor = () => {
    const tempDesign = cloneDeep(design);
    const newBaseColor = document.getElementById('design-name-input').value;
    tempDesign.outlineData.baseColor = newBaseColor;
    setCanSave(true);
    setDesign(tempDesign);
    handleUpdateBaseColor(tempDesign);
    handleViewChange('DesignPreview');
  };

  return (
    <div className='changedesignname-container'>
      <div className='view-title'>
        <p>Change Base Color</p>
      </div>
      <div className='designer-input-div'>
        <input
          type='text'
          id='design-name-input'
          className='designer-input'
          defaultValue={design.outlineData.baseColor}
        ></input>
      </div>
      <div className='standard-button'>
        <button onClick={() => updateBaseColor()}>Done</button>
      </div>
    </div>
  );
}

export default ChangeBaseColor;
