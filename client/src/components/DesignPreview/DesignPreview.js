import React from 'react';
import './DesignPreview.css';
import { Link } from 'react-router-dom';
import {
  FaPen,
  FaLayerGroup,
  FaTrashAlt,
  FaSave,
  FaTimes,
} from 'react-icons/fa';

function DesignPreview({ handleViewChange, design }) {
  const handleSaveDesign = () => {
    fetch('/api/outlines', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ outline: design.outline }),
    });
  };
  return (
    <div className='design-preview-container'>
      <div className='design-preview-info'>
        <div className='design-title-container'>
          <p className='design-title'>{design.outline.title}</p>
          <button
            className='edit-design-title-button'
            onClick={() => handleViewChange('ChangeDesignName')}
          >
            <FaPen />
          </button>
        </div>
        <p className='design-model'>{design.outline.model}</p>
      </div>
      <div
        className='design-preview-button'
        onClick={() => handleViewChange('Layers')}
      >
        <div className='design-preview-button-icon'>
          <FaLayerGroup />
        </div>
        <button>Layers</button>
      </div>
      <div
        className='design-preview-button'
        onClick={() => {
          handleSaveDesign();
        }}
      >
        <div className='design-preview-button-icon'>
          <FaSave />
        </div>
        <button>Save</button>
      </div>
      <div className='design-preview-button'>
        <div className='design-preview-button-icon'>
          <FaTrashAlt />
        </div>
        <button>Delete</button>
      </div>
      <Link to='/'>
        <div className='design-preview-button'>
          <div className='design-preview-button-icon'>
            <FaTimes />
          </div>
          <button>Exit</button>
        </div>
      </Link>
    </div>
  );
}

export default DesignPreview;
