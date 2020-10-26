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
  initialLoaded,
  setInitialLoaded,
  camera,
  setCamera,
}) {
  const [design, setDesign] = useState(designSpec);

  const canvasObjectRef = useRef();
  const overlaysCanvasObjectRef = useRef();

  const handleUpdateGraphicVisualCanvas = (partName) => {
    if (partName === 'outerOverlay' || partName === 'innerOverlay') {
      updateGraphicVisualCanvas({
        design,
        graphicVisualCanvas,
        partName,
        canvasObject: overlaysCanvasObjectRef.current,
      });
    } else {
      updateGraphicVisualCanvas({
        design,
        graphicVisualCanvas,
        partName,
        canvasObject: canvasObjectRef.current,
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
      });
    }
  };

  useEffect(() => {
    if (!canvasObjectRef.current) {
      const buildTexture = async () => {
        overlaysCanvasObjectRef.current = await designObjectToCanvasObject({
          design,
          type: 'overlaysCanvasObject',
        });
        overlayCanvasObjectToTextureCanvas({
          design,
          overlayCanvasObject: overlaysCanvasObjectRef.current,
          overlayCanvas: outerOverlayCanvas,
          partName: 'outerOverlay',
          graphicVisualCanvas,
        });
        overlayCanvasObjectToTextureCanvas({
          design,
          overlayCanvasObject: overlaysCanvasObjectRef.current,
          overlayCanvas: innerOverlayCanvas,
          partName: 'innerOverlay',
          graphicVisualCanvas,
        });

        canvasObjectRef.current = await designObjectToCanvasObject({
          design,
          type: 'partsCanvasObject',
          overlays: [outerOverlayCanvas, innerOverlayCanvas],
        });
        const newCanvas = canvasObjectToTextureCanvas({
          canvasObject: canvasObjectRef.current,
          size: textureCanvas.height,
          design,
        });
        textureCanvas.getContext('2d').drawImage(newCanvas, 0, 0);
        texture.needsUpdate = true;
        setInitialLoaded(true);
      };
      buildTexture();
    }
  });

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
      />
    </div>
  );
}

export default DesignerContainer;
