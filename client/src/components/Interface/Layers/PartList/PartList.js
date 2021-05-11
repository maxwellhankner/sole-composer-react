import React from 'react';
import './PartList.css';

function PartList({ props }) {
  const { design, setCurrentPart, setLayersView, setCurrentLayer } = props;

  return (
    <div className='partlist-container'>
      <div className='partlist-title'>
        <p>Parts</p>
      </div>
      <div className='partlist-buttons'>
        {design.configData.partsArray.map((part, i) => (
          <div className='standard-button part-list-button' key={i}>
            <button
              onClick={() => {
                setCurrentLayer(-1);
                setCurrentPart(i);
                setLayersView('LayerOverview');
              }}
            >
              {part}
            </button>
          </div>
        ))}
      </div>
      <div className='standard-button bottom-button'>
        <button onClick={() => setLayersView('LayerOverview')}>Back</button>
      </div>
    </div>
  );
}

export default PartList;
