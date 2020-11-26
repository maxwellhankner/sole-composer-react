import React, { useState } from 'react';
import './Interface.css';
import DesignPreview from '../DesignPreview/DesignPreview';
import LayersView from '../LayersView/LayersView';
import ChangeDesignName from '../ChangeDesignName/ChangeDesignName';
import ChangeBaseColor from '../ChangeBaseColor/ChangeBaseColor';

function Interface({
  design,
  setDesign,
  graphicVisualCanvas,
  handleUpdateGraphicVisualCanvas,
  handlePartChangeManager,
  camera,
  handleUpdateBaseColor,
  userData,
}) {
  const [currentPart, setCurrentPart] = useState(0);
  const [currentLayer, setCurrentLayer] = useState(0);
  const [view, setView] = useState('DesignPreview');
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
          canSave={canSave}
          setCanSave={setCanSave}
          userData={userData}
        />
      </div>
    );
  } else if (view === 'Layers') {
    return (
      <div className='interface-container'>
        <LayersView
          handleViewChange={handleViewChange}
          design={design}
          setDesign={setDesign}
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
        />
      </div>
    );
  }
}

export default Interface;
