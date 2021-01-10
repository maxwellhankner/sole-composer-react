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
  rightBaseColorCanvasObjectRef,
  leftBaseColorCanvasObjectRef,
  leftCanvasObjectRef,
  leftOverlaysCanvasObjectRef,
}) => {
  // Create Overlay Canvas Objects
  rightOverlaysCanvasObjectRef.current = await designObjectToCanvasObject({
    design,
    type: 'overlaysCanvasObject',
    currentShoe: 'right',
  });
  leftOverlaysCanvasObjectRef.current = await designObjectToCanvasObject({
    design,
    type: 'overlaysCanvasObject',
    currentShoe: 'left',
  });

  // Outer Overlay Canvas Object to Texture Canvas
  overlayCanvasObjectToTextureCanvas({
    design,
    overlayCanvasObject: rightOverlaysCanvasObjectRef.current,
    overlayCanvas: rightOuterOverlayCanvas,
    partName: 'outerOverlay',
    graphicVisualCanvas,
    currentShoe: 'right',
  });
  overlayCanvasObjectToTextureCanvas({
    design,
    overlayCanvasObject: leftOverlaysCanvasObjectRef.current,
    overlayCanvas: leftOuterOverlayCanvas,
    partName: 'outerOverlay',
    graphicVisualCanvas,
    currentShoe: 'left',
  });

  // Inner Overlay Canvas Object to Texture Canvas
  overlayCanvasObjectToTextureCanvas({
    design,
    overlayCanvasObject: rightOverlaysCanvasObjectRef.current,
    overlayCanvas: rightInnerOverlayCanvas,
    partName: 'innerOverlay',
    graphicVisualCanvas,
    currentShoe: 'right',
  });
  overlayCanvasObjectToTextureCanvas({
    design,
    overlayCanvasObject: leftOverlaysCanvasObjectRef.current,
    overlayCanvas: leftInnerOverlayCanvas,
    partName: 'innerOverlay',
    graphicVisualCanvas,
    currentShoe: 'left',
  });

  // Design Object to Canvas Object
  rightCanvasObjectRef.current = await designObjectToCanvasObject({
    design,
    type: 'partsCanvasObject',
    overlays: [rightOuterOverlayCanvas, rightInnerOverlayCanvas],
    currentShoe: 'right',
  });
  leftCanvasObjectRef.current = await designObjectToCanvasObject({
    design,
    type: 'partsCanvasObject',
    overlays: [leftOuterOverlayCanvas, leftInnerOverlayCanvas],
    currentShoe: 'left',
  });

  // baseColor to baseColor Canvas Object
  rightBaseColorCanvasObjectRef.current = await designObjectToCanvasObject({
    design,
    type: 'baseColorCanvasObject',
    currentShoe: 'right',
  });
  leftBaseColorCanvasObjectRef.current = await designObjectToCanvasObject({
    design,
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
  setInitialLoaded(true);
};
