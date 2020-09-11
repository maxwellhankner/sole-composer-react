// turn canvasObject into a finalTexture
export const canvasObjectToTextureCanvas = ({ canvasObject, size, design }) => {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const finalCanvasCTX = canvas.getContext('2d');

  for (let property in canvasObject) {
    const { x, y, width, height } = design.config.partsObject[property];
    const { divider } = design.config;
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
  return canvas;
};
