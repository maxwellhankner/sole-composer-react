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
  FaSquare,
  FaCamera,
} from 'react-icons/fa';
import Toggle from '../Toggle';

function DesignPreview({
  handleViewChange,
  design,
  canSave,
  setCanSave,
  userData,
  currentShoe,
  setCurrentShoe,
  shoeVisibility,
  setShoeVisibility,
  setCameraReset,
}) {
  const [loading, setLoading] = useState(false);
  let userId;
  if (typeof userData === 'object' && '_id' in userData) {
    userId = userData._id;
  }

  const handleSaveDesign = async () => {
    if (userData) {
      setCanSave(false);
      // if new design
      if (!design.author) {
        setLoading(true);
        setCameraReset(true);
        const file = await takeScreenshot('newImage');
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
        setCameraReset(true);
        const file = await takeScreenshot(design.screenshot);
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
        setCameraReset(true);
        const file = await takeScreenshot(design.screenshot);
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
    }
  };

  const handleDeleteDesign = () => {
    if (userData) {
      if (userData._id === design.author) {
        fetch(`/api/outlines/${design._id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        window.location.href = '/';
      }
    }
  };

  if (loading) {
    return (
      <div className="design-preview-container">
        <div id="loading-small">
          <div id="loader"></div>
        </div>
      </div>
    );
    // } else if (userData) {
  } else {
    return (
      <div className="design-preview-container">
        <div className="design-preview-info">
          <div className="design-title-container">
            <p className="design-title">{design.title}</p>
            <button
              className="edit-design-title-button"
              onClick={() => handleViewChange('ChangeDesignName')}
            >
              <FaPen />
            </button>
          </div>
        </div>
        <div className="design-preview-buttons">
          <Toggle
            currentShoe={currentShoe}
            setCurrentShoe={setCurrentShoe}
            visibility={shoeVisibility}
            setVisibility={setShoeVisibility}
          />
          <div
            className="design-preview-button"
            onClick={() => handleViewChange('ChangeBaseColor')}
          >
            <div
              className="design-preview-button-icon"
              style={{ color: design.outlineData.baseColors[currentShoe] }}
            >
              <FaSquare />
            </div>
            <button>Base Color</button>
          </div>
          <div
            className="design-preview-button"
            onClick={() => handleViewChange('Layers')}
          >
            <div className="design-preview-button-icon">
              <FaLayerGroup />
            </div>
            <button>Layers</button>
          </div>
          <div
            className="design-preview-button"
            onClick={() => setCameraReset(true)}
          >
            <div className="design-preview-button-icon">
              <FaCamera />
            </div>
            <button>Reset Camera</button>
          </div>
          {canSave && userData ? (
            <div
              className="design-preview-button"
              onClick={() => {
                handleSaveDesign();
              }}
            >
              <div className="design-preview-button-icon">
                <FaSave />
              </div>
              <button>Save</button>
            </div>
          ) : (
            <div className="design-preview-button save-deactivated">
              <div className="design-preview-button-icon">
                <FaSave />
              </div>
              <button>Save</button>
            </div>
          )}
          {userData && design.author === userId ? (
            <div
              className="design-preview-button"
              onClick={() => {
                handleDeleteDesign();
              }}
            >
              <div className="design-preview-button-icon">
                <FaTrashAlt />
              </div>
              <button>Delete</button>
            </div>
          ) : (
            <div className="design-preview-button save-deactivated">
              <div className="design-preview-button-icon">
                <FaTrashAlt />
              </div>
              <button>Delete</button>
            </div>
          )}
          <Link to="/">
            <div className="design-preview-button">
              <div className="design-preview-button-icon">
                <FaTimes />
              </div>
              <button>Exit</button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default DesignPreview;
