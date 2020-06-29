import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown, FaPen, FaTimes } from 'react-icons/fa';
import './LayersView.css';
import PartSelector from '../PartSelector/PartSelector';
import { partsObject } from '../../helpers/partsObject';
import AddLayerType from '../AddLayerType/AddLayerType'
import GraphicEditor from '../GraphicEditor/GraphicEditor';
import ColorPicker from '../ColorPicker/ColorPicker';

function LayersView({ handleViewChange, currentPart, currentLayer, setCurrentPart, design, setCurrentLayer, graphicVisualCanvas, handleUpdateGraphicVisualCanvas, handleDesignChangeManager }) {

  const [focusLayer, setFocusLayer] = useState();
  const [layersView, setLayersView] = useState('Layers');

  const currentPartName = Object.keys(partsObject)[currentPart]

  let numberOfLayers;
  let allLayers;

  if (currentPartName === 'outerOverlay') {
    numberOfLayers = design.overlays[currentPartName].layers.length;
    allLayers = design.overlays[currentPartName].layers;
  }
  else {
    numberOfLayers = design.parts[currentPartName].layers.length;
    allLayers = design.parts[currentPartName].layers;
  }

  const handleFocusLayer = (i) => {
    setFocusLayer(i);
  }

  const handleClearFocusLayer = (aClass) => {
    if (aClass === 'layers-view-container') {
      setFocusLayer(-1);
    }
  }

  const handleCurrentLayer = (key) => {
    setCurrentLayer(key);
  }

  const handleAddLayer = (type) => {
    handleDesignChangeManager(['layer-added', currentPartName, type])
    setFocusLayer(numberOfLayers)
  }

  const handleDeleteLayer = (layer) => {
    handleDesignChangeManager(['layer-deleted', currentPartName, layer])
    setFocusLayer(-1)
  }

  const handleMoveLayer = (layer, direction) => {
    const tempDesign = JSON.parse(JSON.stringify(design));
    let array;

    if (currentPartName === 'outerOverlay') {
      array = tempDesign.overlays[currentPartName].layers
    }
    else {
      array = tempDesign.parts[currentPartName].layers
    }

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
      // tempDesign.parts[currentPartName].layers = array;
      if (currentPartName === 'outerOverlay') {
        tempDesign.overlays[currentPartName].layers = array;
      }
      else {
        tempDesign.parts[currentPartName].layers = array;
      }
      handleDesignChangeManager(['layer-moved', currentPartName, layer, direction])
      setFocusLayer(focusLayer + direction)
    }
  }

  const handleColorChange = (layer, color) => {
    handleDesignChangeManager(['color-changed', currentPartName, layer, color])
  }

  if (layersView === 'AddLayerType') {
    return (
      <AddLayerType handleAddLayer={handleAddLayer} currentPart={currentPart} setLayersView={setLayersView} />
    )
  }
  else if (layersView === 'ColorPicker') {
    return (
      <div>
        <ColorPicker design={design} currentPartName={currentPartName} handleColorChange={handleColorChange} currentLayer={currentLayer} />
        <div className='change-view-button'>
          <button onClick={() => setLayersView('Layers')}>Back</button>
        </div>
      </div>
    );
  }
  else if (layersView === 'GraphicEditor') {
    return (
      <GraphicEditor setLayersView={setLayersView} currentLayer={currentLayer} graphicVisualCanvas={graphicVisualCanvas} currentPartName={currentPartName} handleUpdateGraphicVisualCanvas={handleUpdateGraphicVisualCanvas} handleDesignChangeManager={handleDesignChangeManager} />
    )
  }
  else {
    return (
      <div className="layers-view-container" onClick={(e) => handleClearFocusLayer(e.target.className)}>
        <PartSelector currentPart={currentPart} setCurrentPart={setCurrentPart} setFocusLayer={setFocusLayer} />
        <div className='view-title'>
          <p>Layers</p>
        </div>

        <div className='layers-box-container'>
          {allLayers.map((layer, i) =>
            <div key={i} className='layer-list-items'>
              <div className={`layer-list-item-end ${focusLayer !== i ? 'hide-edit-buttons' : ''}`}>
                <div className={`edit-layer-button ${i === numberOfLayers - 1 ? 'edit-layer-button-dead' : ''}`}>
                  <button onClick={() => handleMoveLayer(i, 1)}><FaChevronUp /></button>
                </div>
                <div className={`edit-layer-button ${i === 0 ? 'edit-layer-button-dead' : ''}`}>
                  <button onClick={() => handleMoveLayer(i, -1)}><FaChevronDown /></button>
                </div>
              </div>
              <div className={`layer-list-item-middle ${focusLayer === i ? 'focus-layer-highlight' : ''}`} onClick={() => handleFocusLayer(i)}>
                <div className='layer-list-item-type'>
                  {layer.type}
                </div>

                {layer.type === 'color' ?
                  <div style={{ backgroundColor: layer.color, width: '50px' }}></div>
                  : (
                    layer.type === 'graphic' ?
                      <div style={{ width: '50px', backgroundColor: '#ffffff' }}>
                        <img src={layer.link} style={{ maxWidth: '100%', maxHeight: '100%' }} alt='design-graphic' />
                      </div>
                      :
                      <div></div>
                  )
                }
              </div>
              <div className={`layer-list-item-end ${focusLayer !== i ? 'hide-edit-buttons' : ''}`}>
                {layer.type === 'color' ?
                  <div className='edit-layer-button'>
                    <button onClick={() => {
                      handleCurrentLayer(i);
                      setLayersView('ColorPicker');
                    }}><FaPen /></button>
                  </div>
                  : (
                    layer.type === 'graphic' ?
                      <div className='edit-layer-button'>
                        <button onClick={() => {
                          handleCurrentLayer(i);
                          setLayersView('GraphicEditor');
                        }}><FaPen /></button>
                      </div>
                      :
                      <div className='edit-layer-button'>
                        <button onClick={() => {
                          setCurrentPart(18)
                          setFocusLayer(-1);
                          // setLayersView('GraphicEditor');
                        }}><FaPen /></button>
                      </div>
                  )
                }
                <div className='edit-layer-button'>
                  <button onClick={() => handleDeleteLayer(i)}><FaTimes /></button>
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