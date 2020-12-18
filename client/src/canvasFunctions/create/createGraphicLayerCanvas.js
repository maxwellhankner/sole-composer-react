export const createGraphicLayerCanvas = ({ design, layer, partName }) => {
  return new Promise((resolve) => {
    const { mask } = design.configData.partsObject[partName];
    const { link, x, y, scale, rotation } = layer;
    const { canvasSize } = design.configData;
    // Create layerCanvas to be returned
    const layerCanvas = document.createElement('canvas');
    layerCanvas.width = canvasSize;
    layerCanvas.height = canvasSize;
    const layerCanvasCTX = layerCanvas.getContext('2d');
    const graphicImg = new Image();
    graphicImg.src = `/api/assets/images/${link}`;
    graphicImg.onload = () => {
      // Get graphic's diagnal length (pythagorean)
      const graphicWidth = graphicImg.width;
      const graphicHeight = graphicImg.height;
      const graphicPythagorean = Math.round(
        Math.sqrt(graphicWidth * graphicWidth + graphicHeight * graphicHeight)
      );
      // Create Pythagorean Canvas
      const pythagoreanCanvas = document.createElement('canvas');
      pythagoreanCanvas.id = 'pythagorean-canvas';
      pythagoreanCanvas.width = graphicPythagorean;
      pythagoreanCanvas.height = graphicPythagorean;
      const pythagoreanCTX = pythagoreanCanvas.getContext('2d');

      function waitForElement() {
        if (
          pythagoreanCTX !== null &&
          typeof pythagoreanCanvas === 'object' &&
          layerCanvasCTX !== null &&
          typeof layerCanvas === 'object'
        ) {
          // Translate context to the center of the canvas
          pythagoreanCTX.translate(
            pythagoreanCanvas.width / 2,
            pythagoreanCanvas.height / 2
          );
          // Rotate context
          pythagoreanCTX.rotate((rotation * Math.PI) / 180);
          pythagoreanCTX.drawImage(
            graphicImg,
            graphicImg.width / -2,
            graphicImg.height / -2,
            graphicImg.width,
            graphicImg.height
          );
          const maskImg = new Image();
          maskImg.src = `/api/assets/images/${mask}`;
          maskImg.onload = function () {
            layerCanvasCTX.drawImage(maskImg, 0, 0, canvasSize, canvasSize);
            layerCanvasCTX.globalCompositeOperation = 'source-in';
            // Calculate new position
            const newX = x + (canvasSize - canvasSize * scale) / 2;
            const newY = y + (canvasSize - canvasSize * scale) / 2;
            const newScale = canvasSize * scale;
            // Draw graphic on layerCanvas
            layerCanvasCTX.drawImage(
              pythagoreanCanvas,
              newX,
              newY,
              newScale,
              newScale
            );
            resolve(layerCanvas);
          };
        } else {
          setTimeout(waitForElement, 100);
        }
      }
      waitForElement();
    };
  });
};
