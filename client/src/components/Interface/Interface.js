import React, { useState } from 'react';
import './Interface.css';
import ColorPicker from '../ColorPicker/ColorPicker'
import DesignPreview from '../DesignPreview/DesignPreview'
import LayersView from '../LayersView/LayersView'

function Interface({ design, setDesign }) {

  const [currentPart, setCurrentPart] = useState(0)
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
        <LayersView handleViewChange={handleViewChange} design={design} currentPart={currentPart} setCurrentPart={setCurrentPart} />
      </div>
    )
  }
  else {
    return (
      <div className="interface-container">
        <ColorPicker design={design} handleDesignChange={handleDesignChange} currentPart={currentPart} />
        <div className='change-view-button'>
          <button onClick={() => handleViewChange('Layers')}>Back</button>
        </div>
      </div>
    );
  }
}

export default Interface;