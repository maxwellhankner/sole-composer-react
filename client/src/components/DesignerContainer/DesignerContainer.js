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
  userData,
}) {
  const [design, setDesign] = useState(designSpec);
  const [camera, setCamera] = useState(null);
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
    const newCanvas = canvasObjectToTextureCanvas({
      canvasObject: canvasObjectRef.current,
      baseColorCanvasObject: baseColorCanvasObjectRef.current,
      size: textureCanvas.height,
      design,
    });
    // Canvas to Texture Canvas
    textureCanvas.getContext('2d').drawImage(newCanvas, 0, 0);
    texture.needsUpdate = true;
    // throw new Error('I crashed');
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
        const newCanvas = canvasObjectToTextureCanvas({
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
  });

  if (design && userData) {
    return (
      <div className='designer-container'>
        <Scene
          design={design}
          texture={texture}
          textureCanvas={textureCanvas}
          initialLoaded={initialLoaded}
          camera={camera}
          setCamera={setCamera}
        />
        <Interface
          design={design}
          setDesign={setDesign}
          graphicVisualCanvas={graphicVisualCanvas}
          handleUpdateGraphicVisualCanvas={handleUpdateGraphicVisualCanvas}
          handlePartChangeManager={handlePartChangeManager}
          setInitialLoaded={setInitialLoaded}
          camera={camera}
          handleUpdateBaseColor={handleUpdateBaseColor}
          userData={userData}
        />
      </div>
    );
  } else {
    return <div>hi</div>;
  }
}

export default DesignerContainer;
