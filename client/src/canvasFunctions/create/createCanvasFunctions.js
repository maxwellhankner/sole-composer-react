import * as THREE from 'three';

export const createTexture = (textureCanvas) => {
  const texture = new THREE.CanvasTexture(textureCanvas);
  texture.flipY = false;
  return texture;
};

export const createCanvas = ({ design }) => {
  return new Promise((resolve) => {
    const { canvasSize } = design.configData;
    const canvas = document.createElement('canvas');
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    const canvasCTX = canvas.getContext('2d');

    function waitForElement() {
      if (canvasCTX !== null && typeof canvas === 'object') {
        canvasCTX.fillStyle = '#ffffff';
        canvasCTX.fillRect(0, 0, canvasSize, canvasSize);
        resolve(canvas);
      } else {
        setTimeout(waitForElement, 100);
      }
    }
    waitForElement();
  });
};

export const createGraphicVisualCanvas = ({ design }) => {
  const { canvasSize } = design.configData;
  const canvas = document.createElement('canvas');
  canvas.id = 'graphic-visual-canvas';
  canvas.width = canvasSize;
  canvas.height = canvasSize;
  return canvas;
};
