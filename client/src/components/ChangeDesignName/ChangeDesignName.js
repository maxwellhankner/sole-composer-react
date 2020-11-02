import React from 'react';
import './ChangeDesignName.css';
import { cloneDeep, startCase } from 'lodash';

function ChangeDesignName({ handleViewChange, design, setDesign, setCanSave }) {
  const handleUpdateDesignName = () => {
    const tempDesign = cloneDeep(design);
    const newTitle = startCase(
      document.getElementById('design-name-input').value
    );
    tempDesign.title = newTitle;
    setCanSave(true);
    setDesign(tempDesign);
    handleViewChange('DesignPreview');
  };

  return (
    <div className='changedesignname-container'>
      <div className='view-title'>
        <p>Change Design Name</p>
      </div>
      <div className='designer-input-div'>
        <input
          type='text'
          id='design-name-input'
          className='designer-input'
          defaultValue={design.title}
        ></input>
      </div>
      <div className='standard-button'>
        <button onClick={() => handleUpdateDesignName()}>Save</button>
      </div>
    </div>
  );
}

export default ChangeDesignName;
