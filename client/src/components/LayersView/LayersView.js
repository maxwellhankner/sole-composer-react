import React from 'react';
import './LayersView.css';
import PartSelector from '../PartSelector/PartSelector'
import { partsObject } from '../../helpers/partsObject'

function LayersView({ handleViewChange, currentPart, setCurrentPart, design }) {

  return (
    <div className="layers-view-container">
      <PartSelector currentPart={currentPart} setCurrentPart={setCurrentPart} />
      <div className='view-title'>
          <p>Layers</p>
      </div>
      <div className='layers-box-container'>
        <div>
          {design.parts[Object.keys(partsObject)[currentPart]].layers.map(layer => `${layer.type} ${layer.color}`)}
        </div>
      </div>
      <div className='change-view-button'>
          <button onClick={() => handleViewChange('Color')}>Color</button>
      </div>
      <div className='change-view-button'>
          <button onClick={() => handleViewChange('DesignPreview')}>Back</button>
      </div>
    </div>
  );
}

export default LayersView;