import { canvasSize } from '../../helpers/partsObject';

export const createMaskLayerCanvas = (layer, partName) => {
    return new Promise((resolve) => {
        const { link, color } = layer;
        const layerCanvas = document.createElement('canvas');
        layerCanvas.width = canvasSize;
        layerCanvas.height = canvasSize;
        const layerCanvasCTX = layerCanvas.getContext('2d');
        var graphicImg = new Image();
        graphicImg.src = link;
        graphicImg.onload = () => {
            layerCanvasCTX.drawImage(graphicImg, 0, 0, canvasSize, canvasSize);
            layerCanvasCTX.globalCompositeOperation = "source-in";
            layerCanvasCTX.fillStyle = color;
            layerCanvasCTX.fillRect(0, 0, canvasSize, canvasSize);
            resolve(layerCanvas);
        }
    })
};