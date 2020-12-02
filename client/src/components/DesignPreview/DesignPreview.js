import React, { useState } from 'react';
import './DesignPreview.css';
import { Link } from 'react-router-dom';
import { uploadImage } from '../../helpers/uploadImage';
import { takeScreenshot } from '../../helpers/takeScreenshot';
import { convertAwsLink } from '../../helpers/convertAwsLink';
import { designFetch } from '../../helpers/fetchHelpers';
import {
  FaPen,
  FaLayerGroup,
  FaTrashAlt,
  FaSave,
  FaTimes,
  FaCamera,
  FaSquare,
} from 'react-icons/fa';
// import { response } from 'express';
// import UserProvider from '../../context/UserProvider';

function DesignPreview({
  handleViewChange,
  design,
  camera,
  canSave,
  setCanSave,
  userData,
}) {
  // const userData = useContext(UserProvider.context);
  const [loading, setLoading] = useState(false);

  const handleSaveDesign = async () => {
    setCanSave(false);
    // if new design
    if (!design.author) {
      setLoading(true);
      const file = await takeScreenshot(camera, 'newImage');
      uploadImage(file, true).then((data) => {
        const imageName = convertAwsLink(data.image);
        const body = {
          author: userData._id,
          title: design.title,
          screenshot: imageName,
          configId: '5f925589cc6d6c16e44d5dfd',
          outlineData: design.outlineData,
        };
        designFetch('/api/outlines', 'POST', body)
          .then((res) => res.json())
          .then((data) => {
            // setTimeout(() => {
            window.location.href = `/designer/${data._id}`;
            // }, 2000);
          });
      });
    }
    // if design is mine
    else if (design.author === userData._id) {
      setLoading(true);
      const file = await takeScreenshot(camera, design.screenshot);
      uploadImage(file, false).then((data) => {
        const imageName = convertAwsLink(data.image);
        const body = {
          author: design.author,
          title: design.title,
          screenshot: imageName,
          configId: '5f925589cc6d6c16e44d5dfd',
          outlineData: design.outlineData,
        };
        designFetch(`/api/outlines/${design._id}`, 'PUT', body);
        setLoading(false);
      });
    }
    // if design is not mine
    else {
      setLoading(true);
      const file = await takeScreenshot(camera, design.screenshot);
      uploadImage(file, true).then((data) => {
        const imageName = convertAwsLink(data.image);
        const body = {
          author: userData._id,
          title: design.title,
          screenshot: imageName,
          configId: '5f925589cc6d6c16e44d5dfd',
          outlineData: design.outlineData,
        };
        designFetch(`/api/outlines/`, 'POST', body)
          .then((res) => res.json())
          .then((data) => {
            window.location.href = `/designer/${data._id}`;
          });
      });
    }
  };

  const handleDeleteDesign = () => {
    if (userData._id === design.author) {
      fetch(`/api/outlines/${design._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      window.location.href = '/';
    }
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
  } else if (userData) {
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
        </div>
        <div className='design-preview-buttons'>
          <div
            className='design-preview-button'
            onClick={() => handleViewChange('ChangeBaseColor')}
          >
            <div
              className='design-preview-button-icon'
              style={{ color: design.outlineData.baseColor }}
            >
              <FaSquare />
            </div>
            <button>Base Color</button>
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
          {design.author === userData._id && (
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
      </div>
    );
  } else {
    return <div>no data</div>;
  }
}

export default DesignPreview;
