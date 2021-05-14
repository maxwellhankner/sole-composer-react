import React, { useEffect, useState, useContext } from 'react';
import DesignerContainer from '../../components/DesignerContainer';
import {
  createTexture,
  createCanvas,
  createRedMapCanvas,
  createGraphicVisualCanvas,
} from '../../utils/canvasFunctions';
import { simpleFetch } from '../../utils/fetchHelpers';
import { useParams } from 'react-router-dom';
import UserProvider from '../../UserProvider';

function Designer() {
  const { id } = useParams();
  const userData = useContext(UserProvider.context);

  const [designSpec, setDesignSpec] = useState(null);
  const [graphicVisualCanvas, setGraphicVisualCanvas] = useState(null);

  const [rightInnerOverlayCanvas, setRightInnerOverlayCanvas] = useState(null);
  const [rightOuterOverlayCanvas, setRightOuterOverlayCanvas] = useState(null);
  const [rightTextureCanvas, setRightTextureCanvas] = useState(null);
  const [rightTexture, setRightTexture] = useState(null);

  const [leftInnerOverlayCanvas, setLeftInnerOverlayCanvas] = useState(null);
  const [leftOuterOverlayCanvas, setLeftOuterOverlayCanvas] = useState(null);
  const [leftTextureCanvas, setLeftTextureCanvas] = useState(null);
  const [leftTexture, setLeftTexture] = useState(null);

  const [redMapCanvas, setRedMapCanvas] = useState(null);

  const setup = async (data) => {
    setDesignSpec(data);
    setGraphicVisualCanvas(createGraphicVisualCanvas({ design: data }));
    const canvasOne = await createCanvas({ design: data });
    setRightInnerOverlayCanvas(canvasOne);
    const canvasTwo = await createCanvas({ design: data });
    setRightOuterOverlayCanvas(canvasTwo);
    const canvasThree = await createCanvas({ design: data });
    setRightTextureCanvas(canvasThree);

    const canvasFour = await createCanvas({ design: data });
    setLeftInnerOverlayCanvas(canvasFour);
    const canvasFive = await createCanvas({ design: data });
    setLeftOuterOverlayCanvas(canvasFive);
    const canvasSix = await createCanvas({ design: data });
    setLeftTextureCanvas(canvasSix);

    const canvasSeven = await createRedMapCanvas({ design: data });
    setRedMapCanvas(canvasSeven);
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
    if (rightTextureCanvas && leftTextureCanvas) {
      setRightTexture(createTexture(rightTextureCanvas));
      setLeftTexture(createTexture(leftTextureCanvas));
    }
  }, [rightTextureCanvas, leftTextureCanvas]);

  const initialized =
    designSpec &&
    graphicVisualCanvas &&
    rightInnerOverlayCanvas &&
    rightOuterOverlayCanvas &&
    rightTextureCanvas &&
    rightTexture &&
    leftInnerOverlayCanvas &&
    leftOuterOverlayCanvas &&
    leftTextureCanvas &&
    leftTexture &&
    redMapCanvas;

  if (initialized) {
    return (
      <DesignerContainer
        userData={userData}
        designSpec={designSpec}
        graphicVisualCanvas={graphicVisualCanvas}
        rightInnerOverlayCanvas={rightInnerOverlayCanvas}
        rightOuterOverlayCanvas={rightOuterOverlayCanvas}
        rightTexture={rightTexture}
        rightTextureCanvas={rightTextureCanvas}
        leftInnerOverlayCanvas={leftInnerOverlayCanvas}
        leftOuterOverlayCanvas={leftOuterOverlayCanvas}
        leftTexture={leftTexture}
        leftTextureCanvas={leftTextureCanvas}
        redMapCanvas={redMapCanvas}
      />
    );
  } else {
    return <div></div>;
  }
}

export default Designer;
