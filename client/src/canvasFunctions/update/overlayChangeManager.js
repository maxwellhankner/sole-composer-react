import { cloneDeep } from 'lodash';
import {
  createColorLayerCanvas,
  createGraphicLayerCanvas,
  createOverlayLayerCanvas,
  overlayCanvasObjectToTextureCanvas,
} from '../index';

//------------------------------------------- Overlay Change Functions
export const overlayChangeManager = ({
  changeObject,
  design,
  setDesign,
  texture,
  textureCanvas,
  graphicVisualCanvas,
  canvasObject,
  overlayCanvas,
  overlayCanvasObject,
  baseColorCanvasObject,
  currentShoe,
}) => {
  const { type, fileName } = changeObject;
  const tempDesign = cloneDeep(design);
  if (type === 'graphic-moved') {
    const { partName, layerIndex, direction, distance } = changeObject;
    const thisLayer =
      tempDesign.outlineData.overlays[partName][currentShoe][layerIndex];
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
    updateOverlayLayer({
      partName,
      layerIndex,
      layerObject: thisLayer,
      overlayCanvasObject,
      overlayCanvas,
      texture,
      graphicVisualCanvas,
      design,
      canvasObject,
      textureCanvas,
      baseColorCanvasObject,
      currentShoe,
    });
  } else if (type === 'color-changed') {
    const { partName, layerIndex, newColor } = changeObject;
    let thisLayer =
      tempDesign.outlineData.overlays[partName][currentShoe][layerIndex];
    thisLayer.color = newColor;

    setDesign(tempDesign);
    updateOverlayLayer({
      partName,
      layerIndex,
      layerObject: thisLayer,
      overlayCanvasObject,
      overlayCanvas,
      texture,
      graphicVisualCanvas,
      design,
      canvasObject,
      textureCanvas,
      baseColorCanvasObject,
      currentShoe,
    });
  } else if (type === 'layer-added') {
    const { partName, layerType } = changeObject;
    // add layers to design if this is the first overlay layer added
    if (design.outlineData.overlays[partName][currentShoe].length === 0) {
      const effectedParts = design.configData.overlayParts[partName];
      for (let layer in effectedParts) {
        const currentPart = effectedParts[layer];
        tempDesign.outlineData.parts[currentPart][currentShoe].push({
          type: 'overlay',
          source: partName,
        });
      }
    }
    if (layerType === 'Color') {
      tempDesign.outlineData.overlays[partName][currentShoe].push({
        type: 'color',
        color: '#777777',
      });
    } else {
      tempDesign.outlineData.overlays[partName][currentShoe].push({
        type: 'graphic',
        link: fileName,
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
      });
    }

    setDesign(tempDesign);
    addLayerToOverlayCanvasObject({
      overlayCanvasObject,
      partName,
      layerObject: tempDesign.outlineData.overlays[partName][currentShoe].slice(
        -1
      )[0],
      overlayCanvas,
      texture,
      graphicVisualCanvas,
      design,
      textureCanvas,
      canvasObject,
      tempDesign,
      baseColorCanvasObject,
      currentShoe,
    });
  } else if (type === 'layer-moved') {
    const { partName, layerIndex, direction } = changeObject;
    let array = tempDesign.outlineData.overlays[partName].layers;
    let tempElement = array[layerIndex];
    array[layerIndex] = array[layerIndex + direction];
    array[layerIndex + direction] = tempElement;
    tempDesign.outlineData.overlays[partName].layers = array;

    setDesign(tempDesign);
    moveLayerInOverlayCanvasObject({
      overlayCanvasObject,
      partName,
      layerIndex,
      direction,
      overlayCanvas,
      texture,
      graphicVisualCanvas,
      design,
      textureCanvas,
      canvasObject,
      baseColorCanvasObject,
      currentShoe,
    });
  } else if (type === 'layer-deleted') {
    const { partName, layerIndex } = changeObject;
    tempDesign.outlineData.overlays[partName][currentShoe].splice(
      layerIndex,
      1
    );
    if (tempDesign.outlineData.overlays[partName][currentShoe].length === 0) {
      // remove layers from design if this is the last overlay layer deleted
      const effectedParts = design.configData.overlayParts[partName];
      for (let layer in effectedParts) {
        const currentPart = effectedParts[layer];
        for (
          let i = 0;
          i < tempDesign.outlineData.parts[currentPart][currentShoe].length;
          i++
        ) {
          const layerIndex = i;
          if (
            tempDesign.outlineData.parts[currentPart][currentShoe][i].type ===
            'overlay'
          ) {
            if (
              tempDesign.outlineData.parts[currentPart][currentShoe][i]
                .source === partName
            ) {
              tempDesign.outlineData.parts[currentPart][currentShoe].splice(
                layerIndex,
                1
              );
              canvasObject[currentPart].layers.splice(layerIndex, 1);
            }
          }
        }
      }
    }

    setDesign(tempDesign);
    deleteLayerFromOverlayCanvasObject({
      overlayCanvasObject,
      partName,
      layerIndex,
      overlayCanvas,
      texture,
      graphicVisualCanvas,
      design,
      textureCanvas,
      canvasObject,
      tempDesign,
      baseColorCanvasObject,
      currentShoe,
    });
  }
};

const updateOverlayLayer = async ({
  partName,
  layerIndex,
  layerObject,
  overlayCanvasObject,
  overlayCanvas,
  texture,
  graphicVisualCanvas,
  design,
  canvasObject,
  textureCanvas,
  baseColorCanvasObject,
  currentShoe,
}) => {
  const effectedParts = design.configData.overlayParts[partName];
  // update canvasObject layer
  let layerCanvas;
  if (layerObject.type === 'color') {
    layerCanvas = await createColorLayerCanvas({
      design,
      layer: layerObject,
      partName,
    });
  } else {
    layerCanvas = await createGraphicLayerCanvas({
      design,
      layer: layerObject,
      partName,
      currentShoe,
    });
  }
  overlayCanvasObject[partName].layers[layerIndex] = layerCanvas;

  // redraw part on overlayCanvas
  overlayCanvasObjectToTextureCanvas({
    design,
    overlayCanvasObject,
    overlayCanvas,
    partName,
    graphicVisualCanvas,
    currentShoe,
  });

  // update effected layers in canvas object
  for (let part in effectedParts) {
    const currentPart = effectedParts[part];
    for (
      let i = 0;
      i < design.outlineData.parts[currentPart][currentShoe].length;
      i++
    ) {
      const layerIndex = i;
      if (
        design.outlineData.parts[currentPart][currentShoe][i].type === 'overlay'
      ) {
        if (
          design.outlineData.parts[currentPart][currentShoe][i].source ===
          partName
        ) {
          const layerCanvas = await createOverlayLayerCanvas({
            design,
            layer: design.outlineData.parts[currentPart][currentShoe][i],
            partName: currentPart,
            overlayCanvas,
          });
          canvasObject[currentPart].layers[layerIndex] = layerCanvas;
          // redraw effected parts in textureCanvas
          redrawOverlayCanvasObjectPart({
            textureCanvas,
            canvasObjectPart: canvasObject[currentPart],
            partName: currentPart,
            design,
            baseColorCanvasObject,
          });
        }
      }
    }
  }
  texture.needsUpdate = true;
};

const addLayerToOverlayCanvasObject = async ({
  overlayCanvasObject,
  partName,
  layerObject,
  overlayCanvas,
  texture,
  graphicVisualCanvas,
  design,
  textureCanvas,
  canvasObject,
  tempDesign,
  baseColorCanvasObject,
  currentShoe,
}) => {
  if (layerObject.type === 'color') {
    const newLayerCanvas = await createColorLayerCanvas({
      design,
      layer: layerObject,
      partName,
    });
    overlayCanvasObject[partName].layers.push(newLayerCanvas);
  } else if (layerObject.type === 'graphic') {
    const newLayerCanvas = await createGraphicLayerCanvas({
      design,
      layer: layerObject,
      partName,
      currentShoe,
    });
    overlayCanvasObject[partName].layers.push(newLayerCanvas);
  }
  overlayCanvasObjectToTextureCanvas({
    design,
    overlayCanvasObject,
    overlayCanvas,
    partName,
    graphicVisualCanvas,
    currentShoe,
  });
  // update effected layers in canvas object
  const effectedParts = design.configData.overlayParts[partName];
  for (let part in effectedParts) {
    const currentPart = effectedParts[part];
    for (
      let i = 0;
      i < tempDesign.outlineData.parts[currentPart][currentShoe].length;
      i++
    ) {
      const layerIndex = i;
      if (
        tempDesign.outlineData.parts[currentPart][currentShoe][i].type ===
        'overlay'
      ) {
        if (
          tempDesign.outlineData.parts[currentPart][currentShoe][i].source ===
          partName
        ) {
          const layerCanvas = await createOverlayLayerCanvas({
            design,
            layer: tempDesign.outlineData.parts[currentPart][currentShoe][i],
            partName: currentPart,
            overlayCanvas,
          });
          canvasObject[currentPart].layers[layerIndex] = layerCanvas;
          // redraw effected parts in textureCanvas
          redrawOverlayCanvasObjectPart({
            textureCanvas,
            canvasObjectPart: canvasObject[currentPart],
            partName: currentPart,
            design,
            baseColorCanvasObject,
          });
        }
      }
    }
  }
  texture.needsUpdate = true;
};

const moveLayerInOverlayCanvasObject = async ({
  overlayCanvasObject,
  partName,
  layerIndex,
  direction,
  overlayCanvas,
  texture,
  graphicVisualCanvas,
  design,
  textureCanvas,
  canvasObject,
  baseColorCanvasObject,
  currentShoe,
}) => {
  let array = overlayCanvasObject[partName].layers;
  let tempElement = array[layerIndex];
  array[layerIndex] = array[layerIndex + direction];
  array[layerIndex + direction] = tempElement;
  overlayCanvasObject[partName].layers = array;
  overlayCanvasObjectToTextureCanvas({
    design,
    overlayCanvasObject,
    overlayCanvas,
    partName,
    graphicVisualCanvas,
    currentShoe,
  });

  const effectedParts = design.configData.overlayParts[partName];
  for (let part in effectedParts) {
    const currentPart = effectedParts[part];
    for (
      let i = 0;
      i < design.outlineData.parts[currentPart].layers.length;
      i++
    ) {
      const layerIndex = i;
      if (design.outlineData.parts[currentPart].layers[i].type === 'overlay') {
        if (
          design.outlineData.parts[currentPart].layers[i].source === partName
        ) {
          const layerCanvas = await createOverlayLayerCanvas({
            design,
            layer: design.outlineData.parts[currentPart].layers[i],
            partName: currentPart,
            overlayCanvas,
          });
          canvasObject[currentPart].layers[layerIndex] = layerCanvas;
          // redraw effected parts in textureCanvas
          redrawOverlayCanvasObjectPart({
            textureCanvas,
            canvasObjectPart: canvasObject[currentPart],
            partName: currentPart,
            design,
            baseColorCanvasObject,
          });
        }
      }
    }
  }
  texture.needsUpdate = true;
};

const deleteLayerFromOverlayCanvasObject = async ({
  overlayCanvasObject,
  partName,
  layerIndex,
  overlayCanvas,
  texture,
  graphicVisualCanvas,
  design,
  textureCanvas,
  canvasObject,
  tempDesign,
  baseColorCanvasObject,
  currentShoe,
}) => {
  overlayCanvasObject[partName].layers.splice(layerIndex, 1);
  overlayCanvasObjectToTextureCanvas({
    design,
    overlayCanvasObject,
    overlayCanvas,
    partName,
    graphicVisualCanvas,
    currentShoe,
  });

  const effectedParts = design.configData.overlayParts[partName];
  for (let part in effectedParts) {
    const currentPart = effectedParts[part];
    for (
      let i = 0;
      i < tempDesign.outlineData.parts[currentPart][currentShoe].length;
      i++
    ) {
      const layerIndex = i;
      if (
        tempDesign.outlineData.parts[currentPart][currentShoe][i].type ===
          'overlay' &&
        tempDesign.outlineData.parts[currentPart][currentShoe][i].source ===
          partName
      ) {
        const layerCanvas = await createOverlayLayerCanvas({
          design,
          layer: design.outlineData.parts[currentPart][currentShoe][i],
          partName: currentPart,
          overlayCanvas,
        });
        canvasObject[currentPart].layers[layerIndex] = layerCanvas;
      }
    }
    // redraw effected parts in textureCanvas
    redrawOverlayCanvasObjectPart({
      textureCanvas,
      canvasObjectPart: canvasObject[currentPart],
      partName: currentPart,
      design,
      baseColorCanvasObject,
    });
  }
  texture.needsUpdate = true;
};

const redrawOverlayCanvasObjectPart = ({
  textureCanvas,
  canvasObjectPart,
  partName,
  design,
  baseColorCanvasObject,
}) => {
  const textureCanvasCTX = textureCanvas.getContext('2d');
  const { x, y, width, height } = design.configData.partsObject[partName];
  const { divider } = design.configData;
  textureCanvasCTX.drawImage(
    baseColorCanvasObject[partName],
    x / divider,
    y / divider,
    width / divider,
    height / divider
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
  }
};
