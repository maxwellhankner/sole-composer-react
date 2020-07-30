import * as THREE from "three";

export const createTexture = (textureCanvas) => {
    var texture = new THREE.CanvasTexture(textureCanvas);
    texture.flipY = false;

    return texture;
}

export const createCanvas = () => {
    const canvas = document.createElement("canvas")
    canvas.width = 4096;
    canvas.height = 4096;
    return canvas
}

export const createGraphicVisualCanvas = () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'graphic-visual-canvas';
    canvas.width = 4096;
    canvas.height = 4096;
    return canvas
}