import {
  designObjectToCanvasObject,
  overlayCanvasObjectToTextureCanvas,
  canvasObjectToTextureCanvas,
} from '../index';

export const setup = async ({
  setInitialLoaded,
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
  rightCanvasObjectRef,
  rightOverlaysCanvasObjectRef,
  baseColorCanvasObjectRef,
  leftCanvasObjectRef,
  leftOverlaysCanvasObjectRef,
}) => {
  // Overlay Canvas Object Created
  rightOverlaysCanvasObjectRef.current = await designObjectToCanvasObject({
    design,
    type: 'overlaysCanvasObject',
  });
  leftOverlaysCanvasObjectRef.current = await designObjectToCanvasObject({
    design,
    type: 'overlaysCanvasObject',
  });

  // Outer Overlay Canvas Object to Texture Canvas
  overlayCanvasObjectToTextureCanvas({
    design,
    overlayCanvasObject: rightOverlaysCanvasObjectRef.current,
    overlayCanvas: rightOuterOverlayCanvas,
    partName: 'outerOverlay',
    graphicVisualCanvas,
  });
  overlayCanvasObjectToTextureCanvas({
    design,
    overlayCanvasObject: leftOverlaysCanvasObjectRef.current,
    overlayCanvas: leftOuterOverlayCanvas,
    partName: 'outerOverlay',
    graphicVisualCanvas,
  });

  // Inner Overlay Canvas Object to Texture Canvas
  overlayCanvasObjectToTextureCanvas({
    design,
    overlayCanvasObject: rightOverlaysCanvasObjectRef.current,
    overlayCanvas: rightInnerOverlayCanvas,
    partName: 'innerOverlay',
    graphicVisualCanvas,
  });
  overlayCanvasObjectToTextureCanvas({
    design,
    overlayCanvasObject: leftOverlaysCanvasObjectRef.current,
    overlayCanvas: leftInnerOverlayCanvas,
    partName: 'innerOverlay',
    graphicVisualCanvas,
  });

  // Design Object to Canvas Object
  rightCanvasObjectRef.current = await designObjectToCanvasObject({
    design,
    type: 'partsCanvasObject',
    overlays: [rightOuterOverlayCanvas, rightInnerOverlayCanvas],
  });
  leftCanvasObjectRef.current = await designObjectToCanvasObject({
    design,
    type: 'partsCanvasObject',
    overlays: [leftOuterOverlayCanvas, leftInnerOverlayCanvas],
  });

  // baseColor to baseColor Canvas Object
  baseColorCanvasObjectRef.current = await designObjectToCanvasObject({
    design,
    type: 'baseColorCanvasObject',
  });
  baseColorCanvasObjectRef.current = await designObjectToCanvasObject({
    design,
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
  setInitialLoaded(true);
};
