import React, { useState } from 'react';
import './DesignPreview.css';
import { Link } from 'react-router-dom';
import { uploadImage } from '../../helpers/uploadImage';
import { takeScreenshot } from '../../helpers/takeScreenshot';
import { convertAwsLink } from '../../helpers/convertAwsLink';
import {
  FaPen,
  FaLayerGroup,
  FaTrashAlt,
  FaSave,
  FaTimes,
  FaCamera,
} from 'react-icons/fa';

function DesignPreview({
  handleViewChange,
  design,
  camera,
  canSave,
  setCanSave,
}) {
  const [loading, setLoading] = useState(false);

  const handleSaveDesign = async () => {
    setCanSave(false);
    if (design._id === '5f9256b47378785278621ee8') {
      setLoading(true);
      const file = await takeScreenshot(camera, 'newImage');
      uploadImage(file, true).then((data) => {
        const imageName = convertAwsLink(data.image);
        // If this is a new design, create it
        fetch('/api/outlines', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            author: design.author,
            title: design.title,
            screenshot: imageName,
            configId: '5f925589cc6d6c16e44d5dfd',
            outlineData: design.outlineData,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            window.location.href = `/designer/${data._id}`;
          });
      });
    } else {
      const file = await takeScreenshot(camera, design.screenshot);
      uploadImage(file, false).then((data) => {
        const imageName = convertAwsLink(data.image);
        // If the design already exists, update it
        fetch(`/api/outlines/${design._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            author: design.author,
            title: design.title,
            screenshot: imageName,
            configId: '5f925589cc6d6c16e44d5dfd',
            outlineData: design.outlineData,
          }),
        });
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
    camera.position.set(0, 0, 7.5);
  };

  if (loading) {
    return (
      <div className='design-preview-container'>
        <div id='loading-small'>
          <div id='loader'></div>
        </div>
      </div>
    );
  } else {
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
          onClick={() => handleViewChange('ChangeBaseColor')}
        >
          <div className='design-preview-button-icon'>
            <FaLayerGroup />
          </div>
          <button>BaseColor</button>
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
        {canSave ? (
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
        ) : (
          <div className='design-preview-button save-deactivated'>
            <div className='design-preview-button-icon'>
              <FaSave />
            </div>
            <button>Save</button>
          </div>
        )}

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
}

export default DesignPreview;
