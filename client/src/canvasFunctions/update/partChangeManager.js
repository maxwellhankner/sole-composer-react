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
}) => {
  const { type } = changeObject;
  const tempDesign = cloneDeep(design);
  if (type === 'graphic-moved') {
    const { partName, layerIndex, direction, distance } = changeObject;
    const thisLayer = tempDesign.outline.parts[partName].layers[layerIndex];
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
    });
  } else if (type === 'color-changed') {
    const { partName, layerIndex, newColor } = changeObject;
    let thisLayer;
    if (partName === 'outerOverlay' || partName === 'innerOverlay') {
      thisLayer = tempDesign.outline.overlays[partName].layers[layerIndex];
    } else {
      thisLayer = tempDesign.outline.parts[partName].layers[layerIndex];
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
    });
  } else if (type === 'layer-added') {
    const { partName, layerType } = changeObject;
    if (layerType === 'Color') {
      tempDesign.outline.parts[partName].layers.push({
        type: 'color',
        color: '#777777',
      });
    } else if (layerType === 'Graphic') {
      tempDesign.outline.parts[partName].layers.push({
        type: 'graphic',
        link: '/api/assets/images/japanese.png',
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
      });
    } else {
      const { maskLink } = changeObject;
      tempDesign.outline.parts[partName].layers.push({
        type: 'mask',
        link: maskLink,
        color: '#000000',
      });
    }

    setDesign(tempDesign);
    const layerObject = tempDesign.outline.parts[partName].layers.slice(-1)[0];
    addLayerToCanvasObject({
      canvasObject,
      graphicVisualCanvas,
      layerObject,
      partName,
      texture,
      textureCanvas,
      design,
    });
  } else if (type === 'layer-moved') {
    const { partName, layerIndex, direction } = changeObject;
    let array = tempDesign.outline.parts[partName].layers;
    let tempElement = array[layerIndex];
    array[layerIndex] = array[layerIndex + direction];
    array[layerIndex + direction] = tempElement;
    tempDesign.outline.parts[partName].layers = array;

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
    });
  } else if (type === 'layer-deleted') {
    const { partName, layerIndex } = changeObject;
    tempDesign.outline.parts[partName].layers.splice(layerIndex, 1);

    setDesign(tempDesign);
    deleteLayerFromCanvasObject({
      canvasObject,
      partName,
      layerIndex,
      textureCanvas,
      texture,
      graphicVisualCanvas,
      design,
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
    });
  } else {
    layerCanvas = await createMaskLayerCanvas({ design, layer: layerObject });
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
    });
    canvasObject[partName].layers.push(newLayerCanvas);
  } else {
    const newLayerCanvas = await createMaskLayerCanvas({
      design,
      layer: layerObject,
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
}) => {
  canvasObject[partName].layers.splice(layerIndex, 1);
  redrawCanvasObjectPart({
    textureCanvas,
    canvasObjectPart: canvasObject[partName],
    partName,
    texture,
    graphicVisualCanvas,
    design,
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
  });
};

const redrawCanvasObjectPart = ({
  textureCanvas,
  canvasObjectPart,
  partName,
  texture,
  graphicVisualCanvas,
  design,
}) => {
  const textureCanvasCTX = textureCanvas.getContext('2d');
  const graphicCTX = graphicVisualCanvas.getContext('2d');
  graphicCTX.clearRect(
    0,
    0,
    design.config.canvasSize,
    design.config.canvasSize
  );
  const { x, y, width, height } = design.config.partsObject[partName];
  const { divider } = design.config;
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
      design.config.canvasSize,
      design.config.canvasSize
    );
  }
  texture.needsUpdate = true;
};
