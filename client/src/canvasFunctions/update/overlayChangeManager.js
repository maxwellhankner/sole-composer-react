import { cloneDeep } from "lodash";
import {
  createColorLayerCanvas,
  createGraphicLayerCanvas,
  createOverlayLayerCanvas,
  overlayCanvasObjectToTextureCanvas,
} from "../index";

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
}) => {
  const { type } = changeObject;
  const tempDesign = cloneDeep(design);
  if (type === "graphic-moved") {
    const { partName, layerIndex, direction, distance } = changeObject;
    const thisLayer = tempDesign.outline.overlays[partName].layers[layerIndex];
    if (direction === "vert") {
      thisLayer.y += distance;
    } else if (direction === "hor") {
      thisLayer.x += distance;
    } else if (direction === "scale") {
      thisLayer.scale *= distance;
    } else if (direction === "rotate") {
      thisLayer.rotation += distance;
    } else if (direction === "reset") {
      thisLayer.y = 0;
      thisLayer.x = 0;
      thisLayer.scale = 1;
      thisLayer.rotation = 0;
    }

    setDesign(tempDesign);
    updateOverlayLayer(
      partName,
      layerIndex,
      thisLayer,
      overlayCanvasObject,
      overlayCanvas,
      texture,
      graphicVisualCanvas,
      design,
      canvasObject,
      textureCanvas
    );
  } else if (type === "color-changed") {
    const { partName, layerIndex, newColor } = changeObject;
    let thisLayer = tempDesign.outline.overlays[partName].layers[layerIndex];
    thisLayer.color = newColor;

    setDesign(tempDesign);
    updateOverlayLayer(
      partName,
      layerIndex,
      thisLayer,
      overlayCanvasObject,
      overlayCanvas,
      texture,
      graphicVisualCanvas,
      design,
      canvasObject,
      textureCanvas
    );
  } else if (type === "layer-added") {
    const { partName, layerType } = changeObject;
    // add layers to design if this is the first overlay layer added
    if (design.outline.overlays[partName].layers.length === 0) {
      const effectedParts = design.config.overlayParts[partName];
      for (let layer in effectedParts) {
        const currentPart = effectedParts[layer];
        tempDesign.outline.parts[currentPart].layers.push({
          type: "overlay",
          source: partName,
        });
      }
    }
    if (layerType === "Color") {
      tempDesign.outline.overlays[partName].layers.push({
        type: "color",
        color: "#777777",
      });
    } else {
      tempDesign.outline.overlays[partName].layers.push({
        type: "graphic",
        link: "assets/images/japanese.png",
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
      });
    }

    setDesign(tempDesign);
    addLayerToOverlayCanvasObject(
      overlayCanvasObject,
      partName,
      tempDesign.outline.overlays[partName].layers.slice(-1)[0],
      overlayCanvas,
      texture,
      graphicVisualCanvas,
      design,
      textureCanvas,
      canvasObject,
      tempDesign
    );
  } else if (type === "layer-moved") {
    const { partName, layerIndex, direction } = changeObject;
    let array = tempDesign.outline.overlays[partName].layers;
    let tempElement = array[layerIndex];
    array[layerIndex] = array[layerIndex + direction];
    array[layerIndex + direction] = tempElement;
    tempDesign.outline.overlays[partName].layers = array;

    setDesign(tempDesign);
    moveLayerInOverlayCanvasObject(
      overlayCanvasObject,
      partName,
      layerIndex,
      direction,
      overlayCanvas,
      texture,
      graphicVisualCanvas,
      design,
      textureCanvas,
      canvasObject
    );
  } else if (type === "layer-deleted") {
    const { partName, layerIndex } = changeObject;
    tempDesign.outline.overlays[partName].layers.splice(layerIndex, 1);
    if (tempDesign.outline.overlays[partName].layers.length === 0) {
      // remove layers from design if this is the last overlay layer deleted
      const effectedParts = design.config.overlayParts[partName];
      for (let layer in effectedParts) {
        const currentPart = effectedParts[layer];
        for (
          let i = 0;
          i < tempDesign.outline.parts[currentPart].layers.length;
          i++
        ) {
          const layerIndex = i;
          if (
            tempDesign.outline.parts[currentPart].layers[i].type === "overlay"
          ) {
            if (
              tempDesign.outline.parts[currentPart].layers[i].source ===
              partName
            ) {
              tempDesign.outline.parts[currentPart].layers.splice(
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
    deleteLayerFromOverlayCanvasObject(
      overlayCanvasObject,
      partName,
      layerIndex,
      overlayCanvas,
      texture,
      graphicVisualCanvas,
      design,
      textureCanvas,
      canvasObject,
      tempDesign
    );
  }
};

const updateOverlayLayer = async (
  partName,
  layerIndex,
  layerObject,
  overlayCanvasObject,
  overlayCanvas,
  texture,
  graphicVisualCanvas,
  design,
  canvasObject,
  canvasTexture
) => {
  const effectedParts = design.config.overlayParts[partName];
  // update canvasObject layer
  let layerCanvas;
  if (layerObject.type === "color") {
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
  });

  // update effected layers in canvas object
  for (let part in effectedParts) {
    const currentPart = effectedParts[part];
    for (let i = 0; i < design.outline.parts[currentPart].layers.length; i++) {
      const layerIndex = i;
      if (design.outline.parts[currentPart].layers[i].type === "overlay") {
        if (design.outline.parts[currentPart].layers[i].source === partName) {
          const layerCanvas = await createOverlayLayerCanvas({
            design,
            layer: design.outline.parts[currentPart].layers[i],
            partName: currentPart,
            overlayCanvas,
          });
          canvasObject[currentPart].layers[layerIndex] = layerCanvas;
          // redraw effected parts in textureCanvas
          redrawOverlayCanvasObjectPart(
            canvasTexture,
            canvasObject[currentPart],
            currentPart,
            design
          );
        }
      }
    }
  }
  texture.needsUpdate = true;
};

const redrawOverlayCanvasObjectPart = (
  finalCanvas,
  canvasObjectPart,
  property,
  design
) => {
  const finalCanvasCTX = finalCanvas.getContext("2d");
  const { x, y, width, height } = design.config.partsObject[property];
  for (let layer in canvasObjectPart.layers) {
    const layerCanvas = canvasObjectPart.layers[layer];
    finalCanvasCTX.drawImage(layerCanvas, x, y, width, height);
  }
};

const addLayerToOverlayCanvasObject = async (
  overlayCanvasObject,
  partName,
  layerObject,
  overlayCanvas,
  texture,
  graphicVisualCanvas,
  design,
  canvasTexture,
  canvasObject,
  tempDesign
) => {
  if (layerObject.type === "color") {
    const newLayerCanvas = await createColorLayerCanvas({
      design,
      layer: layerObject,
      partName,
    });
    overlayCanvasObject[partName].layers.push(newLayerCanvas);
  } else if (layerObject.type === "graphic") {
    const newLayerCanvas = await createGraphicLayerCanvas({
      design,
      layer: layerObject,
      partName,
    });
    overlayCanvasObject[partName].layers.push(newLayerCanvas);
  }
  overlayCanvasObjectToTextureCanvas({
    design,
    overlayCanvasObject,
    overlayCanvas,
    partName,
    graphicVisualCanvas,
  });
  // update effected layers in canvas object
  const effectedParts = design.config.overlayParts[partName];
  for (let part in effectedParts) {
    const currentPart = effectedParts[part];
    for (
      let i = 0;
      i < tempDesign.outline.parts[currentPart].layers.length;
      i++
    ) {
      const layerIndex = i;
      if (tempDesign.outline.parts[currentPart].layers[i].type === "overlay") {
        if (
          tempDesign.outline.parts[currentPart].layers[i].source === partName
        ) {
          const layerCanvas = await createOverlayLayerCanvas({
            design,
            layer: tempDesign.outline.parts[currentPart].layers[i],
            partName: currentPart,
            overlayCanvas,
          });
          canvasObject[currentPart].layers[layerIndex] = layerCanvas;
          // redraw effected parts in textureCanvas
          redrawOverlayCanvasObjectPart(
            canvasTexture,
            canvasObject[currentPart],
            currentPart,
            design
          );
        }
      }
    }
  }
  texture.needsUpdate = true;
};

const moveLayerInOverlayCanvasObject = async (
  overlayCanvasObject,
  partName,
  layerIndex,
  direction,
  overlayCanvas,
  texture,
  graphicVisualCanvas,
  design,
  canvasTexture,
  canvasObject
) => {
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
  });

  const effectedParts = design.config.overlayParts[partName];
  for (let part in effectedParts) {
    const currentPart = effectedParts[part];
    for (let i = 0; i < design.outline.parts[currentPart].layers.length; i++) {
      const layerIndex = i;
      if (design.outline.parts[currentPart].layers[i].type === "overlay") {
        if (design.outline.parts[currentPart].layers[i].source === partName) {
          const layerCanvas = await createOverlayLayerCanvas({
            design,
            layer: design.outline.parts[currentPart].layers[i],
            partName: currentPart,
            overlayCanvas,
          });
          canvasObject[currentPart].layers[layerIndex] = layerCanvas;
          // redraw effected parts in textureCanvas
          redrawOverlayCanvasObjectPart(
            canvasTexture,
            canvasObject[currentPart],
            currentPart,
            design
          );
        }
      }
    }
  }
  texture.needsUpdate = true;
};

const deleteLayerFromOverlayCanvasObject = async (
  overlayCanvasObject,
  partName,
  layerIndex,
  overlayCanvas,
  texture,
  graphicVisualCanvas,
  design,
  canvasTexture,
  canvasObject,
  tempDesign
) => {
  overlayCanvasObject[partName].layers.splice(layerIndex, 1);
  overlayCanvasObjectToTextureCanvas({
    design,
    overlayCanvasObject,
    overlayCanvas,
    partName,
    graphicVisualCanvas,
  });

  const effectedParts = design.config.overlayParts[partName];
  for (let part in effectedParts) {
    const currentPart = effectedParts[part];
    for (
      let i = 0;
      i < tempDesign.outline.parts[currentPart].layers.length;
      i++
    ) {
      const layerIndex = i;
      if (
        tempDesign.outline.parts[currentPart].layers[i].type === "overlay" &&
        tempDesign.outline.parts[currentPart].layers[i].source === partName
      ) {
        const layerCanvas = await createOverlayLayerCanvas({
          design,
          layer: design.outline.parts[currentPart].layers[i],
          partName: currentPart,
          overlayCanvas,
        });
        canvasObject[currentPart].layers[layerIndex] = layerCanvas;
      }
    }
    // redraw effected parts in textureCanvas
    redrawOverlayCanvasObjectPart(
      canvasTexture,
      canvasObject[currentPart],
      currentPart,
      design
    );
  }
  texture.needsUpdate = true;
};
