import * as THREE from "three";

export const createTexture = (textureCanvas) => {
    var texture = new THREE.CanvasTexture(textureCanvas);
    texture.flipY = false;

    return texture;
}

export const createCanvas = () => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = 4096;
    ctx.canvas.height = 4096;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    return canvas
}

export const createGraphicVisualCanvas = () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'graphic-visual-canvas';
    canvas.width = 4096;
    canvas.height = 4096;
    return canvas
}