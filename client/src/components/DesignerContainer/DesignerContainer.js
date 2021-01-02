import React, { useState, useEffect, useRef } from 'react';
import './DesignerContainer.css';
import Scene from '../../components/Scene/Scene.js';
import Interface from '../../components/Interface/Interface.js';
import {
  setup,
  designObjectToCanvasObject,
  updateGraphicVisualCanvas,
  partChangeManager,
  canvasObjectToTextureCanvas,
  overlayChangeManager,
} from '../../canvasFunctions';

function DesignerContainer({
  userData,
  designSpec,
  graphicVisualCanvas,
  rightInnerOverlayCanvas,
  rightOuterOverlayCanvas,
  rightTexture,
  rightTextureCanvas,
  leftInnerOverlayCanvas,
  leftOuterOverlayCanvas,
  leftTexture,
  leftTextureCanvas,
}) {
  const [design, setDesign] = useState(designSpec);
  const [initialLoaded, setInitialLoaded] = useState(false);
  const [camera, setCamera] = useState(null);
  const [orbitControls, setOrbitControls] = useState(null);
  const [currentPart, setCurrentPart] = useState(0);
  const [currentShoe, setCurrentShoe] = useState(0);
  const [shoeVisibility, setShoeVisibility] = useState({
    right: true,
    left: true,
  });

  const baseColorCanvasObjectRef = useRef();
  const rightCanvasObjectRef = useRef();
  const rightOverlaysCanvasObjectRef = useRef();
  const leftCanvasObjectRef = useRef();
  const leftOverlaysCanvasObjectRef = useRef();

  const handleUpdateGraphicVisualCanvas = (partName) => {
    if (partName === 'outerOverlay' || partName === 'innerOverlay') {
      updateGraphicVisualCanvas({
        design,
        graphicVisualCanvas,
        partName,
        canvasObject: rightOverlaysCanvasObjectRef.current,
        baseColorCanvasObject: baseColorCanvasObjectRef.current,
      });
    } else {
      updateGraphicVisualCanvas({
        design,
        graphicVisualCanvas,
        partName,
        canvasObject: rightCanvasObjectRef.current,
        baseColorCanvasObject: baseColorCanvasObjectRef.current,
      });
    }
  };

  const handlePartChangeManager = (changeObject) => {
    const { partName } = changeObject;
    if (partName === 'outerOverlay') {
      overlayChangeManager({
        changeObject,
        design,
        setDesign,
        texture: rightTexture,
        textureCanvas: rightTextureCanvas,
        graphicVisualCanvas,
        canvasObject: rightCanvasObjectRef.current,
        overlayCanvas: rightOuterOverlayCanvas,
        overlayCanvasObject: rightOverlaysCanvasObjectRef.current,
        baseColorCanvasObject: baseColorCanvasObjectRef.current,
      });
    } else if (partName === 'innerOverlay') {
      overlayChangeManager({
        changeObject,
        design,
        setDesign,
        texture: rightTexture,
        textureCanvas: rightTextureCanvas,
        graphicVisualCanvas,
        canvasObject: rightCanvasObjectRef.current,
        overlayCanvas: rightInnerOverlayCanvas,
        overlayCanvasObject: rightOverlaysCanvasObjectRef.current,
        baseColorCanvasObject: baseColorCanvasObjectRef.current,
      });
    } else {
      partChangeManager({
        changeObject,
        design,
        setDesign,
        texture: rightTexture,
        textureCanvas: rightTextureCanvas,
        graphicVisualCanvas,
        canvasObject: rightCanvasObjectRef.current,
        baseColorCanvasObject: baseColorCanvasObjectRef.current,
      });
    }
  };

  const handleUpdateBaseColor = async (tempDesign) => {
    // baseColor to baseColor Canvas Object
    baseColorCanvasObjectRef.current = await designObjectToCanvasObject({
      design: tempDesign,
      type: 'baseColorCanvasObject',
    });
    // Canvas Object to Canvas
    const rightCanvas = await canvasObjectToTextureCanvas({
      design,
      canvasObject: rightCanvasObjectRef.current,
      baseColorCanvasObject: baseColorCanvasObjectRef.current,
    });
    const leftCanvas = await canvasObjectToTextureCanvas({
      design,
      canvasObject: leftCanvasObjectRef.current,
      baseColorCanvasObject: baseColorCanvasObjectRef.current,
    });
    // Canvas to Texture Canvas
    rightTextureCanvas.getContext('2d').drawImage(rightCanvas, 0, 0);
    rightTexture.needsUpdate = true;
    leftTextureCanvas.getContext('2d').drawImage(leftCanvas, 0, 0);
    leftTexture.needsUpdate = true;
  };

  useEffect(() => {
    if (!rightCanvasObjectRef.current || !leftCanvasObjectRef.current) {
      setup({
        setInitialLoaded,
        design,
        graphicVisualCanvas,
        baseColorCanvasObjectRef,
        rightInnerOverlayCanvas,
        rightOuterOverlayCanvas,
        rightTexture,
        rightTextureCanvas,
        rightCanvasObjectRef,
        rightOverlaysCanvasObjectRef,
        leftInnerOverlayCanvas,
        leftOuterOverlayCanvas,
        leftTexture,
        leftTextureCanvas,
        leftCanvasObjectRef,
        leftOverlaysCanvasObjectRef,
      });
    }
  }, [
    design,
    graphicVisualCanvas,
    rightInnerOverlayCanvas,
    rightOuterOverlayCanvas,
    rightTexture,
    rightTextureCanvas,
    leftInnerOverlayCanvas,
    leftOuterOverlayCanvas,
    leftTexture,
    leftTextureCanvas,
  ]);

  if (design && userData) {
    return (
      <div className='designer-container'>
        <Scene
          design={design}
          rightTexture={rightTexture}
          leftTexture={leftTexture}
          initialLoaded={initialLoaded}
          camera={camera}
          setCamera={setCamera}
          orbitControls={orbitControls}
          setOrbitControls={setOrbitControls}
          setCurrentPart={setCurrentPart}
        />
        <Interface
          design={design}
          setDesign={setDesign}
          graphicVisualCanvas={graphicVisualCanvas}
          handleUpdateGraphicVisualCanvas={handleUpdateGraphicVisualCanvas}
          handlePartChangeManager={handlePartChangeManager}
          setInitialLoaded={setInitialLoaded}
          camera={camera}
          orbitControls={orbitControls}
          handleUpdateBaseColor={handleUpdateBaseColor}
          userData={userData}
          currentPart={currentPart}
          setCurrentPart={setCurrentPart}
          currentShoe={currentShoe}
          setCurrentShoe={setCurrentShoe}
          shoeVisibility={shoeVisibility}
          setShoeVisibility={setShoeVisibility}
        />
      </div>
    );
  } else {
    return <div>hi</div>;
  }
}

export default DesignerContainer;
