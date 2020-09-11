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
}) {
  const [focusLayer, setFocusLayer] = useState();
  const [layersView, setLayersView] = useState('LayerOverview');

  const currentPartName = Object.keys(design.config.partsObject)[currentPart];

  let numberOfLayers;
  let allLayers;

  if (
    currentPartName === 'outerOverlay' ||
    currentPartName === 'innerOverlay'
  ) {
    numberOfLayers = design.outline.overlays[currentPartName].layers.length;
    allLayers = design.outline.overlays[currentPartName].layers;
  } else {
    numberOfLayers = design.outline.parts[currentPartName].layers.length;
    allLayers = design.outline.parts[currentPartName].layers;
  }

  const handleAddLayer = (type) => {
    handlePartChangeManager({
      type: 'layer-added',
      partName: currentPartName,
      layerType: type,
    });
    setFocusLayer(numberOfLayers);
  };

  const handleAddMaskLayer = (maskType, maskLink) => {
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
  };

  return <Component props={propsToPassDown} />;
}

export default LayersView;
