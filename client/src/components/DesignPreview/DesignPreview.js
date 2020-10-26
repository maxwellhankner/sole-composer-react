import React from 'react';
import './DesignPreview.css';
import { Link } from 'react-router-dom';
import {
  FaPen,
  FaLayerGroup,
  FaTrashAlt,
  FaSave,
  FaTimes,
  FaCamera,
} from 'react-icons/fa';

function DesignPreview({ handleViewChange, design, camera }) {
  const handleSaveDesign = () => {
    // If this is a new design, create it
    if (design._id === '5f9256b47378785278621ee8') {
      fetch('/api/outlines', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          author: design.author,
          title: design.title,
          screenshot: design.screenshot,
          configId: '5f925589cc6d6c16e44d5dfd',
          outlineData: design.outlineData,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.href = `/designer/${data._id}`;
        });
    }
    // If the design already exists, update it
    else {
      fetch(`/api/outlines/${design._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          author: design.author,
          title: design.title,
          screenshot: design.screenshot,
          configId: '5f925589cc6d6c16e44d5dfd',
          outlineData: design.outlineData,
        }),
      });
    }
  };

  const handleDeleteDesign = () => {
    fetch(`/api/outlines/${design._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    window.location.href = '/';
  };

  const handleMoveCamera = () => {
    camera.position.set(0, 0, 8.5);
  };

  return (
    <div className='design-preview-container'>
      <div className='design-preview-info'>
        <div className='design-title-container'>
          <p className='design-title'>{design.title}</p>
          <button
            className='edit-design-title-button'
            onClick={() => handleViewChange('ChangeDesignName')}
          >
            <FaPen />
          </button>
        </div>
        <p className='design-model'>{design.model}</p>
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
          handleMoveCamera();
        }}
      >
        <div className='design-preview-button-icon'>
          <FaCamera />
        </div>
        <button>Reset Camera</button>
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
      {!(design._id === '5f9256b47378785278621ee8') && (
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
