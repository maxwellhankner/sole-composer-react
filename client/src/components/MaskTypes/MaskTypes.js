import React from 'react';
import './MaskTypes.css';

function MaskTypes({ props }) {
  const { design, currentPartName, handleAddMaskLayer, setLayersView } = props;
  return (
    <div className='design-preview-container'>
      <div className='view-title'>
        <p>Select Mask Type</p>
      </div>

      {design.config.maskTypes[currentPartName].map((type, i) => (
        <div key={i} className='standard-button'>
          <button
            onClick={() => {
              handleAddMaskLayer(type[0], type[1]);
              setLayersView('LayerOverview');
            }}
          >
            {type[0]}
          </button>
        </div>
      ))}
      <div className='standard-button'>
        <button onClick={() => setLayersView('LayerOverview')}>Cancel</button>
      </div>
    </div>
  );
}

export default MaskTypes;
