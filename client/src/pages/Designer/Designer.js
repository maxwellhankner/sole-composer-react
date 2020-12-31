import React, { useEffect, useState, useContext } from 'react';
import './Designer.css';
import DesignerContainer from '../../components/DesignerContainer/DesignerContainer';
import {
  createTexture,
  createCanvas,
  createGraphicVisualCanvas,
} from '../../canvasFunctions';
import { simpleFetch } from '../../helpers/fetchHelpers';
import { useParams } from 'react-router-dom';
import UserProvider from '../../context/UserProvider';

function Designer() {
  console.log('designer');
  const [designSpec, setDesignSpec] = useState(null);
  const [graphicVisualCanvas, setGraphicVisualCanvas] = useState(null);
  const [innerOverlayCanvas, setInnerOverlayCanvas] = useState(null);
  const [outerOverlayCanvas, setOuterOverlayCanvas] = useState(null);
  const [textureCanvas, setTextureCanvas] = useState(null);
  const [texture, setTexture] = useState(null);
  const [textureCanvasClone, setTextureCanvasClone] = useState(null);
  const [textureClone, setTextureClone] = useState(null);

  const { id } = useParams();

  const userData = useContext(UserProvider.context);

  const setup = (data) => {
    setDesignSpec(data);
    setGraphicVisualCanvas(createGraphicVisualCanvas({ design: data }));
    setInnerOverlayCanvas(createCanvas({ design: data }));
    setOuterOverlayCanvas(createCanvas({ design: data }));
    setTextureCanvas(createCanvas({ design: data }));
    setTextureCanvasClone(createCanvas({ design: data }));
  };

  useEffect(() => {
    if (id) {
      simpleFetch(`/api/outlines/${id}`, 'GET')
        .then((res) => res.json())
        .then((data) => {
          setup(data);
        });
    } else {
      simpleFetch('/api/outlines/newdesign', 'GET')
        .then((res) => res.json())
        .then((data) => {
          setup(data);
        });
    }
  }, [id]);

  useEffect(() => {
    if (textureCanvas && textureCanvasClone) {
      setTexture(createTexture(textureCanvas));
      setTextureClone(createTexture(textureCanvasClone));
    }
  }, [textureCanvas, textureCanvasClone]);

  const initialized =
    designSpec &&
    graphicVisualCanvas &&
    innerOverlayCanvas &&
    outerOverlayCanvas &&
    textureCanvas &&
    texture &&
    textureClone &&
    textureCanvasClone &&
    userData;

  if (initialized) {
    return (
      <div className='designer-root-container'>
        <DesignerContainer
          designSpec={designSpec}
          graphicVisualCanvas={graphicVisualCanvas}
          innerOverlayCanvas={innerOverlayCanvas}
          outerOverlayCanvas={outerOverlayCanvas}
          texture={texture}
          textureCanvas={textureCanvas}
          textureClone={textureClone}
          textureCanvasClone={textureCanvasClone}
          userData={userData}
        />
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Designer;
