import { partsObject } from '../../helpers/partsObject';

export const createColorLayerCanvas = (layer, partName, canvasSize) => {
    return new Promise((resolve) => {
        const { mask } = partsObject[partName];
        const { color } = layer;
        const layerCanvas = document.createElement('canvas');
        layerCanvas.width = canvasSize;
        layerCanvas.height = canvasSize;
        const layerCanvasCTX = layerCanvas.getContext('2d');
        const maskImg = new Image();
        maskImg.src = mask;
        maskImg.onload = () => {
            layerCanvasCTX.drawImage(maskImg, 0, 0, layerCanvas.width, layerCanvas.height);
            layerCanvasCTX.globalCompositeOperation = "source-in";
            layerCanvasCTX.fillStyle = color;
            layerCanvasCTX.fillRect(0, 0, canvasSize, canvasSize);
            resolve(layerCanvas);
        }
    })
};