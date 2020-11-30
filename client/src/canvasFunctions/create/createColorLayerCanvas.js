export const createColorLayerCanvas = ({ design, layer, partName }) => {
  return new Promise((resolve) => {
    let { mask } = design.configData.partsObject[partName];
    const { color } = layer;
    const { canvasSize } = design.configData;
    const layerCanvas = document.createElement('canvas');
    layerCanvas.width = canvasSize;
    layerCanvas.height = canvasSize;
    const layerCanvasCTX = layerCanvas.getContext('2d');
    // function waitForElement() {
    //   if (typeof finalCanvasCTX !== 'undefined') {
    const maskImg = new Image();
    maskImg.src = `/api/assets/images/${mask}`;
    maskImg.onload = () => {
      layerCanvasCTX.drawImage(maskImg, 0, 0, canvasSize, canvasSize);
      layerCanvasCTX.globalCompositeOperation = 'source-in';
      layerCanvasCTX.fillStyle = color;
      layerCanvasCTX.fillRect(0, 0, canvasSize, canvasSize);
      resolve(layerCanvas);
    };
    //   } else {
    //     setTimeout(waitForElement, 250);
    //   }
    // }
    // waitForElement();
  });
};
