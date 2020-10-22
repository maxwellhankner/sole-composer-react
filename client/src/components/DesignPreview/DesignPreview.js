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
    if (design.id === '5f89fa848bad7310f40b1630') {
      console.log('new design');
      fetch('/api/outlines', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ outline: design.outline }),
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.href = `/designer/${data._id}`;
        });
    }
    // If the design already exists, update it
    else {
      fetch(`/api/outlines/${design.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ outline: design.outline }),
      });
    }
  };

  const handleDeleteDesign = () => {
    const designId = window.location.pathname.split('/')[2];
    fetch(`/api/outlines/${designId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // reroute user to landing
    window.location.href = '/';
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
      {!(design.id === '5f89fa848bad7310f40b1630') && (
        <div
          className='design-preview-button'
          onClick={() => {
            handleDeleteDesign();
          }}
        >
          <div className='design-preview-button-icon'>
            <FaTrashAlt />
          </div>
          <button>Delete</button>
        </div>
      )}
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
