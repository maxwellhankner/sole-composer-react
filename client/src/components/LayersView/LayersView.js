import React from 'react';
import './LayersView.css';
import PartSelector from '../PartSelector/PartSelector'
import { partsObject } from '../../helpers/partsObject'

function LayersView({ handleViewChange, currentPart, setCurrentPart, design, setDesign, setCurrentLayer }) {

  const handleCurrentLayer = (key) => {
    setCurrentLayer(key);
  }

  const handleAddLayer = (part) => {
    const tempDesign = JSON.parse(JSON.stringify(design));
    tempDesign.parts[Object.keys(partsObject)[part]].layers.push({
      type: 'color',
      color: '#fb68f5'
    })
    setDesign(tempDesign);
  }

  return (
    <div className="layers-view-container">
      <PartSelector currentPart={currentPart} setCurrentPart={setCurrentPart} />
      <div className='view-title'>
        <p>Layers</p>
      </div>

      <div className='layers-box-container'>
        {design.parts[Object.keys(partsObject)[currentPart]].layers.map((layer, i) =>
          <div key={i} className='layer-list-items'>
            <div className='layer-list-item-left'>
              <div className='edit-layer-button'>
                <button>U</button>
              </div>
              <div className='edit-layer-button'>
                <button>D</button>
              </div>
            </div>
            <div className='layer-list-item-middle'>
              <div>
                {layer.type}
              </div>
              <div style={{ backgroundColor: layer.color, width: '50px' }}></div>
            </div>
            <div className='layer-list-item-right'>
              <div className='edit-layer-button'>
                <button onClick={() => {
                  handleCurrentLayer(i);
                  handleViewChange('Color');
                }}>E</button>
              </div>
              <div className='edit-layer-button'>
                <button>D</button>
              </div>
            </div>
          </div>
        )}
        <div className='add-layer-button'>
          <button onClick={() => handleAddLayer(currentPart)}>Add Layer</button>
        </div>
      </div>

      <div className='change-view-button'>
        <button onClick={() => handleViewChange('Layers')}>Back</button>
      </div>
    </div>
  );
}

export default LayersView;