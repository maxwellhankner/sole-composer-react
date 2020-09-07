import * as THREE from "three";
import { canvasSize } from '../../helpers/partsObject';

export const createTexture = (textureCanvas) => {
    var texture = new THREE.CanvasTexture(textureCanvas);
    texture.flipY = false;
    return texture;
}

export const createCanvas = () => {
    const canvas = document.createElement("canvas");
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    const canvasCTX = canvas.getContext('2d');
    canvasCTX.fillStyle = '#ffffff';
    canvasCTX.fillRect(0, 0, canvasSize, canvasSize);
    return canvas;
}

export const createGraphicVisualCanvas = () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'graphic-visual-canvas';
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    return canvas;
}