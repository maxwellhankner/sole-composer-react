import * as THREE from 'three';

export const createTexture = (textureCanvas) => {
  const texture = new THREE.CanvasTexture(textureCanvas);
  texture.flipY = false;
  return texture;
};

export const createCanvas = ({ design }) => {
  const { canvasSize } = design.configData;
  // const { baseColor } = design.outlineData;
  const canvas = document.createElement('canvas');
  canvas.width = canvasSize;
  canvas.height = canvasSize;
  const canvasCTX = canvas.getContext('2d');
  canvasCTX.fillStyle = '#ffffff';
  canvasCTX.fillRect(0, 0, canvasSize, canvasSize);
  return canvas;
};

export const createGraphicVisualCanvas = ({ design }) => {
  const { canvasSize } = design.configData;
  const canvas = document.createElement('canvas');
  canvas.id = 'graphic-visual-canvas';
  canvas.width = canvasSize;
  canvas.height = canvasSize;
  return canvas;
};
