import { canvasSize } from '../../helpers/partsObject';
import { createColorLayerCanvas, createGraphicLayerCanvas, createOverlayLayerCanvas, createMaskLayerCanvas } from '../index';

// create canvasObject part with designObject part
const createCanvasObjectPart = async (design, designLayers, property, overlays) => {
    const canvasLayers = [];
    for (let layer in designLayers) {
        if (designLayers[layer].type === 'color') {
            const thisLayer = await createColorLayerCanvas({ design, layer: designLayers[layer], partName: property });
            canvasLayers.push(thisLayer);
        }
        else if (designLayers[layer].type === 'graphic') {
            canvasLayers.push(await createGraphicLayerCanvas({ design, layer: designLayers[layer], partName: property }));
        }
        else if (designLayers[layer].type === 'mask') {
            canvasLayers.push(await createMaskLayerCanvas({ design, layer: designLayers[layer] }));
        }
        else if (designLayers[layer].type === 'overlay') {
            if (designLayers[layer].source === 'outerOverlay') {
                canvasLayers.push(await createOverlayLayerCanvas({ design, layer: designLayers[layer], partName: property, overlayCanvas: overlays[0] }));
            }
            else {
                canvasLayers.push(await createOverlayLayerCanvas({ design, layer: designLayers[layer], partName: property, overlayCanvas: overlays[1] }));
            }
        }
    }

    return { layers: canvasLayers };
}

// turn designObject into canvasObject
export const designObjectToCanvasObject = (design, type, overlays) => {
    return new Promise((resolve, reject) => {
        const canvasObject = {};
        const createAllParts = async () => {
            if (type === 'partsCanvasObject') {
                for (let property in design.parts) {
                    canvasObject[property] = await createCanvasObjectPart(design, design.parts[property].layers, property, overlays);
                }
            }
            else if (type === 'overlaysCanvasObject') {
                for (let property in design.overlays) {
                    canvasObject[property] = await createCanvasObjectPart(design, design.overlays[property].layers, property);
                }
            }
            resolve(canvasObject);
        }
        createAllParts();
    })
}

export const overlayCanvasObjectToTextureCanvas = ({ design, overlayCanvasObject, overlayCanvas, partName, graphicVisualCanvas }) => {
    const { canvasSize } = design.config;
    const overlayCanvasCTX = overlayCanvas.getContext('2d');
    const graphicCTX = graphicVisualCanvas.getContext('2d');
    graphicCTX.clearRect(0, 0, canvasSize, canvasSize);
    overlayCanvasCTX.clearRect(0, 0, canvasSize, canvasSize);
    for (let layer in overlayCanvasObject[partName].layers) {
        const layerCanvas = overlayCanvasObject[partName].layers[layer];
        overlayCanvasCTX.drawImage(layerCanvas, 0, 0, canvasSize, canvasSize);
        graphicCTX.drawImage(layerCanvas, 0, 0, canvasSize, canvasSize);
    }
}

// update graphicVisualCanvas
export const updateGraphicVisualCanvas = (graphicVisualCanvas, partName, canvasObject) => {
    const graphicCTX = graphicVisualCanvas.getContext('2d');
    graphicCTX.clearRect(0, 0, canvasSize, canvasSize);
    for (let layer in canvasObject[partName].layers) {
        const layerCanvas = canvasObject[partName].layers[layer];
        graphicCTX.drawImage(layerCanvas, 0, 0, canvasSize, canvasSize);
    }
}