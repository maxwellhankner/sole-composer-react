import React from 'react';
import LayerDictionary from './Constants';
import './Layers.css';

function LayersView({
  layersView,
  setLayersView,
  currentLayer,
  currentPart,
  design,
  graphicVisualCanvas,
  handleChangeManager,
  handleUpdateGraphicVisualCanvas,
  handleViewChange,
  setCurrentLayer,
  setCurrentPart,
  setCanSave,
  currentShoe,
}) {
  const currentPartName = Object.keys(design.configData.partsObject)[
    currentPart
  ];

  let partType = 'parts';
  if (
    currentPartName === 'outerOverlay' ||
    currentPartName === 'innerOverlay'
  ) {
    partType = 'overlays';
  }
  const numberOfLayers =
    design.outlineData[partType][currentPartName][currentShoe].length;
  const allLayers = design.outlineData[partType][currentPartName][currentShoe];

  const handleAddLayer = (type, fileName) => {
    setCanSave(true);
    handleChangeManager({
      type: 'layer-added',
      partName: currentPartName,
      layerType: type,
      ...(fileName && { fileName: fileName }),
    });
    setCurrentLayer(numberOfLayers);
  };

  const handleAddMaskLayer = (maskType, maskLink) => {
    setCanSave(true);
    handleChangeManager({
      type: 'layer-added',
      partName: currentPartName,
      layerType: 'Mask',
      maskType,
      maskLink,
    });
    setCurrentLayer(numberOfLayers);
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
    handleChangeManager({
      type: 'layer-deleted',
      partName: currentPartName,
      layerIndex: layer,
    });
    setCurrentLayer(-1);
  };

  const handleMoveLayer = (layer, direction) => {
    setCanSave(true);
    handleChangeManager({
      type: 'layer-moved',
      partName: currentPartName,
      layerIndex: layer,
      direction,
    });
    setCurrentLayer(currentLayer + direction);
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
    handleMoveLayer,
    handleEditLayer,
    handleDeleteLayer,
    handleChangeManager,
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
