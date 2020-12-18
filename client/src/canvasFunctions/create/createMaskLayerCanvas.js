export const createMaskLayerCanvas = ({ design, layer }) => {
  return new Promise((resolve) => {
    const { link, color } = layer;
    const { canvasSize } = design.configData;
    const layerCanvas = document.createElement('canvas');
    layerCanvas.width = canvasSize;
    layerCanvas.height = canvasSize;
    const layerCanvasCTX = layerCanvas.getContext('2d');
    const graphicImg = new Image();
    graphicImg.src = `/api/assets/images/${link}`;
    graphicImg.onload = () => {
      function waitForElement() {
        if (layerCanvasCTX !== null && typeof layerCanvas === 'object') {
          layerCanvasCTX.drawImage(graphicImg, 0, 0, canvasSize, canvasSize);
          layerCanvasCTX.globalCompositeOperation = 'source-in';
          layerCanvasCTX.fillStyle = color;
          layerCanvasCTX.fillRect(0, 0, canvasSize, canvasSize);
          resolve(layerCanvas);
        } else {
          setTimeout(waitForElement, 100);
        }
      }
      waitForElement();
    };
  });
};
