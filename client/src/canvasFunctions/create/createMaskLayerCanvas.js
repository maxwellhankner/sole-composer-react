export const createMaskLayerCanvas = ({ design, layer, currentShoe }) => {
  return new Promise((resolve) => {
    const { link, color } = layer;
    console.log(link);
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
          if (currentShoe === 'left' && link === 'heelWingLogoMask.png') {
            layerCanvasCTX.scale(-1, 1);
            layerCanvasCTX.translate(-canvasSize, 0);
          }
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
