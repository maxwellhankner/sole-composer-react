// turn canvasObject into a finalTexture
export const canvasObjectToTextureCanvas = ({
  canvasObject,
  baseColorCanvasObject,
  size,
  design,
}) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const finalCanvasCTX = canvas.getContext('2d');

    for (let property in canvasObject) {
      const { x, y, width, height } = design.configData.partsObject[property];
      const { divider } = design.configData;
      finalCanvasCTX.drawImage(
        baseColorCanvasObject[property],
        x / divider,
        y / divider,
        width / divider,
        height / divider
      );
      for (let layer in canvasObject[property].layers) {
        const layerCanvas = canvasObject[property].layers[layer];
        finalCanvasCTX.drawImage(
          layerCanvas,
          x / divider,
          y / divider,
          width / divider,
          height / divider
        );
      }
    }
    // return canvas;
    resolve(canvas);
  });
};
