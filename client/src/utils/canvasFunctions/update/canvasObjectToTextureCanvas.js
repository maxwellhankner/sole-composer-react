// turn canvasObject into a finalTexture
export const canvasObjectToTextureCanvas = ({
  design,
  canvasObject,
  baseColorCanvasObject,
}) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    canvas.width = design.configData.canvasSize;
    canvas.height = design.configData.canvasSize;
    const finalCanvasCTX = canvas.getContext('2d');

    function waitForElement() {
      if (typeof finalCanvasCTX !== 'undefined') {
        for (let property in canvasObject) {
          const { x, y, width, height } = design.configData.partsObject[
            property
          ];
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
        resolve(canvas);
      } else {
        setTimeout(waitForElement, 100);
      }
    }
    waitForElement();
  });
};
