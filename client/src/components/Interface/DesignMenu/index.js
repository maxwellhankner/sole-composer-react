import React, { useState } from 'react';
import {
  LeftInterfaceContainer,
  InterfaceDoubleButtons,
  InterfaceButtonBox,
  InterfaceButton,
} from '../../designerui';
import {
  MenuDesignNameContainer,
  MenuDesignName,
  MenuEditNameButton,
} from './styledComponents';
import { Link } from 'react-router-dom';
import { uploadImage } from '../../../utils/uploadImage';
import { takeScreenshot } from '../../../utils/takeScreenshot';
import { convertAwsLink } from '../../../utils/convertAwsLink';
import { designFetch } from '../../../utils/fetchHelpers';
import { FaPen } from 'react-icons/fa';

function DesignMenu({
  handleViewChange,
  design,
  canSave,
  setCanSave,
  userData,
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
  } else {
    return (
      <LeftInterfaceContainer>
        <MenuDesignNameContainer>
          <MenuDesignName>{design.title}</MenuDesignName>
          <MenuEditNameButton
            onClick={() => handleViewChange('ChangeDesignName')}
          >
            <FaPen />
          </MenuEditNameButton>
        </MenuDesignNameContainer>
        <InterfaceDoubleButtons>
          <InterfaceButtonBox onClick={() => setCameraReset(true)}>
            <InterfaceButton active>Reset Camera</InterfaceButton>
          </InterfaceButtonBox>
          {canSave && userData ? (
            <InterfaceButtonBox
              onClick={() => {
                handleSaveDesign();
              }}
            >
              <InterfaceButton active>Save</InterfaceButton>
            </InterfaceButtonBox>
          ) : (
            <InterfaceButtonBox>
              <InterfaceButton>Save</InterfaceButton>
            </InterfaceButtonBox>
          )}
          {userData && design.author === userId ? (
            <InterfaceButtonBox
              onClick={() => {
                handleDeleteDesign();
              }}
            >
              <InterfaceButton active>Delete</InterfaceButton>
            </InterfaceButtonBox>
          ) : (
            <InterfaceButtonBox>
              <InterfaceButton>Delete</InterfaceButton>
            </InterfaceButtonBox>
          )}

          <InterfaceButtonBox>
            <Link to="/">
              <InterfaceButton active>Exit</InterfaceButton>
            </Link>
          </InterfaceButtonBox>
        </InterfaceDoubleButtons>
      </LeftInterfaceContainer>
    );
  }
}

export default DesignMenu;
