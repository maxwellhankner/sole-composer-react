import {
  createColorLayerCanvas,
  createGraphicLayerCanvas,
  createOverlayLayerCanvas,
  createMaskLayerCanvas,
} from '../index';

// create canvasObject part with designObject part
const createCanvasObjectPart = async ({
  design,
  designLayers,
  partName,
  overlays,
}) => {
  const canvasLayers = [];
  // For each layer in part of design object
  for (let layer in designLayers) {
    if (designLayers[layer].type === 'color') {
      // console.log('found one');
      const thisLayer = await createColorLayerCanvas({
        design,
        layer: designLayers[layer],
        partName,
      });
      canvasLayers.push(thisLayer);
    } else if (designLayers[layer].type === 'graphic') {
      canvasLayers.push(
        await createGraphicLayerCanvas({
          design,
          layer: designLayers[layer],
          partName,
        })
      );
    } else if (designLayers[layer].type === 'mask') {
      canvasLayers.push(
        await createMaskLayerCanvas({ design, layer: designLayers[layer] })
      );
    } else if (designLayers[layer].type === 'overlay') {
      if (designLayers[layer].source === 'outerOverlay') {
        canvasLayers.push(
          await createOverlayLayerCanvas({
            design,
            layer: designLayers[layer],
            partName,
            overlayCanvas: overlays[0],
          })
        );
      } else {
        canvasLayers.push(
          await createOverlayLayerCanvas({
            design,
            layer: designLayers[layer],
            partName,
            overlayCanvas: overlays[1],
          })
        );
      }
    }
  }

  return { layers: canvasLayers };
};

// Create Base Color Canvas Object
const createBaseColorCanvasObjectPart = async ({ design, partName, shoe }) => {
  // console.log(shoe);
  const canvas = await createColorLayerCanvas({
    design,
    layer: { color: design.outlineData.baseColors[shoe] },
    partName,
  });
  return canvas;
};

// turn designObject into canvasObject
export const designObjectToCanvasObject = ({
  design,
  type,
  overlays,
  shoe,
}) => {
  return new Promise((resolve, reject) => {
    const canvasObject = {};
    const createAllParts = async () => {
      if (type === 'partsCanvasObject') {
        for (let partName in design.outlineData.parts) {
          canvasObject[partName] = await createCanvasObjectPart({
            design,
            designLayers: design.outlineData.parts[partName][shoe],
            partName,
            overlays,
          });
        }
      } else if (type === 'overlaysCanvasObject') {
        for (let partName in design.outlineData.overlays) {
          canvasObject[partName] = await createCanvasObjectPart({
            design,
            designLayers: design.outlineData.overlays[partName][shoe],
            partName,
          });
        }
      } else if (type === 'baseColorCanvasObject') {
        for (let partName in design.outlineData.parts) {
          canvasObject[partName] = await createBaseColorCanvasObjectPart({
            design,
            partName,
            shoe,
          });
        }
      }
      resolve(canvasObject);
    };
    createAllParts();
  });
};

export const overlayCanvasObjectToTextureCanvas = ({
  design,
  overlayCanvasObject,
  overlayCanvas,
  partName,
  graphicVisualCanvas,
}) => {
  const { canvasSize } = design.configData;
  const overlayCanvasCTX = overlayCanvas.getContext('2d');
  const graphicCTX = graphicVisualCanvas.getContext('2d');
  graphicCTX.clearRect(0, 0, canvasSize, canvasSize);
  overlayCanvasCTX.clearRect(0, 0, canvasSize, canvasSize);
  for (let layer in overlayCanvasObject[partName].layers) {
    const layerCanvas = overlayCanvasObject[partName].layers[layer];
    overlayCanvasCTX.drawImage(layerCanvas, 0, 0, canvasSize, canvasSize);
    graphicCTX.drawImage(layerCanvas, 0, 0, canvasSize, canvasSize);
  }
};

// update graphicVisualCanvas
export const updateGraphicVisualCanvas = ({
  design,
  graphicVisualCanvas,
  partName,
  canvasObject,
  baseColorCanvasObject,
}) => {
  const { canvasSize } = design.configData;
  const graphicCTX = graphicVisualCanvas.getContext('2d');
  graphicCTX.clearRect(0, 0, canvasSize, canvasSize);
  if (baseColorCanvasObject[partName]) {
    const baseColorCanvas = baseColorCanvasObject[partName];
    graphicCTX.drawImage(baseColorCanvas, 0, 0, canvasSize, canvasSize);
  }

  for (let layer in canvasObject[partName].layers) {
    const layerCanvas = canvasObject[partName].layers[layer];
    graphicCTX.drawImage(layerCanvas, 0, 0, canvasSize, canvasSize);
  }
};
