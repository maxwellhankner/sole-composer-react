import React, { useState, useEffect } from 'react';
import './GraphicPicker.css';
import { uploadImage } from '../../helpers/uploadImage';
import { convertAwsLink } from '../../helpers/convertAwsLink';
import CurrentGraphics from '../CurrentGraphics/CurrentGraphics';

function GraphicPicker({ props }) {
  const { setLayersView, handleAddLayer, design } = props;

  const [warning, setWarning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [graphicsArray, setGraphicsArray] = useState();

  useEffect(() => {
    const getGraphicsArray = () => {
      const graphics = [];

      for (const property in design.outlineData.parts) {
        for (const layer in design.outlineData.parts[property].layers) {
          if (
            design.outlineData.parts[property].layers[layer].type === 'graphic'
          ) {
            const thisGraphic =
              design.outlineData.parts[property].layers[layer].link;
            if (!graphics.includes(thisGraphic)) {
              graphics.push(thisGraphic);
            }
          }
        }
      }
      for (const property in design.outlineData.overlays) {
        for (const layer in design.outlineData.overlays[property].layers) {
          if (
            design.outlineData.overlays[property].layers[layer].type ===
            'graphic'
          ) {
            const thisGraphic =
              design.outlineData.overlays[property].layers[layer].link;
            if (!graphics.includes(thisGraphic)) {
              graphics.push(thisGraphic);
            }
          }
        }
      }

      if (!graphics[0]) {
        return null;
      } else {
        return graphics;
      }
    };

    setGraphicsArray(getGraphicsArray());
  }, [design]);

  const onFileChange = async (e) => {
    const fileSize = (e.target.files[0].size / 1024 / 1024).toFixed(4); // MB
    if (fileSize < 2) {
      setIsLoading(true);
      const file = e.target.files[0];
      await uploadImage(file, true).then((data) => {
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
      {graphicsArray && (
        <div className='used-graphics'>
          <CurrentGraphics
            graphicsArray={graphicsArray}
            handleAddGraphicLayer={handleAddGraphicLayer}
          />
        </div>
      )}

      {/* <div className='view-title'>
        <p>Upload Image</p>
      </div> */}
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

export default GraphicPicker;
