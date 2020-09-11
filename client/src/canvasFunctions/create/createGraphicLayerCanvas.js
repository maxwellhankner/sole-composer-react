export const createGraphicLayerCanvas = ({ design, layer, partName }) => {
  return new Promise((resolve) => {
    const { mask } = design.config.partsObject[partName];
    const { link, x, y, scale, rotation } = layer;
    const { canvasSize } = design.config;
    const layerCanvas = document.createElement("canvas");
    layerCanvas.width = canvasSize;
    layerCanvas.height = canvasSize;
    const layerCanvasCTX = layerCanvas.getContext("2d");
    var graphicImg = new Image();
    graphicImg.src = link;
    graphicImg.onload = () => {
      var graphicWidth = graphicImg.width;
      var graphicHeight = graphicImg.height;
      var graphicPythagorean = Math.round(
        Math.sqrt(graphicWidth * graphicWidth + graphicHeight * graphicHeight)
      );
      // Create Pythagorean Canvas
      var pythagoreanCanvas = document.createElement("canvas");
      pythagoreanCanvas.id = "pythagorean-canvas";
      pythagoreanCanvas.width = graphicPythagorean;
      pythagoreanCanvas.height = graphicPythagorean;
      var pythagoreanTemp = pythagoreanCanvas.getContext("2d");
      pythagoreanTemp.translate(
        pythagoreanCanvas.width / 2,
        pythagoreanCanvas.height / 2
      );
      pythagoreanTemp.rotate((rotation * Math.PI) / 180);
      pythagoreanTemp.drawImage(
        graphicImg,
        -graphicImg.width / 2,
        -graphicImg.height / 2,
        graphicImg.width,
        graphicImg.height
      );
      const maskImg = new Image();
      maskImg.src = mask;
      maskImg.onload = function () {
        layerCanvasCTX.drawImage(
          maskImg,
          0,
          0,
          layerCanvasCTX.canvas.width,
          layerCanvasCTX.canvas.height
        );
        layerCanvasCTX.globalCompositeOperation = "source-in";
        layerCanvasCTX.drawImage(
          pythagoreanCanvas,
          x + (canvasSize - canvasSize * scale) / 2,
          y + (canvasSize - canvasSize * scale) / 2,
          layerCanvas.width * scale,
          layerCanvas.width * scale
        );
        layerCanvasCTX.resetTransform();
        resolve(layerCanvas);
      };
    };
  });
};
