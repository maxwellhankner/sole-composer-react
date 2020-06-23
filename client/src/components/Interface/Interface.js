import React, { useState } from 'react';
import './Interface.css';
import DesignPreview from '../DesignPreview/DesignPreview'
import LayersView from '../LayersView/LayersView'


function Interface({ design, setDesign, graphicVisualCanvas, handlePartUpdate, handleUpdateLayer }) {

  const [currentPart, setCurrentPart] = useState(0)
  const [currentLayer, setCurrentLayer] = useState(0);
  const [view, setView] = useState('DesignPreview');

  const handleViewChange = (viewChange) => {
    setView(viewChange);
  }

  const handleDesignChange = (part, layer, color) => {
    const tempDesign = JSON.parse(JSON.stringify(design));
    tempDesign.parts[part].layers[layer].color = color;
    setDesign(tempDesign);
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
        <LayersView handleViewChange={handleViewChange} handleDesignChange={handleDesignChange} design={design} setDesign={setDesign} currentPart={currentPart} setCurrentPart={setCurrentPart} currentLayer={currentLayer} setCurrentLayer={setCurrentLayer} graphicVisualCanvas={graphicVisualCanvas} handlePartUpdate={handlePartUpdate} handleUpdateLayer={handleUpdateLayer} />
      </div>
    )
  }
}

export default Interface;