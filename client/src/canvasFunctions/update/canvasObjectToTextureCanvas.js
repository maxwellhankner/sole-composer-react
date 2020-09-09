// turn canvasObject into a finalTexture
export const canvasObjectToTextureCanvas = ({ canvasObject, size, design }) => {
    console.log('canvasObjectToTextureCanvas', canvasObject)
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const finalCanvasCTX = canvas.getContext('2d');

    for (let property in canvasObject) {
        const { x, y, width, height } = design.config.partsObject[property];
        for (let layer in canvasObject[property].layers) {
            const layerCanvas = canvasObject[property].layers[layer];
            finalCanvasCTX.drawImage(layerCanvas, x, y, width, height);
        }
    }
    return canvas;
};