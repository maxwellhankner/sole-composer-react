import React from 'react';
import { cloneDeep } from 'lodash';
import './LayerOverview.css';
import { handleConvertPartName } from '../../helpers/convertPartNames';
import { FaChevronUp, FaChevronDown, FaPen, FaTimes } from 'react-icons/fa';
import PartSelector from '../PartSelector/PartSelector';

function LayerOverview({ props }) {
  const {
    allLayers,
    currentPart,
    currentPartName,
    design,
    currentLayer,
    handlePartChangeManager,
    handleViewChange,
    numberOfLayers,
    setCurrentLayer,
    setCurrentPart,
    setLayersView,
    setCanSave,
    currentShoe,
  } = props;

  const handleClearFocusLayer = (aClass) => {
    if (aClass === 'layers-view-container') {
      setCurrentLayer(-1);
    }
  };

  const handleEditLayer = (i, layer) => {
    if (layer.type === 'color') {
      setCurrentLayer(i);
      setLayersView('ColorPicker');
    } else if (layer.type === 'graphic') {
      setCurrentLayer(i);
      setLayersView('GraphicEditor');
    } else if (layer.type === 'mask') {
      setCurrentLayer(i);
      setLayersView('ColorPicker');
    } else if (layer.type === 'overlay') {
      setCurrentPart(design.configData.partsArray.indexOf(layer.source));
      setCurrentLayer(-1);
    }
  };

  const handleDeleteLayer = (layer) => {
    setCanSave(true);
    handlePartChangeManager({
      type: 'layer-deleted',
      partName: currentPartName,
      layerIndex: layer,
    });
    setCurrentLayer(-1);
  };

  const handleMoveLayer = (layer, direction) => {
    setCanSave(true);
    const tempDesign = cloneDeep(design);
    let array;

    if (
      currentPartName === 'outerOverlay' ||
      currentPartName === 'innerOverlay'
    ) {
      array = tempDesign.outlineData.overlays[currentPartName][currentShoe];
    } else {
      array = tempDesign.outlineData.parts[currentPartName][currentShoe];
    }

    if (layer === array.length - 1 && direction === 1) {
      return;
    } else if (layer === 0 && direction === -1) {
      return;
    } else {
      let tempElement = array[layer];
      array[layer] = array[layer + direction];
      array[layer + direction] = tempElement;
      if (
        currentPartName === 'outerOverlay' ||
        currentPartName === 'innerOverlay'
      ) {
        tempDesign.outlineData.overlays[currentPartName][currentShoe] = array;
      } else {
        tempDesign.outlineData.parts[currentPartName][currentShoe] = array;
      }
      handlePartChangeManager({
        type: 'layer-moved',
        partName: currentPartName,
        layerIndex: layer,
        direction,
      });
      setCurrentLayer(currentLayer + direction);
    }
  };

  return (
    <div
      className='layers-view-container'
      onClick={(e) => handleClearFocusLayer(e.target.className)}
    >
      <PartSelector
        design={design}
        currentPart={currentPart}
        setCurrentPart={setCurrentPart}
        setCurrentLayer={setCurrentLayer}
        setLayersView={setLayersView}
      />

      <div className='add-layer-button'>
        <button onClick={() => setLayersView('AddLayerType')}>Add Layer</button>
      </div>

      <div className='layers-box-container'>
        {allLayers.map((layer, i) => (
          <div key={i} className='layer-list-items'>
            <div
              className={`layer-list-item-end ${
                currentLayer !== i ? 'hide-edit-buttons' : ''
              }`}
            >
              <div
                className={`edit-layer-button ${
                  i === numberOfLayers - 1 ? 'edit-layer-button-dead' : ''
                }`}
              >
                <button onClick={() => handleMoveLayer(i, 1)}>
                  <FaChevronUp />
                </button>
              </div>
              <div
                className={`edit-layer-button ${
                  i === 0 ? 'edit-layer-button-dead' : ''
                }`}
              >
                <button onClick={() => handleMoveLayer(i, -1)}>
                  <FaChevronDown />
                </button>
              </div>
            </div>
            <div
              className='layer-list-item-middle'
              onClick={() => {
                if (i === currentLayer) {
                  handleEditLayer(i, layer);
                } else {
                  setCurrentLayer(i);
                }
              }}
            >
              <div
                className={`layer-list-item-left ${
                  currentLayer === i ? 'focus-layer-highlight' : ''
                }`}
              >
                <div className='layer-list-item-type'>
                  {layer.type === 'overlay'
                    ? handleConvertPartName(layer.source).toLowerCase()
                    : layer.type}
                </div>
              </div>

              {layer.type === 'color' ? (
                <div
                  className='layer-list-item-right'
                  style={{
                    backgroundColor: layer.color,
                  }}
                ></div>
              ) : layer.type === 'graphic' ? (
                <div className='layer-list-item-right'>
                  <img
                    src={`/api/assets/images/${layer.link}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    alt='design-graphic'
                  />
                </div>
              ) : layer.type === 'mask' ? (
                <div className='layer-list-item-right'>
                  <img
                    src={`/api/assets/designimages/${layer.link}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    alt='design-graphic'
                  />
                </div>
              ) : (
                <div className='layer-list-item-right'>
                  <img
                    src={`/api/assets/designimages/${layer.source}Mask.png`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    alt='design-graphic'
                  />
                </div>
              )}
            </div>
            <div
              className={`layer-list-item-end ${
                currentLayer !== i ? 'hide-edit-buttons' : ''
              }`}
            >
              <div className='edit-layer-button'>
                <button
                  onClick={() => {
                    handleEditLayer(i, layer);
                  }}
                >
                  <FaPen />
                </button>
              </div>
              {layer.type === 'overlay' ? (
                <div className='edit-layer-button edit-layer-button-dead'>
                  <button>
                    <FaTimes />
                  </button>
                </div>
              ) : (
                <div className='edit-layer-button'>
                  <button onClick={() => handleDeleteLayer(i)}>
                    <FaTimes />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className='standard-button layer-back-button'>
        <button
          onClick={() => {
            setCurrentLayer(-1);
            handleViewChange('DesignPreview');
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default LayerOverview;
