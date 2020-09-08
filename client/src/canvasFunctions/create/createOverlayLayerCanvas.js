import { partsObject, canvasSize, translations } from '../../helpers/partsObject';

export const createOverlayLayerCanvas = (layer, partName, overlayCanvas) => {
    return new Promise((resolve) => {
        const { mask } = partsObject[partName];
        const { source } = layer;
        const { x, y, scale, rotation } = translations[source][partName];
        const layerCanvas = document.createElement('canvas');
        layerCanvas.width = canvasSize;
        layerCanvas.height = canvasSize;
        const layerCanvasCTX = layerCanvas.getContext('2d');
        const maskImg = new Image();
        maskImg.src = mask;
        maskImg.onload = () => {
            layerCanvasCTX.drawImage(maskImg, 0, 0, layerCanvas.width, layerCanvas.height);
            layerCanvasCTX.globalCompositeOperation = "source-in";
            layerCanvasCTX.translate(canvasSize * x, canvasSize * y);
            layerCanvasCTX.rotate(rotation);
            layerCanvasCTX.drawImage(overlayCanvas, 0, 0, canvasSize * scale, canvasSize * scale);
            resolve(layerCanvas);
        }
    })
};