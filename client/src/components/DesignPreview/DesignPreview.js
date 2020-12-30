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
  FaEye,
} from 'react-icons/fa';

function DesignPreview({
  handleViewChange,
  design,
  camera,
  canSave,
  setCanSave,
  userData,
  currentShoe,
  setCurrentShoe,
}) {
  const [loading, setLoading] = useState(false);
  const [leftVisible, setLeftVisible] = useState(true);
  const [rightVisible, setRightVisible] = useState(true);

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
            window.location.href = `/designer/${data._id}`;
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
    camera.position.set(0, 0, 8.5);
  };

  const handleCurrentShoe = (shoe) => {
    // if right shoe
    if (shoe === 0 && shoe !== currentShoe) {
      if (rightVisible) {
        setCurrentShoe(shoe);
      } else {
        camera.layers.toggle(1);
        setRightVisible(true);
        setCurrentShoe(shoe);
      }
    }
    // if left shoe
    else if (shoe === 1 && shoe !== currentShoe) {
      if (leftVisible) {
        setCurrentShoe(shoe);
      } else {
        camera.layers.toggle(2);
        setCurrentShoe(shoe);
        setLeftVisible(true);
      }
    }
  };

  const handleToggleShoeVisible = (index) => {
    // if toggle right
    if (index === 1) {
      // if left is current - toggle right
      if (currentShoe === 1) {
        camera.layers.toggle(index);
        setRightVisible(!rightVisible);
      }
      // if right is current, we know it's visible
      else if (currentShoe === 0) {
        // if left is visible - make left current, make right invisible
        if (leftVisible) {
          setCurrentShoe(1);
          camera.layers.toggle(index);
          setRightVisible(!rightVisible);
        }
        // if left is invisible - make left visible and current, make right invisible
        else {
          camera.layers.toggle(1);
          camera.layers.toggle(2);
          setRightVisible(!rightVisible);
          setLeftVisible(!leftVisible);
          setCurrentShoe(1);
        }
      }
    }
    // if toggle left
    else if (index === 2) {
      // if right is current - toggle left
      if (currentShoe === 0) {
        camera.layers.toggle(index);
        setLeftVisible(!leftVisible);
      }
      // if left is current, we know it's visible
      else if (currentShoe === 1) {
        // if right is visible - make right current, make left invisible
        if (rightVisible) {
          setCurrentShoe(0);
          camera.layers.toggle(index);
          setLeftVisible(!leftVisible);
        }
        // if right is invisible - make right visible and current, make left invisible
        else {
          camera.layers.toggle(1);
          camera.layers.toggle(2);
          setRightVisible(!rightVisible);
          setLeftVisible(!leftVisible);
          setCurrentShoe(0);
        }
      }
    }
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
          <div className='design-preview-toggle-container'>
            <div className='design-preview-toggle-left'>
              <div
                className={`design-preview-toggle-shoe ${
                  currentShoe === 0 ? null : 'disabled-shoe'
                }`}
                onClick={() => {
                  handleCurrentShoe(0);
                }}
              >
                <p>Right</p>
              </div>
              <div
                className={`design-preview-toggle-shoe ${
                  currentShoe === 1 ? null : 'disabled-shoe'
                }`}
                onClick={() => {
                  handleCurrentShoe(1);
                }}
              >
                <p>Left</p>
              </div>
            </div>
            <div className='design-preview-toggle-right'>
              <div
                className={`design-preview-toggle-visible ${
                  rightVisible ? null : 'disabled-visibility'
                }`}
                onClick={() => {
                  handleToggleShoeVisible(1);
                }}
              >
                <FaEye />
              </div>
              <div
                className={`design-preview-toggle-visible ${
                  leftVisible ? null : 'disabled-visibility'
                }`}
                onClick={() => {
                  handleToggleShoeVisible(2);
                }}
              >
                <FaEye />
              </div>
            </div>
          </div>

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
