import React, { useState, useEffect, useRef } from 'react';
import './DesignerContainer.css';
import Scene from '../Scene';
import Interface from '../../components/Interface/Interface.js';
import {
  setup,
  designObjectToCanvasObject,
  updateGraphicVisualCanvas,
  partChangeManager,
  canvasObjectToTextureCanvas,
  overlayChangeManager,
} from '../../utils/canvasFunctions';

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
  redMapCanvas,
}) {
  const [design, setDesign] = useState(designSpec);
  const [texturesLoaded, setTexturesLoaded] = useState(false);
  const [currentPart, setCurrentPart] = useState(0);
  const [currentShoe, setCurrentShoe] = useState('right');
  const [currentLayer, setCurrentLayer] = useState(-1);
  const [shoeVisibility, setShoeVisibility] = useState({
    right: true,
    left: true,
  });

  const [view, setView] = useState('DesignInfo');
  const [layersView, setLayersView] = useState('LayersMain');

  const rightBaseColorCanvasObjectRef = useRef();
  const rightCanvasObjectRef = useRef();
  const rightOverlaysCanvasObjectRef = useRef();
  const leftBaseColorCanvasObjectRef = useRef();
  const leftCanvasObjectRef = useRef();
  const leftOverlaysCanvasObjectRef = useRef();

  const [cameraReset, setCameraReset] = useState(true);

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

  const handleChangeManager = (changeObject) => {
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
        setTexturesLoaded,
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

  if (design) {
    return (
      <div className="designer-container">
        <Scene
          design={design}
          setView={setView}
          setLayersView={setLayersView}
          rightTexture={rightTexture}
          leftTexture={leftTexture}
          texturesLoaded={texturesLoaded}
          setCurrentPart={setCurrentPart}
          setCurrentShoe={setCurrentShoe}
          setCurrentLayer={setCurrentLayer}
          shoeVisibility={shoeVisibility}
          redMapCanvas={redMapCanvas}
          cameraReset={cameraReset}
          setCameraReset={setCameraReset}
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
          handleChangeManager={handleChangeManager}
          handleUpdateBaseColor={handleUpdateBaseColor}
          userData={userData}
          currentPart={currentPart}
          setCurrentPart={setCurrentPart}
          currentShoe={currentShoe}
          setCurrentShoe={setCurrentShoe}
          shoeVisibility={shoeVisibility}
          setShoeVisibility={setShoeVisibility}
          setCameraReset={setCameraReset}
        />
      </div>
    );
  } else {
    return <div>hi</div>;
  }
}

export default DesignerContainer;
