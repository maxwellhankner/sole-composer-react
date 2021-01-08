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
  orbitControls,
  canSave,
  setCanSave,
  userData,
  currentShoe,
  setCurrentShoe,
  shoeVisibility,
  setShoeVisibility,
}) {
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

  const handleResetCamera = () => {
    camera.layers.enableAll();
    orbitControls.target.set(0, 0, 0);
    setShoeVisibility({ right: true, left: true });
    camera.position.set(0, 0, 8.5);
  };

  const handleCurrentShoe = (shoe) => {
    // if right shoe
    if (shoe === 'right' && shoe !== currentShoe) {
      if (shoeVisibility.right) {
        setCurrentShoe(shoe);
      } else {
        let cameraPosition = camera.position;
        orbitControls.target.set(0, 0, 1.25);
        camera.position.set(
          cameraPosition.x,
          cameraPosition.y,
          cameraPosition.z + 2.5
        );
        // L => R
        let visObj = { ...shoeVisibility };
        visObj.right = true;
        visObj.left = false;
        setShoeVisibility(visObj);

        camera.layers.toggle(1);
        camera.layers.toggle(2);
        setCurrentShoe(shoe);
      }
    }
    // if left shoe
    else if (shoe === 'left' && shoe !== currentShoe) {
      if (shoeVisibility.left) {
        setCurrentShoe(shoe);
      } else {
        let cameraPosition = camera.position;
        orbitControls.target.set(0, 0, -1.25);
        camera.position.set(
          cameraPosition.x,
          cameraPosition.y,
          cameraPosition.z - 2.5
        );
        // R => L
        let visObj = { ...shoeVisibility };
        visObj.right = false;
        visObj.left = true;
        setShoeVisibility(visObj);

        camera.layers.toggle(1);
        camera.layers.toggle(2);
        setCurrentShoe(shoe);
      }
    }
  };

  const handleToggleShoeVisible = (index) => {
    // if toggle right
    if (index === 1) {
      // if left is current - toggle right
      if (currentShoe === 'left') {
        if (shoeVisibility.right) {
          let cameraPosition = camera.position;
          orbitControls.target.set(0, 0, -1.25);
          camera.position.set(
            cameraPosition.x,
            cameraPosition.y,
            cameraPosition.z - 1.25
          );
          // LR => L
        } else {
          let cameraPosition = camera.position;
          orbitControls.target.set(0, 0, 0);
          camera.position.set(
            cameraPosition.x,
            cameraPosition.y,
            cameraPosition.z + 1.25
          );
          // L => LR
        }

        let visObj = { ...shoeVisibility };
        visObj.right = !visObj.right;
        setShoeVisibility(visObj);

        camera.layers.toggle(index);
      }
      // if right is current, we know it's visible
      else if (currentShoe === 'right') {
        // if left is visible - make left current, make right invisible
        if (shoeVisibility.left) {
          let cameraPosition = camera.position;
          orbitControls.target.set(0, 0, -1.25);
          camera.position.set(
            cameraPosition.x,
            cameraPosition.y,
            cameraPosition.z - 1.25
          );
          // LR => L
          let visObj = { ...shoeVisibility };
          visObj.right = false;
          setShoeVisibility(visObj);

          setCurrentShoe('left');
          camera.layers.toggle(index);
        }
        // if left is invisible - make left visible and current, make right invisible
        else {
          let cameraPosition = camera.position;
          orbitControls.target.set(0, 0, -1.25);
          camera.position.set(
            cameraPosition.x,
            cameraPosition.y,
            cameraPosition.z - 2.5
          );
          // R => L
          let visObj = { ...shoeVisibility };
          visObj.right = !visObj.right;
          visObj.left = !visObj.left;
          setShoeVisibility(visObj);

          camera.layers.toggle(1);
          camera.layers.toggle(2);
          setCurrentShoe('left');
        }
      }
    }
    // if toggle left
    else if (index === 2) {
      // if right is current - toggle left
      if (currentShoe === 'right') {
        if (shoeVisibility.left) {
          let cameraPosition = camera.position;
          orbitControls.target.set(0, 0, 1.25);
          camera.position.set(
            cameraPosition.x,
            cameraPosition.y,
            cameraPosition.z + 1.25
          );
          // LR => R
        } else {
          let cameraPosition = camera.position;
          orbitControls.target.set(0, 0, 0);
          camera.position.set(
            cameraPosition.x,
            cameraPosition.y,
            cameraPosition.z - 1.25
          );
          // R => LR
        }

        let visObj = { ...shoeVisibility };
        visObj.left = !visObj.left;
        setShoeVisibility(visObj);

        camera.layers.toggle(index);
      }
      // if left is current, we know it's visible
      else if (currentShoe === 'left') {
        // if right is visible - make right current, make left invisible
        if (shoeVisibility.right) {
          let cameraPosition = camera.position;
          orbitControls.target.set(0, 0, 1.25);
          camera.position.set(
            cameraPosition.x,
            cameraPosition.y,
            cameraPosition.z + 1.25
          );
          // LR => R
          let visObj = { ...shoeVisibility };
          visObj.left = false;
          setShoeVisibility(visObj);

          setCurrentShoe('right');
          camera.layers.toggle(index);
        }
        // if right is invisible - make right visible and current, make left invisible
        else {
          let cameraPosition = camera.position;
          orbitControls.target.set(0, 0, 1.25);
          camera.position.set(
            cameraPosition.x,
            cameraPosition.y,
            cameraPosition.z + 2.5
          );
          // L => R
          let visObj = { ...shoeVisibility };
          visObj.right = !visObj.right;
          visObj.left = !visObj.left;
          setShoeVisibility(visObj);

          camera.layers.toggle(1);
          camera.layers.toggle(2);
          setCurrentShoe('right');
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
                  currentShoe === 'right' ? null : 'disabled-shoe'
                }`}
                onClick={() => {
                  handleCurrentShoe('right');
                }}
              >
                <p>Right</p>
              </div>
              <div
                className={`design-preview-toggle-shoe ${
                  currentShoe === 'left' ? null : 'disabled-shoe'
                }`}
                onClick={() => {
                  handleCurrentShoe('left');
                }}
              >
                <p>Left</p>
              </div>
            </div>
            <div className='design-preview-toggle-right'>
              <div
                className={`design-preview-toggle-visible ${
                  shoeVisibility.right ? null : 'disabled-visibility'
                }`}
                onClick={() => {
                  handleToggleShoeVisible(1);
                }}
              >
                <FaEye />
              </div>
              <div
                className={`design-preview-toggle-visible ${
                  shoeVisibility.left ? null : 'disabled-visibility'
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
              handleResetCamera();
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
