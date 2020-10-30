import React, { useState } from 'react';
import './UploadImage.css';
import { uploadImage } from '../../helpers/uploadImage';
import { convertAwsLink } from '../../helpers/convertAwsLink';

function UploadImage({ props }) {
  const { setLayersView, handleAddLayer } = props;

  const [warning, setWarning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onFileChange = async (e) => {
    const fileSize = (e.target.files[0].size / 1024 / 1024).toFixed(4); // MB
    if (fileSize < 2) {
      // show loading spinner
      setIsLoading(true);
      const file = e.target.files[0];
      await uploadImage(file).then((data) => {
        const awsFileName = convertAwsLink(data.image);
        handleAddGraphicLayer(awsFileName);
      });
    } else {
      setWarning(true);
    }
  };

  const handleAddGraphicLayer = (fileName) => {
    handleAddLayer('Graphic', fileName);
    setLayersView('LayerOverview');
  };

  if (isLoading) {
    return (
      <div className='upload-image-container'>
        <div id='loading-small'>
          <div id='loader'></div>
        </div>
      </div>
    );
  }

  return (
    <div className='upload-image-container'>
      <div className='view-title'>
        <p>Upload Image</p>
      </div>
      <div className='upload-image-input'>
        <label htmlFor='image-input-id' className='upload-image-label'>
          <input
            onChange={(e) => onFileChange(e)}
            id='image-input-id'
            type='file'
            name='myImage'
            accept='image/png, image/jpeg, .png, .jpg'
          />
          Upload
        </label>
      </div>

      {warning && (
        <div className='file-size-warning'>
          <p>file must be less that 2MB.</p>
        </div>
      )}

      <div className='standard-button'>
        <button onClick={() => setLayersView('LayerOverview')}>Cancel</button>
      </div>
    </div>
  );
}

export default UploadImage;
