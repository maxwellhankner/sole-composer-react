import React, { useState } from 'react';
import LayerDictionary from './Constants';
import './LayersView.css';

function LayersView({
  currentLayer,
  currentPart,
  design,
  graphicVisualCanvas,
  handlePartChangeManager,
  handleUpdateGraphicVisualCanvas,
  handleViewChange,
  setCurrentLayer,
  setCurrentPart,
  setCanSave,
}) {
  const [focusLayer, setFocusLayer] = useState();
  const [layersView, setLayersView] = useState('PartList');

  const currentPartName = Object.keys(design.configData.partsObject)[
    currentPart
  ];

  let numberOfLayers;
  let allLayers;

  if (
    currentPartName === 'outerOverlay' ||
    currentPartName === 'innerOverlay'
  ) {
    numberOfLayers = design.outlineData.overlays[currentPartName].layers.length;
    allLayers = design.outlineData.overlays[currentPartName].layers;
  } else {
    numberOfLayers = design.outlineData.parts[currentPartName].layers.length;
    allLayers = design.outlineData.parts[currentPartName].layers;
  }

  const handleAddLayer = (type, fileName) => {
    setCanSave(true);
    if (fileName) {
      handlePartChangeManager({
        type: 'layer-added',
        partName: currentPartName,
        layerType: type,
        fileName: fileName,
      });
      setFocusLayer(numberOfLayers);
    } else {
      handlePartChangeManager({
        type: 'layer-added',
        partName: currentPartName,
        layerType: type,
      });
      setFocusLayer(numberOfLayers);
    }
  };

  const handleAddMaskLayer = (maskType, maskLink) => {
    setCanSave(true);
    handlePartChangeManager({
      type: 'layer-added',
      partName: currentPartName,
      layerType: 'Mask',
      maskType,
      maskLink,
    });
    setFocusLayer(numberOfLayers);
  };

  const Component = LayerDictionary[layersView];

  const propsToPassDown = {
    allLayers,
    currentPart,
    currentLayer,
    currentPartName,
    design,
    focusLayer,
    graphicVisualCanvas,
    handleAddLayer,
    handleAddMaskLayer,
    handlePartChangeManager,
    handleUpdateGraphicVisualCanvas,
    handleViewChange,
    setCurrentLayer,
    setCurrentPart,
    setFocusLayer,
    setLayersView,
    numberOfLayers,
    setCanSave,
  };

  return <Component props={propsToPassDown} />;
}

export default LayersView;
