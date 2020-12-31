import React, { useState, useEffect, useRef } from 'react';
import './DesignerContainer.css';
import Scene from '../../components/Scene/Scene.js';
import Interface from '../../components/Interface/Interface.js';
import {
  designObjectToCanvasObject,
  updateGraphicVisualCanvas,
  partChangeManager,
  overlayCanvasObjectToTextureCanvas,
  overlayChangeManager,
} from '../../canvasFunctions';
import { canvasObjectToTextureCanvas } from '../../canvasFunctions';

function DesignerContainer({
  designSpec,
  graphicVisualCanvas,
  innerOverlayCanvas,
  outerOverlayCanvas,
  texture,
  textureCanvas,
  textureClone,
  textureCanvasClone,
  userData,
}) {
  const [design, setDesign] = useState(designSpec);
  const [camera, setCamera] = useState(null);
  const [orbitControls, setOrbitControls] = useState(null);
  const [currentPart, setCurrentPart] = useState(0);
  const [currentShoe, setCurrentShoe] = useState(0);
  const [shoeVisibility, setShoeVisibility] = useState({
    right: true,
    left: true,
  });
  const [initialLoaded, setInitialLoaded] = useState(false);
  const canvasObjectRef = useRef();
  const overlaysCanvasObjectRef = useRef();
  const baseColorCanvasObjectRef = useRef();

  const handleUpdateGraphicVisualCanvas = (partName) => {
    if (partName === 'outerOverlay' || partName === 'innerOverlay') {
      updateGraphicVisualCanvas({
        design,
        graphicVisualCanvas,
        partName,
        canvasObject: overlaysCanvasObjectRef.current,
        baseColorCanvasObject: baseColorCanvasObjectRef.current,
      });
    } else {
      updateGraphicVisualCanvas({
        design,
        graphicVisualCanvas,
        partName,
        canvasObject: canvasObjectRef.current,
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
        texture,
        textureCanvas,
        graphicVisualCanvas,
        canvasObject: canvasObjectRef.current,
        overlayCanvas: outerOverlayCanvas,
        overlayCanvasObject: overlaysCanvasObjectRef.current,
        baseColorCanvasObject: baseColorCanvasObjectRef.current,
      });
    } else if (partName === 'innerOverlay') {
      overlayChangeManager({
        changeObject,
        design,
        setDesign,
        texture,
        textureCanvas,
        graphicVisualCanvas,
        canvasObject: canvasObjectRef.current,
        overlayCanvas: innerOverlayCanvas,
        overlayCanvasObject: overlaysCanvasObjectRef.current,
        baseColorCanvasObject: baseColorCanvasObjectRef.current,
      });
    } else {
      partChangeManager({
        changeObject,
        design,
        setDesign,
        texture,
        textureCanvas,
        graphicVisualCanvas,
        canvasObject: canvasObjectRef.current,
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
    const newCanvas = await canvasObjectToTextureCanvas({
      canvasObject: canvasObjectRef.current,
      baseColorCanvasObject: baseColorCanvasObjectRef.current,
      size: textureCanvas.height,
      design,
    });
    // Canvas to Texture Canvas
    textureCanvas.getContext('2d').drawImage(newCanvas, 0, 0);
    texture.needsUpdate = true;
  };

  useEffect(() => {
    if (!canvasObjectRef.current) {
      const buildTexture = async () => {
        // Overlay Canvas Object Created
        overlaysCanvasObjectRef.current = await designObjectToCanvasObject({
          design,
          type: 'overlaysCanvasObject',
        });
        // Outer Overlay Canvas Object to Texture Canvas
        overlayCanvasObjectToTextureCanvas({
          design,
          overlayCanvasObject: overlaysCanvasObjectRef.current,
          overlayCanvas: outerOverlayCanvas,
          partName: 'outerOverlay',
          graphicVisualCanvas,
        });
        // Inner Overlay Canvas Object to Texture Canvas
        overlayCanvasObjectToTextureCanvas({
          design,
          overlayCanvasObject: overlaysCanvasObjectRef.current,
          overlayCanvas: innerOverlayCanvas,
          partName: 'innerOverlay',
          graphicVisualCanvas,
        });
        // Design Object to Canvas Object
        canvasObjectRef.current = await designObjectToCanvasObject({
          design,
          type: 'partsCanvasObject',
          overlays: [outerOverlayCanvas, innerOverlayCanvas],
        });
        // baseColor to baseColor Canvas Object
        baseColorCanvasObjectRef.current = await designObjectToCanvasObject({
          design,
          type: 'baseColorCanvasObject',
        });
        // Canvas Object to Canvas
        const newCanvas = await canvasObjectToTextureCanvas({
          canvasObject: canvasObjectRef.current,
          baseColorCanvasObject: baseColorCanvasObjectRef.current,
          size: textureCanvas.height,
          design,
        });
        // Canvas to Texture Canvas
        textureCanvas.getContext('2d').drawImage(newCanvas, 0, 0);
        texture.needsUpdate = true;
        setInitialLoaded(true);
      };
      buildTexture();
    }
  }, [
    design,
    graphicVisualCanvas,
    innerOverlayCanvas,
    outerOverlayCanvas,
    texture.needsUpdate,
    textureCanvas,
  ]);

  if (design && userData) {
    return (
      <div className='designer-container'>
        <Scene
          design={design}
          texture={texture}
          textureCanvas={textureCanvas}
          textureClone={textureClone}
          textureCanvasClone={textureCanvasClone}
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
