import React from 'react';
import './DesignPreview.css';
import { Link } from 'react-router-dom';

function DesignPreview({ handleViewChange }) {
  return (
    <div className='design-preview-container'>
      <div className='view-title'>
        <p>Design Preview</p>
      </div>
      <div className='standard-button'>
        <button onClick={() => handleViewChange('Layers')}>Designer</button>
      </div>
      <div className='standard-button'>
        <button>Save</button>
      </div>

      <Link to='/'>
        <div className='standard-button'>
          <button>Exit</button>
        </div>
      </Link>
    </div>
  );
}

export default DesignPreview;
