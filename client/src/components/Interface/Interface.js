import React, { useState } from 'react';
import './Interface.css';
import DesignPreview from '../DesignPreview/DesignPreview';
import Layers from '../Layers/Layers';
import ChangeDesignName from '../ChangeDesignName/ChangeDesignName';
import ChangeBaseColor from '../ChangeBaseColor/ChangeBaseColor';

function Interface({
  design,
  setDesign,
  graphicVisualCanvas,
  handleUpdateGraphicVisualCanvas,
  handlePartChangeManager,
  camera,
  orbitControls,
  handleUpdateBaseColor,
  userData,
  currentPart,
  setCurrentPart,
  currentShoe,
  setCurrentShoe,
  shoeVisibility,
  setShoeVisibility,
  view,
  setView,
  layersView,
  setLayersView,
  focusLayer,
  setFocusLayer,
}) {
  // const [currentPart, setCurrentPart] = useState(0);
  const [currentLayer, setCurrentLayer] = useState(0);
  const [canSave, setCanSave] = useState(false);

  const handleViewChange = (viewChange) => {
    setView(viewChange);
  };

  if (view === 'DesignPreview') {
    return (
      <div className='interface-container'>
        <DesignPreview
          handleViewChange={handleViewChange}
          design={design}
          setDesign={setDesign}
          camera={camera}
          orbitControls={orbitControls}
          canSave={canSave}
          setCanSave={setCanSave}
          userData={userData}
          currentShoe={currentShoe}
          setCurrentShoe={setCurrentShoe}
          shoeVisibility={shoeVisibility}
          setShoeVisibility={setShoeVisibility}
        />
      </div>
    );
  } else if (view === 'Layers') {
    return (
      <div className='interface-container'>
        <Layers
          layersView={layersView}
          setLayersView={setLayersView}
          focusLayer={focusLayer}
          setFocusLayer={setFocusLayer}
          handleViewChange={handleViewChange}
          design={design}
          setDesign={setDesign}
          currentShoe={currentShoe}
          currentPart={currentPart}
          setCurrentPart={setCurrentPart}
          currentLayer={currentLayer}
          setCurrentLayer={setCurrentLayer}
          graphicVisualCanvas={graphicVisualCanvas}
          handleUpdateGraphicVisualCanvas={handleUpdateGraphicVisualCanvas}
          handlePartChangeManager={handlePartChangeManager}
          setCanSave={setCanSave}
        />
      </div>
    );
  } else if (view === 'ChangeDesignName') {
    return (
      <div className='interface-container'>
        <ChangeDesignName
          handleViewChange={handleViewChange}
          design={design}
          setDesign={setDesign}
          setCanSave={setCanSave}
        />
      </div>
    );
  } else if (view === 'ChangeBaseColor') {
    return (
      <div className='interface-container'>
        <ChangeBaseColor
          handleViewChange={handleViewChange}
          design={design}
          setDesign={setDesign}
          setCanSave={setCanSave}
          handleUpdateBaseColor={handleUpdateBaseColor}
          currentShoe={currentShoe}
          setCurrentShoe={setCurrentShoe}
        />
      </div>
    );
  }
}

export default Interface;
