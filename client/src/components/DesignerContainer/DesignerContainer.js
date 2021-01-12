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
  const [currentShoe, setCurrentShoe] = useState('right');
  const [currentLayer, setCurrentLayer] = useState(-1);
  const [shoeVisibility, setShoeVisibility] = useState({
    right: true,
    left: true,
  });

  const [view, setView] = useState('DesignPreview');
  const [layersView, setLayersView] = useState('LayerOverview');

  const rightBaseColorCanvasObjectRef = useRef();
  const rightCanvasObjectRef = useRef();
  const rightOverlaysCanvasObjectRef = useRef();
  const leftBaseColorCanvasObjectRef = useRef();
  const leftCanvasObjectRef = useRef();
  const leftOverlaysCanvasObjectRef = useRef();

  const handleUpdateGraphicVisualCanvas = (partName) => {
    if (partName === 'outerOverlay' || partName === 'innerOverlay') {
      if (currentShoe === 'right') {
        updateGraphicVisualCanvas({
          design,
          graphicVisualCanvas,
          partName,
          canvasObject: rightOverlaysCanvasObjectRef.current,
          baseColorCanvasObject: rightBaseColorCanvasObjectRef.current,
          currentShoe,
        });
      } else {
        updateGraphicVisualCanvas({
          design,
          graphicVisualCanvas,
          partName,
          canvasObject: leftOverlaysCanvasObjectRef.current,
          baseColorCanvasObject: leftBaseColorCanvasObjectRef.current,
          currentShoe,
        });
      }
    } else {
      if (currentShoe === 'right') {
        updateGraphicVisualCanvas({
          design,
          graphicVisualCanvas,
          partName,
          canvasObject: rightCanvasObjectRef.current,
          baseColorCanvasObject: rightBaseColorCanvasObjectRef.current,
          currentShoe,
        });
      } else {
        updateGraphicVisualCanvas({
          design,
          graphicVisualCanvas,
          partName,
          canvasObject: leftCanvasObjectRef.current,
          baseColorCanvasObject: leftBaseColorCanvasObjectRef.current,
          currentShoe,
        });
      }
    }
  };

  const handlePartChangeManager = (changeObject) => {
    const { partName } = changeObject;
    if (partName === 'outerOverlay') {
      overlayChangeManager({
        changeObject,
        design,
        setDesign,
        texture: currentShoe === 'right' ? rightTexture : leftTexture,
        textureCanvas:
          currentShoe === 'right' ? rightTextureCanvas : leftTextureCanvas,
        graphicVisualCanvas,
        canvasObject:
          currentShoe === 'right'
            ? rightCanvasObjectRef.current
            : leftCanvasObjectRef.current,
        overlayCanvas:
          currentShoe === 'right'
            ? rightOuterOverlayCanvas
            : leftOuterOverlayCanvas,
        overlayCanvasObject:
          currentShoe === 'right'
            ? rightOverlaysCanvasObjectRef.current
            : leftOverlaysCanvasObjectRef.current,
        baseColorCanvasObject:
          currentShoe === 'right'
            ? rightBaseColorCanvasObjectRef.current
            : leftBaseColorCanvasObjectRef.current,
        currentShoe,
      });
    } else if (partName === 'innerOverlay') {
      overlayChangeManager({
        changeObject,
        design,
        setDesign,
        texture: currentShoe === 'right' ? rightTexture : leftTexture,
        textureCanvas:
          currentShoe === 'right' ? rightTextureCanvas : leftTextureCanvas,
        graphicVisualCanvas,
        canvasObject:
          currentShoe === 'right'
            ? rightCanvasObjectRef.current
            : leftCanvasObjectRef.current,
        overlayCanvas:
          currentShoe === 'right'
            ? rightInnerOverlayCanvas
            : leftInnerOverlayCanvas,
        overlayCanvasObject:
          currentShoe === 'right'
            ? rightOverlaysCanvasObjectRef.current
            : leftOverlaysCanvasObjectRef.current,
        baseColorCanvasObject:
          currentShoe === 'right'
            ? rightBaseColorCanvasObjectRef.current
            : leftBaseColorCanvasObjectRef.current,
        currentShoe,
      });
    } else {
      partChangeManager({
        changeObject,
        design,
        setDesign,
        texture: currentShoe === 'right' ? rightTexture : leftTexture,
        textureCanvas:
          currentShoe === 'right' ? rightTextureCanvas : leftTextureCanvas,
        graphicVisualCanvas,
        canvasObject:
          currentShoe === 'right'
            ? rightCanvasObjectRef.current
            : leftCanvasObjectRef.current,
        baseColorCanvasObject:
          currentShoe === 'right'
            ? rightBaseColorCanvasObjectRef.current
            : leftBaseColorCanvasObjectRef.current,
        currentShoe,
      });
    }
  };

  const handleUpdateBaseColor = async (tempDesign) => {
    // baseColor to baseColor Canvas Object
    rightBaseColorCanvasObjectRef.current = await designObjectToCanvasObject({
      design: tempDesign,
      type: 'baseColorCanvasObject',
      currentShoe: 'right',
    });
    leftBaseColorCanvasObjectRef.current = await designObjectToCanvasObject({
      design: tempDesign,
      type: 'baseColorCanvasObject',
      currentShoe: 'left',
    });
    // Canvas Object to Canvas
    const rightCanvas = await canvasObjectToTextureCanvas({
      design,
      canvasObject: rightCanvasObjectRef.current,
      baseColorCanvasObject: rightBaseColorCanvasObjectRef.current,
    });
    const leftCanvas = await canvasObjectToTextureCanvas({
      design,
      canvasObject: leftCanvasObjectRef.current,
      baseColorCanvasObject: leftBaseColorCanvasObjectRef.current,
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
        rightBaseColorCanvasObjectRef,
        rightInnerOverlayCanvas,
        rightOuterOverlayCanvas,
        rightTexture,
        rightTextureCanvas,
        rightCanvasObjectRef,
        rightOverlaysCanvasObjectRef,
        leftBaseColorCanvasObjectRef,
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
          setView={setView}
          setLayersView={setLayersView}
          rightTexture={rightTexture}
          leftTexture={leftTexture}
          initialLoaded={initialLoaded}
          camera={camera}
          setCamera={setCamera}
          orbitControls={orbitControls}
          setOrbitControls={setOrbitControls}
          setCurrentPart={setCurrentPart}
          setCurrentShoe={setCurrentShoe}
          setCurrentLayer={setCurrentLayer}
          shoeVisibility={shoeVisibility}
        />
        <Interface
          design={design}
          setDesign={setDesign}
          view={view}
          setView={setView}
          currentLayer={currentLayer}
          setCurrentLayer={setCurrentLayer}
          layersView={layersView}
          setLayersView={setLayersView}
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
