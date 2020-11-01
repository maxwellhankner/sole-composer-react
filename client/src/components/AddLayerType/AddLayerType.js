import React from 'react';
import './AddLayerType.css';

function AddLayerType({ props }) {
  const { design, currentPartName, handleAddLayer, setLayersView } = props;
  return (
    <div className='design-preview-container'>
      <div className='view-title'>
        <p>Select Layer Type</p>
      </div>
      {design.configData.layerTypes[currentPartName].types.map((type, i) => (
        <div key={i} className='standard-button'>
          {type === 'Mask' ? (
            <button
              onClick={() => {
                setLayersView('MaskTypes');
              }}
            >
              {type}
            </button>
          ) : type === 'Graphic' ? (
            <button
              onClick={() => {
                setLayersView('GraphicPicker');
              }}
            >
              {type}
            </button>
          ) : (
            <button
              onClick={() => {
                console.log(type);
                handleAddLayer(type);
                setLayersView('LayerOverview');
              }}
            >
              {type}
            </button>
          )}
        </div>
      ))}
      <div className='standard-button'>
        <button onClick={() => setLayersView('LayerOverview')}>Cancel</button>
      </div>
    </div>
  );
}

export default AddLayerType;
