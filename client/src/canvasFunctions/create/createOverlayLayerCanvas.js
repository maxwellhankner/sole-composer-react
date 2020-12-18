export const createOverlayLayerCanvas = ({
  design,
  layer,
  partName,
  overlayCanvas,
}) => {
  return new Promise((resolve) => {
    const { mask } = design.configData.partsObject[partName];
    const { source } = layer;
    const { x, y, scale, rotation } = design.configData.translations[source][
      partName
    ];
    const { canvasSize } = design.configData;
    const layerCanvas = document.createElement('canvas');
    layerCanvas.width = canvasSize;
    layerCanvas.height = canvasSize;
    const layerCanvasCTX = layerCanvas.getContext('2d');
    const maskImg = new Image();
    maskImg.src = `/api/assets/images/${mask}`;
    maskImg.onload = () => {
      function waitForElement() {
        if (layerCanvasCTX !== null && typeof layerCanvas === 'object') {
          layerCanvasCTX.drawImage(maskImg, 0, 0, canvasSize, canvasSize);
          layerCanvasCTX.globalCompositeOperation = 'source-in';
          layerCanvasCTX.translate(canvasSize * x, canvasSize * y);
          layerCanvasCTX.rotate(rotation);
          layerCanvasCTX.drawImage(
            overlayCanvas,
            0,
            0,
            canvasSize * scale,
            canvasSize * scale
          );
          resolve(layerCanvas);
        } else {
          setTimeout(waitForElement, 100);
        }
      }
      waitForElement();
    };
  });
};
