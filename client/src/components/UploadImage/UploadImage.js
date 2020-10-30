import React from 'react';
import './UploadImage.css';
import { uploadImage } from '../../helpers/imageUpload';

function UploadImage({ props }) {
  const { setLayersView, handleAddLayer } = props;

  const onFileChange = async (e) => {
    // show loading spinner
    const file = e.target.files[0];
    let awsLocation;
    await uploadImage(file).then((data) => (awsLocation = data.image));
    let awsFileName = awsLocation.split('/');
    awsFileName = awsFileName[awsFileName.length - 1];
    handleAddGraphicLayer(awsFileName);
  };

  const handleAddGraphicLayer = (fileName) => {
    // add layer
    handleAddLayer('Graphic', fileName);

    // setLayersView('LayerOverview')
    setLayersView('LayerOverview');
  };

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

      <div className='standard-button'>
        <button onClick={() => setLayersView('LayerOverview')}>Cancel</button>
      </div>
    </div>
  );
}

export default UploadImage;
