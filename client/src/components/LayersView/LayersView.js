import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown, FaPen, FaTimes } from 'react-icons/fa';
import './LayersView.css';
import PartSelector from '../PartSelector/PartSelector';
import { partsObject } from '../../helpers/partsObject';
import AddLayerType from '../AddLayerType/AddLayerType'
import GraphicEditor from '../GraphicEditor/GraphicEditor';
import ColorPicker from '../ColorPicker/ColorPicker';

function LayersView({ handleViewChange, handleDesignChange, currentPart, currentLayer, setCurrentPart, design, setDesign, setCurrentLayer }) {

  const [focusLayer, setFocusLayer] = useState();
  const [layersView, setLayersView] = useState('Layers');

  const numberOfLayers = design.parts[Object.keys(partsObject)[currentPart]].layers.length;
  const allLayers = design.parts[Object.keys(partsObject)[currentPart]].layers;
  const currentPartName = Object.keys(partsObject)[currentPart]

  const handleFocusLayer = (i) => {
    setFocusLayer(i);
  }

  const handleCurrentLayer = (key) => {
    setCurrentLayer(key);
  }

  const handleAddLayer = (part) => {
    const tempDesign = JSON.parse(JSON.stringify(design));
    tempDesign.parts[Object.keys(partsObject)[part]].layers.push({
      type: 'color',
      color: '#fb68f5'
    });
    setDesign(tempDesign);
    setFocusLayer(numberOfLayers)
  }

  const handleDeleteLayer = (part, layer) => {
    const tempDesign = JSON.parse(JSON.stringify(design));
    tempDesign.parts[Object.keys(partsObject)[part]].layers.splice(layer, 1);
    setDesign(tempDesign);
    setFocusLayer(-1)
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
      setFocusLayer(focusLayer + direction)
    }
  }

  if (layersView === 'AddLayerType') {
    return (
      <div className="interface-container">
        <AddLayerType handleAddLayer={handleAddLayer} currentPart={currentPart} setLayersView={setLayersView} />
      </div>
    )
  }
  else if (layersView === 'ColorPicker') {
    return (
      <div className="interface-container">
        <ColorPicker design={design} handleDesignChange={handleDesignChange} currentPart={currentPart} currentLayer={currentLayer} />
        <div className='change-view-button'>
          <button onClick={() => setLayersView('Layers')}>Back</button>
        </div>
      </div>
    );
  }
  else if (layersView === 'GraphicEditor') {
    return (
      <div className="interface-container">
        <GraphicEditor setLayersView={setLayersView} design={design} setDesign={setDesign} currentLayer={currentLayer} currentPart={currentPart} currentPartName={currentPartName} />
      </div>
    )
  }
  else {
    return (
      <div className="layers-view-container">
        <PartSelector currentPart={currentPart} setCurrentPart={setCurrentPart} setFocusLayer={setFocusLayer} />
        <div className='view-title'>
          <p>Layers</p>
        </div>

        <div className='layers-box-container'>
          {allLayers.map((layer, i) =>
            <div key={i} className='layer-list-items'>
              <div className={`layer-list-item-end ${focusLayer !== i ? 'hide-edit-buttons' : ''}`}>
                <div className={`edit-layer-button ${i === numberOfLayers - 1 ? 'edit-layer-button-dead' : ''}`}>
                  <button onClick={() => handleMoveLayer(currentPart, i, 1)}><FaChevronUp /></button>
                </div>
                <div className={`edit-layer-button ${i === 0 ? 'edit-layer-button-dead' : ''}`}>
                  <button onClick={() => handleMoveLayer(currentPart, i, -1)}><FaChevronDown /></button>
                </div>
              </div>
              <div className={`layer-list-item-middle ${focusLayer === i ? 'focus-layer-highlight' : ''}`} onClick={() => handleFocusLayer(i)}>
                <div className='layer-list-item-type'>
                  {layer.type}
                </div>
                <div style={{ backgroundColor: layer.color, width: '50px' }}></div>

              </div>
              <div className={`layer-list-item-end ${focusLayer !== i ? 'hide-edit-buttons' : ''}`}>
                {layer.type === 'color' ?
                  <div className='edit-layer-button'>
                    <button onClick={() => {
                      handleCurrentLayer(i);
                      setLayersView('ColorPicker');
                    }}><FaPen /></button>
                  </div>
                  :
                  <div className='edit-layer-button'>
                    <button onClick={() => {
                      handleCurrentLayer(i);
                      setLayersView('GraphicEditor');
                    }}><FaPen /></button>
                  </div>
              }
                <div className='edit-layer-button'>
                  <button onClick={() => handleDeleteLayer(currentPart, i)}><FaTimes /></button>
                </div>
              </div>
            </div>
          )}
          <div className='add-layer-button'>
            {/* <button onClick={() => handleAddLayer(currentPart)}>Add Layer</button> */}
            <button onClick={() => setLayersView('AddLayerType')}>Add Layer</button>
          </div>
        </div>

        <div className='change-view-button'>
          <button onClick={() => handleViewChange('DesignPreview')}>Back</button>
        </div>
      </div>
    );
  }
}

export default LayersView;