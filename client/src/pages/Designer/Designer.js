import React, { useEffect, useState } from 'react';
import './Designer.css';
import DesignerContainer from '../../components/DesignerContainer/DesignerContainer';
import {
  createTexture,
  createCanvas,
  createGraphicVisualCanvas,
} from '../../canvasFunctions';
import { simpleFetch } from '../../helpers/fetchHelpers';
import { useParams } from 'react-router-dom';

function Designer() {
  const [designSpec, setDesignSpec] = useState(null);
  const [graphicVisualCanvas, setGraphicVisualCanvas] = useState(null);
  const [innerOverlayCanvas, setInnerOverlayCanvas] = useState(null);
  const [outerOverlayCanvas, setOuterOverlayCanvas] = useState(null);
  const [textureCanvas, setTextureCanvas] = useState(null);
  const [texture, setTexture] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      simpleFetch(`/api/outlines/${id}`, 'GET')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setDesignSpec(data);
        });
    } else {
      simpleFetch('/api/outlines/newdesign', 'GET')
        .then((res) => res.json())
        .then((data) => {
          setDesignSpec(data);
        });
    }
  }, [id]);

  useEffect(() => {
    if (designSpec) {
      setGraphicVisualCanvas(createGraphicVisualCanvas({ design: designSpec }));
      setInnerOverlayCanvas(createCanvas({ design: designSpec }));
      setOuterOverlayCanvas(createCanvas({ design: designSpec }));
      setTextureCanvas(createCanvas({ design: designSpec }));
    }
  }, [designSpec]);

  useEffect(() => {
    if (textureCanvas) {
      setTexture(createTexture(textureCanvas));
    }
  }, [textureCanvas]);

  const initialized =
    designSpec &&
    graphicVisualCanvas &&
    innerOverlayCanvas &&
    outerOverlayCanvas &&
    textureCanvas &&
    texture;

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
        />
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Designer;
