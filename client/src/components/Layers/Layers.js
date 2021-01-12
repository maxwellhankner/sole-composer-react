import React, { useEffect } from 'react';
import LayerDictionary from './Constants';
import './Layers.css';

function LayersView({
  layersView,
  setLayersView,
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
  currentShoe,
}) {
  useEffect(() => {
    setLayersView('LayerOverview');
  }, [setLayersView, setCurrentLayer]);

  const currentPartName = Object.keys(design.configData.partsObject)[
    currentPart
  ];

  let numberOfLayers;
  let allLayers;

  if (
    currentPartName === 'outerOverlay' ||
    currentPartName === 'innerOverlay'
  ) {
    numberOfLayers =
      design.outlineData.overlays[currentPartName][currentShoe].length;
    allLayers = design.outlineData.overlays[currentPartName][currentShoe];
  } else {
    numberOfLayers =
      design.outlineData.parts[currentPartName][currentShoe].length;
    allLayers = design.outlineData.parts[currentPartName][currentShoe];
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
      setCurrentLayer(numberOfLayers);
    } else {
      handlePartChangeManager({
        type: 'layer-added',
        partName: currentPartName,
        layerType: type,
      });
      setCurrentLayer(numberOfLayers);
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
    setCurrentLayer(numberOfLayers);
  };

  const Component = LayerDictionary[layersView];

  const propsToPassDown = {
    allLayers,
    currentPart,
    currentLayer,
    currentPartName,
    design,
    graphicVisualCanvas,
    handleAddLayer,
    handleAddMaskLayer,
    handlePartChangeManager,
    handleUpdateGraphicVisualCanvas,
    handleViewChange,
    setCurrentLayer,
    setCurrentPart,
    setLayersView,
    numberOfLayers,
    setCanSave,
    currentShoe,
    layersView,
  };

  return <Component props={propsToPassDown} />;
}

export default LayersView;