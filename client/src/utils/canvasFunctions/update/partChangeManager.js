import { cloneDeep } from 'lodash';
import {
  createColorLayerCanvas,
  createGraphicLayerCanvas,
  createMaskLayerCanvas,
} from '../index';

//------------------------------------------- Part Change Functions
export const partChangeManager = ({
  changeObject,
  design,
  setDesign,
  texture,
  textureCanvas,
  graphicVisualCanvas,
  canvasObject,
  baseColorCanvasObject,
  currentShoe,
}) => {
  const { type, fileName } = changeObject;
  const tempDesign = cloneDeep(design);
  if (type === 'graphic-moved') {
    const { partName, layerIndex, direction, distance } = changeObject;
    const thisLayer =
      tempDesign.outlineData.parts[partName][currentShoe][layerIndex];
    if (direction === 'vert') {
      thisLayer.y += distance;
    } else if (direction === 'hor') {
      thisLayer.x += distance;
    } else if (direction === 'scale') {
      thisLayer.scale *= distance;
    } else if (direction === 'rotate') {
      thisLayer.rotation += distance;
    } else if (direction === 'reset') {
      thisLayer.y = 0;
      thisLayer.x = 0;
      thisLayer.scale = 1;
      thisLayer.rotation = 0;
    }

    setDesign(tempDesign);
    updateLayer({
      partName,
      layerIndex,
      layerObject: thisLayer,
      canvasObject,
      textureCanvas,
      texture,
      graphicVisualCanvas,
      design,
      baseColorCanvasObject,
      currentShoe,
    });
  } else if (type === 'color-changed') {
    const { partName, layerIndex, newColor } = changeObject;
    let thisLayer;
    if (partName === 'outerOverlay' || partName === 'innerOverlay') {
      thisLayer = tempDesign.outlineData.overlays[partName].layers[layerIndex];
    } else {
      thisLayer =
        tempDesign.outlineData.parts[partName][currentShoe][layerIndex];
    }

    thisLayer.color = newColor;
    setDesign(tempDesign);
    updateLayer({
      partName,
      layerIndex,
      layerObject: thisLayer,
      canvasObject,
      textureCanvas,
      texture,
      graphicVisualCanvas,
      design,
      baseColorCanvasObject,
      currentShoe,
    });
  } else if (type === 'layer-added') {
    const { partName, layerType } = changeObject;
    if (layerType === 'Color') {
      tempDesign.outlineData.parts[partName][currentShoe].push({
        type: 'color',
        color: '#777777',
      });
    } else if (layerType === 'Graphic') {
      tempDesign.outlineData.parts[partName][currentShoe].push({
        type: 'graphic',
        link: fileName,
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
      });
    } else {
      const { maskLink } = changeObject;
      tempDesign.outlineData.parts[partName][currentShoe].push({
        type: 'mask',
        link: maskLink,
        color: '#000000',
      });
    }

    setDesign(tempDesign);
    const layerObject = tempDesign.outlineData.parts[partName][
      currentShoe
    ].slice(-1)[0];
    addLayerToCanvasObject({
      canvasObject,
      graphicVisualCanvas,
      layerObject,
      partName,
      texture,
      textureCanvas,
      design,
      baseColorCanvasObject,
      currentShoe,
    });
  } else if (type === 'layer-moved') {
    const { partName, layerIndex, direction } = changeObject;
    let array = tempDesign.outlineData.parts[partName][currentShoe];
    let tempElement = array[layerIndex];
    array[layerIndex] = array[layerIndex + direction];
    array[layerIndex + direction] = tempElement;
    tempDesign.outlineData.parts[partName].layers = array;

    setDesign(tempDesign);
    moveLayerInCanvasObject({
      canvasObject,
      partName,
      layerIndex,
      direction,
      textureCanvas,
      texture,
      graphicVisualCanvas,
      design,
      baseColorCanvasObject,
      currentShoe,
    });
  } else if (type === 'layer-deleted') {
    const { partName, layerIndex } = changeObject;
    tempDesign.outlineData.parts[partName][currentShoe].splice(layerIndex, 1);

    setDesign(tempDesign);
    deleteLayerFromCanvasObject({
      canvasObject,
      partName,
      layerIndex,
      textureCanvas,
      texture,
      graphicVisualCanvas,
      design,
      baseColorCanvasObject,
      currentShoe,
    });
  }
};

const updateLayer = async ({
  partName,
  layerIndex,
  layerObject,
  canvasObject,
  textureCanvas,
  texture,
  graphicVisualCanvas,
  design,
  baseColorCanvasObject,
  currentShoe,
}) => {
  // update canvasObject layer
  let layerCanvas;
  if (layerObject.type === 'color') {
    layerCanvas = await createColorLayerCanvas({
      design,
      layer: layerObject,
      partName: partName,
    });
  } else if (layerObject.type === 'graphic') {
    layerCanvas = await createGraphicLayerCanvas({
      design,
      layer: layerObject,
      partName: partName,
      currentShoe,
    });
  } else {
    layerCanvas = await createMaskLayerCanvas({
      design,
      layer: layerObject,
      currentShoe,
    });
  }
  canvasObject[partName].layers[layerIndex] = layerCanvas;
  // redraw part
  redrawCanvasObjectPart({
    textureCanvas,
    canvasObjectPart: canvasObject[partName],
    partName,
    texture,
    graphicVisualCanvas,
    design,
    baseColorCanvasObject,
  });
};

const addLayerToCanvasObject = async ({
  canvasObject,
  graphicVisualCanvas,
  layerObject,
  partName,
  texture,
  textureCanvas,
  design,
  baseColorCanvasObject,
  currentShoe,
}) => {
  if (layerObject.type === 'color') {
    const newLayerCanvas = await createColorLayerCanvas({
      design,
      layer: layerObject,
      partName,
    });
    canvasObject[partName].layers.push(newLayerCanvas);
  } else if (layerObject.type === 'graphic') {
    const newLayerCanvas = await createGraphicLayerCanvas({
      design,
      layer: layerObject,
      partName,
      currentShoe,
    });
    canvasObject[partName].layers.push(newLayerCanvas);
  } else {
    const newLayerCanvas = await createMaskLayerCanvas({
      design,
      layer: layerObject,
      currentShoe,
    });
    canvasObject[partName].layers.push(newLayerCanvas);
  }
  redrawCanvasObjectPart({
    textureCanvas,
    canvasObjectPart: canvasObject[partName],
    partName,
    texture,
    graphicVisualCanvas,
    design,
    baseColorCanvasObject,
  });
};

const deleteLayerFromCanvasObject = ({
  canvasObject,
  partName,
  layerIndex,
  textureCanvas,
  texture,
  graphicVisualCanvas,
  design,
  baseColorCanvasObject,
}) => {
  canvasObject[partName].layers.splice(layerIndex, 1);
  redrawCanvasObjectPart({
    textureCanvas,
    canvasObjectPart: canvasObject[partName],
    partName,
    texture,
    graphicVisualCanvas,
    design,
    baseColorCanvasObject,
  });
};

const moveLayerInCanvasObject = ({
  canvasObject,
  partName,
  layerIndex,
  direction,
  textureCanvas,
  texture,
  graphicVisualCanvas,
  design,
  baseColorCanvasObject,
}) => {
  let array = canvasObject[partName].layers;
  let tempElement = array[layerIndex];
  array[layerIndex] = array[layerIndex + direction];
  array[layerIndex + direction] = tempElement;
  canvasObject[partName].layers = array;
  redrawCanvasObjectPart({
    textureCanvas,
    canvasObjectPart: canvasObject[partName],
    partName,
    texture,
    graphicVisualCanvas,
    design,
    baseColorCanvasObject,
  });
};

const redrawCanvasObjectPart = ({
  textureCanvas,
  canvasObjectPart,
  partName,
  texture,
  graphicVisualCanvas,
  design,
  baseColorCanvasObject,
}) => {
  const textureCanvasCTX = textureCanvas.getContext('2d');
  const graphicCTX = graphicVisualCanvas.getContext('2d');
  graphicCTX.clearRect(
    0,
    0,
    design.configData.canvasSize,
    design.configData.canvasSize
  );
  const { x, y, width, height } = design.configData.partsObject[partName];
  const { divider } = design.configData;
  textureCanvasCTX.drawImage(
    baseColorCanvasObject[partName],
    x / divider,
    y / divider,
    width / divider,
    height / divider
  );
  graphicCTX.drawImage(
    baseColorCanvasObject[partName],
    0,
    0,
    design.configData.canvasSize,
    design.configData.canvasSize
  );
  for (let layer in canvasObjectPart.layers) {
    const layerCanvas = canvasObjectPart.layers[layer];
    textureCanvasCTX.drawImage(
      layerCanvas,
      x / divider,
      y / divider,
      width / divider,
      height / divider
    );
    graphicCTX.drawImage(
      layerCanvas,
      0,
      0,
      design.configData.canvasSize,
      design.configData.canvasSize
    );
  }
  texture.needsUpdate = true;
};
