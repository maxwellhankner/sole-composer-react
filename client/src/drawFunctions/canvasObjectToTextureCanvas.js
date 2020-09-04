import { partsObject } from '../helpers/partsObject';

// turn canvasObject into a finalTexture
const canvasObjectToTextureCanvas = ({canvasObject, size}) => {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const finalCanvasCTX = canvas.getContext('2d');

    for (let property in canvasObject) {
        const { x, y, width, height } = partsObject[property];
        for (let layer in canvasObject[property].layers) {
            const layerCanvas = canvasObject[property].layers[layer];
            finalCanvasCTX.drawImage(layerCanvas, x, y, width, height);
        }
    }
    return canvas;
}

export default canvasObjectToTextureCanvas;