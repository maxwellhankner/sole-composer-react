import React from 'react';
import './DesignPreview.css';

function DesignPreview({ handleViewChange }) {
  return (
    <div className='design-preview-container'>
      <div className='view-title'>
        <p>Design Preview</p>
      </div>
      <div className='change-view-button'>
        <button onClick={() => handleViewChange('Layers')}>Designer</button>
      </div>
      <div className='change-view-button'>
        <button>Save</button>
      </div>
    </div>
  );
}

export default DesignPreview;
