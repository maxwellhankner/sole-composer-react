import React from 'react';
import './PartList.css';

function PartList({ props }) {
  const { setCurrentPart, setLayersView, handleViewChange, design } = props;

  return (
    <div className='partlist-container'>
      <div className='partlist-title'>
        <p>Parts</p>
      </div>
      <div className='partlist-buttons'>
        {design.configData.partsArray.map((part, i) => (
          <div className='standard-button' key={i}>
            <button
              onClick={() => {
                setCurrentPart(i);
                setLayersView('LayerOverview');
              }}
            >
              {part}
            </button>
          </div>
        ))}
      </div>
      <div className='standard-button'>
        <button onClick={() => handleViewChange('DesignPreview')}>Back</button>
      </div>
    </div>
  );
}

export default PartList;
