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
    focusLayer,
    handlePartChangeManager,
    handleViewChange,
    numberOfLayers,
    setCurrentLayer,
    setCurrentPart,
    setFocusLayer,
    setLayersView,
  } = props;

  const handleFocusLayer = (i) => {
    setFocusLayer(i);
  };

  const handleClearFocusLayer = (aClass) => {
    if (aClass === 'layers-view-container') {
      setFocusLayer(-1);
    }
  };

  const handleCurrentLayer = (key) => {
    setCurrentLayer(key);
  };

  const handleDeleteLayer = (layer) => {
    handlePartChangeManager({
      type: 'layer-deleted',
      partName: currentPartName,
      layerIndex: layer,
    });
    setFocusLayer(-1);
  };

  const handleMoveLayer = (layer, direction) => {
    const tempDesign = cloneDeep(design);
    let array;

    if (
      currentPartName === 'outerOverlay' ||
      currentPartName === 'innerOverlay'
    ) {
      array = tempDesign.outline.overlays[currentPartName].layers;
    } else {
      array = tempDesign.outline.parts[currentPartName].layers;
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
        tempDesign.outline.overlays[currentPartName].layers = array;
      } else {
        tempDesign.outline.parts[currentPartName].layers = array;
      }
      handlePartChangeManager({
        type: 'layer-moved',
        partName: currentPartName,
        layerIndex: layer,
        direction,
      });
      setFocusLayer(focusLayer + direction);
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
        setFocusLayer={setFocusLayer}
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
                focusLayer !== i ? 'hide-edit-buttons' : ''
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
              onClick={() => handleFocusLayer(i)}
            >
              <div
                className={`layer-list-item-left ${
                  focusLayer === i ? 'focus-layer-highlight' : ''
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
                    src={layer.link}
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
                    src={layer.link}
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
                    src={`../assets/images/${layer.source}Mask.png`}
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
                focusLayer !== i ? 'hide-edit-buttons' : ''
              }`}
            >
              {layer.type === 'color' ? (
                <div className='edit-layer-button'>
                  <button
                    onClick={() => {
                      handleCurrentLayer(i);
                      setLayersView('ColorPicker');
                    }}
                  >
                    <FaPen />
                  </button>
                </div>
              ) : layer.type === 'graphic' ? (
                <div className='edit-layer-button'>
                  <button
                    onClick={() => {
                      handleCurrentLayer(i);
                      setLayersView('GraphicEditor');
                    }}
                  >
                    <FaPen />
                  </button>
                </div>
              ) : layer.type === 'mask' ? (
                <div className='edit-layer-button'>
                  <button
                    onClick={() => {
                      handleCurrentLayer(i);
                      setLayersView('ColorPicker');
                    }}
                  >
                    <FaPen />
                  </button>
                </div>
              ) : (
                <div className='edit-layer-button'>
                  <button
                    onClick={() => {
                      setCurrentPart(
                        design.config.partsArray.indexOf(layer.source)
                      );
                      setFocusLayer(-1);
                    }}
                  >
                    <FaPen />
                  </button>
                </div>
              )}
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
        <button onClick={() => handleViewChange('DesignPreview')}>Back</button>
      </div>
    </div>
  );
}

export default LayerOverview;
