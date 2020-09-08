import React, { useState } from 'react';
import './Interface.css';
import DesignPreview from '../DesignPreview/DesignPreview';
import LayersView from '../LayersView/LayersView';


function Interface({ design, setDesign, graphicVisualCanvas, handleUpdateGraphicVisualCanvas, handlePartChangeManager }) {

  const [currentPart, setCurrentPart] = useState(0);
  const [currentLayer, setCurrentLayer] = useState(0);
  const [view, setView] = useState('DesignPreview');

  const handleViewChange = (viewChange) => {
    setView(viewChange);
  }

  if (view === 'DesignPreview') {
    return (
      <div className="interface-container">
        <DesignPreview handleViewChange={handleViewChange} />
      </div>
    );
  }
  else if (view === 'Layers') {
    return (
      <div className="interface-container">
        <LayersView handleViewChange={handleViewChange} design={design} setDesign={setDesign} currentPart={currentPart} setCurrentPart={setCurrentPart} currentLayer={currentLayer} setCurrentLayer={setCurrentLayer} graphicVisualCanvas={graphicVisualCanvas} handleUpdateGraphicVisualCanvas={handleUpdateGraphicVisualCanvas} handlePartChangeManager={handlePartChangeManager} />
      </div>
    )
  }
}

export default Interface;