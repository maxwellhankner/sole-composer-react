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

  const handleDeleteLayer = (part, layer) => {
    const tempDesign = JSON.parse(JSON.stringify(design));
    tempDesign.parts[Object.keys(partsObject)[part]].layers.splice(layer, 1);
    setDesign(tempDesign);
  }

  const handleMoveLayer = (part, layer, direction) => {
    const tempDesign = JSON.parse(JSON.stringify(design));
    let array = tempDesign.parts[Object.keys(partsObject)[part]].layers
    if (layer === array.length - 1 && direction === 1) {
      return
    }
    else if (layer === 0 && direction === -1) {
      return
    }
    else {
      let tempElement = array[layer]
      array[layer] = array[layer + direction]
      array[layer + direction] = tempElement
      tempDesign.parts[Object.keys(partsObject)[part]].layers = array;
      setDesign(tempDesign);
    }

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
            <div className='layer-list-item-end'>
              <div className='edit-layer-button'>
                <button onClick={() => handleMoveLayer(currentPart, i, 1)}>U</button>
              </div>
              <div className='edit-layer-button'>
                <button onClick={() => handleMoveLayer(currentPart, i, -1)}>D</button>
              </div>
            </div>
            <div className='layer-list-item-middle'>
              <div className='layer-list-item-type'>
                {layer.type}
              </div>
              <div style={{ backgroundColor: layer.color, width: '50px' }}></div>
            </div>
            <div className='layer-list-item-end'>
              <div className='edit-layer-button'>
                <button onClick={() => {
                  handleCurrentLayer(i);
                  handleViewChange('Color');
                }}>E</button>
              </div>
              <div className='edit-layer-button'>
                <button onClick={() => handleDeleteLayer(currentPart, i)}>D</button>
              </div>
            </div>
          </div>
        )}
        <div className='add-layer-button'>
          <button onClick={() => handleAddLayer(currentPart)}>Add Layer</button>
        </div>
      </div>

      <div className='change-view-button'>
        <button onClick={() => handleViewChange('DesignPreview')}>Back</button>
      </div>
    </div>
  );
}

export default LayersView;