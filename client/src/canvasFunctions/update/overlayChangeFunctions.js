import { partsObject, canvasSize } from '../../helpers/partsObject';
import {
    createColorLayerCanvas,
    createGraphicLayerCanvas,
    createOverlayLayerCanvas,
    overlayCanvasObjectToTextureCanvas
} from '../index';

//------------------------------------------- Overlay Change Functions
export const overlayChangeManager = (changeArray, design, setDesign, texture, textureCanvas, graphicVisualCanvas, canvasObject, overlayCanvas, overlayCanvasObject) => {
    // update design
    if (changeArray[0] === 'graphic-moved') {
        const partName = changeArray[1];
        const layerIndex = changeArray[2];
        const direction = changeArray[3];
        const distance = changeArray[4];
        const tempDesign = JSON.parse(JSON.stringify(design));
        // tempDesign = ...design
        const thisLayer = tempDesign.overlays[partName].layers[layerIndex];
        if (direction === 'vert') {
            thisLayer.y += distance;
        }
        else if (direction === 'hor') {
            thisLayer.x += distance;
        }
        else if (direction === 'scale') {
            thisLayer.scale *= distance;
        }
        else if (direction === 'rotate') {
            thisLayer.rotation += distance;
        }
        else if (direction === 'reset') {
            thisLayer.y = 0;
            thisLayer.x = 0;
            thisLayer.scale = 500;
            thisLayer.rotation = 0;
        }

        setDesign(tempDesign);
        updateOverlayLayer(partName, layerIndex, thisLayer, overlayCanvasObject, overlayCanvas, texture, graphicVisualCanvas, design, canvasObject, textureCanvas);
    }
    else if (changeArray[0] === 'color-changed') {
        const partName = changeArray[1]
        const layerIndex = changeArray[2];
        const newColor = changeArray[3]
        const tempDesign = JSON.parse(JSON.stringify(design));
        let thisLayer = tempDesign.overlays[partName].layers[layerIndex];
        thisLayer.color = newColor;

        setDesign(tempDesign);
        updateOverlayLayer(partName, layerIndex, thisLayer, overlayCanvasObject, overlayCanvas, texture, graphicVisualCanvas, design, canvasObject, textureCanvas)
    }
    else if (changeArray[0] === 'layer-added') {
        const partName = changeArray[1]
        const type = changeArray[2]
        const tempDesign = JSON.parse(JSON.stringify(design));
        // add layers to design if this is the first overlay layer added
        if (design.overlays[partName].layers.length === 0) {
            const effectedParts = design.overlays[partName].parts;
            for (let layer in effectedParts) {
                const currentPart = effectedParts[layer]
                tempDesign.parts[currentPart].layers.push(
                    {
                        type: 'overlay',
                        source: partName
                    }
                )
            }
        }
        if (type === 'Color') {
            tempDesign.overlays[partName].layers.push({
                type: 'color',
                color: '#fb68f5'
            });
        }
        else {
            tempDesign.overlays[partName].layers.push({
                type: 'graphic',
                link: 'assets/images/japanese.png',
                x: 0,
                y: 0,
                scale: 1,
                rotation: 0
            });
        }
        setDesign(tempDesign)
        addLayerToOverlayCanvasObject(overlayCanvasObject, partName, tempDesign.overlays[partName].layers.slice(-1)[0], overlayCanvas, texture, graphicVisualCanvas, design, textureCanvas, canvasObject, tempDesign)
    }
    else if (changeArray[0] === 'layer-moved') {
        const partName = changeArray[1]
        const layerIndex = changeArray[2]
        const direction = changeArray[3]
        const tempDesign = JSON.parse(JSON.stringify(design));
        let array = tempDesign.overlays[partName].layers
        let tempElement = array[layerIndex]
        array[layerIndex] = array[layerIndex + direction]
        array[layerIndex + direction] = tempElement
        tempDesign.overlays[partName].layers = array;

        setDesign(tempDesign)
        moveLayerInOverlayCanvasObject(overlayCanvasObject, partName, layerIndex, direction, overlayCanvas, texture, graphicVisualCanvas, design, textureCanvas, canvasObject)
    }
    else if (changeArray[0] === 'layer-deleted') {
        const partName = changeArray[1]
        const layerIndex = changeArray[2]
        const tempDesign = JSON.parse(JSON.stringify(design));
        tempDesign.overlays[partName].layers.splice(layerIndex, 1);
        if (tempDesign.overlays[partName].layers.length === 0) {
            // remove layers from design if this is the last overlay layer deleted
            const effectedParts = design.overlays[partName].parts;
            for (let layer in effectedParts) {
                const currentPart = effectedParts[layer]
                for (let i = 0; i < tempDesign.parts[currentPart].layers.length; i++) {
                    const layerIndex = i;
                    if (tempDesign.parts[currentPart].layers[i].type === 'overlay') {
                        if (tempDesign.parts[currentPart].layers[i].source === partName) {
                            tempDesign.parts[currentPart].layers.splice(layerIndex, 1);
                            canvasObject[currentPart].layers.splice(layerIndex, 1)
                        }
                    }
                }
            }
        }

        setDesign(tempDesign);
        deleteLayerFromOverlayCanvasObject(overlayCanvasObject, partName, layerIndex, overlayCanvas, texture, graphicVisualCanvas, design, textureCanvas, canvasObject, tempDesign);
    }
};

const updateOverlayLayer = async (partName, layerIndex, layerObject, overlayCanvasObject, overlayCanvas, texture, graphicVisualCanvas, design, canvasObject, canvasTexture) => {
    const effectedParts = design.overlays[partName].parts;
    // update canvasObject layer
    let layerCanvas;
    if (layerObject.type === 'color') {
        layerCanvas = await createColorLayerCanvas(layerObject, partName, canvasSize);
    }
    else {
        layerCanvas = await createGraphicLayerCanvas(layerObject, partName);
    }
    overlayCanvasObject[partName].layers[layerIndex] = layerCanvas;

    // redraw part on overlayCanvas
    overlayCanvasObjectToTextureCanvas(overlayCanvasObject, overlayCanvas, partName, graphicVisualCanvas);

    // update effected layers in canvas object
    for (let part in effectedParts) {
        const currentPart = effectedParts[part];
        for (let i = 0; i < design.parts[currentPart].layers.length; i++) {
            const layerIndex = i;
            if (design.parts[currentPart].layers[i].type === 'overlay') {
                if (design.parts[currentPart].layers[i].source === partName) {
                    const layerCanvas = await createOverlayLayerCanvas(design.parts[currentPart].layers[i], currentPart, overlayCanvas);
                    canvasObject[currentPart].layers[layerIndex] = layerCanvas;
                    // redraw effected parts in textureCanvas
                    redrawOverlayCanvasObjectPart(canvasTexture, canvasObject[currentPart], currentPart);
                }

            }
        }
    }
    texture.needsUpdate = true;
};

const redrawOverlayCanvasObjectPart = (finalCanvas, canvasObjectPart, property) => {
    const finalCanvasCTX = finalCanvas.getContext('2d');
    const { x, y, width, height } = partsObject[property];
    for (let layer in canvasObjectPart.layers) {
        const layerCanvas = canvasObjectPart.layers[layer];
        finalCanvasCTX.drawImage(layerCanvas, x, y, width, height);
    }
};

const addLayerToOverlayCanvasObject = async (overlayCanvasObject, partName, layerObject, overlayCanvas, texture, graphicVisualCanvas, design, canvasTexture, canvasObject, tempDesign) => {
    if (layerObject.type === 'color') {
        const newLayerCanvas = await createColorLayerCanvas(layerObject, partName, canvasSize);
        overlayCanvasObject[partName].layers.push(newLayerCanvas);
    }
    else if (layerObject.type === 'graphic') {
        const newLayerCanvas = await createGraphicLayerCanvas(layerObject, partName);
        overlayCanvasObject[partName].layers.push(newLayerCanvas);
    }
    overlayCanvasObjectToTextureCanvas(overlayCanvasObject, overlayCanvas, partName, graphicVisualCanvas);
    // update effected layers in canvas object
    const effectedParts = design.overlays[partName].parts;
    for (let part in effectedParts) {
        const currentPart = effectedParts[part];
        for (let i = 0; i < tempDesign.parts[currentPart].layers.length; i++) {
            const layerIndex = i;
            if (tempDesign.parts[currentPart].layers[i].type === 'overlay') {
                if (tempDesign.parts[currentPart].layers[i].source === partName) {
                    const layerCanvas = await createOverlayLayerCanvas(tempDesign.parts[currentPart].layers[i], currentPart, overlayCanvas);
                    canvasObject[currentPart].layers[layerIndex] = layerCanvas;
                    // redraw effected parts in textureCanvas
                    redrawOverlayCanvasObjectPart(canvasTexture, canvasObject[currentPart], currentPart);
                }
            }
        }
    }
    texture.needsUpdate = true;
};

const moveLayerInOverlayCanvasObject = async (overlayCanvasObject, partName, layerIndex, direction, overlayCanvas, texture, graphicVisualCanvas, design, canvasTexture, canvasObject) => {
    let array = overlayCanvasObject[partName].layers;
    let tempElement = array[layerIndex];
    array[layerIndex] = array[layerIndex + direction];
    array[layerIndex + direction] = tempElement;
    overlayCanvasObject[partName].layers = array;
    overlayCanvasObjectToTextureCanvas(overlayCanvasObject, overlayCanvas, partName, graphicVisualCanvas);

    const effectedParts = design.overlays[partName].parts;
    for (let part in effectedParts) {
        const currentPart = effectedParts[part];
        for (let i = 0; i < design.parts[currentPart].layers.length; i++) {
            const layerIndex = i;;
            if (design.parts[currentPart].layers[i].type === 'overlay') {
                if (design.parts[currentPart].layers[i].source === partName) {
                    const layerCanvas = await createOverlayLayerCanvas(design.parts[currentPart].layers[i], currentPart, overlayCanvas);
                    canvasObject[currentPart].layers[layerIndex] = layerCanvas;
                    // redraw effected parts in textureCanvas
                    redrawOverlayCanvasObjectPart(canvasTexture, canvasObject[currentPart], currentPart);
                }
            }
        }
    }
    texture.needsUpdate = true;
};

const deleteLayerFromOverlayCanvasObject = async (overlayCanvasObject, partName, layerIndex, overlayCanvas, texture, graphicVisualCanvas, design, canvasTexture, canvasObject, tempDesign) => {
    overlayCanvasObject[partName].layers.splice(layerIndex, 1);
    overlayCanvasObjectToTextureCanvas(overlayCanvasObject, overlayCanvas, partName, graphicVisualCanvas);

    const effectedParts = design.overlays[partName].parts;
    for (let part in effectedParts) {
        const currentPart = effectedParts[part];
        for (let i = 0; i < tempDesign.parts[currentPart].layers.length; i++) {
            const layerIndex = i;
            if (tempDesign.parts[currentPart].layers[i].type === 'overlay' && tempDesign.parts[currentPart].layers[i].source === partName) {
                    const layerCanvas = await createOverlayLayerCanvas(design.parts[currentPart].layers[i], currentPart, overlayCanvas);
                    canvasObject[currentPart].layers[layerIndex] = layerCanvas;
            };
        };
        // redraw effected parts in textureCanvas
        redrawOverlayCanvasObjectPart(canvasTexture, canvasObject[currentPart], currentPart);
    };
    texture.needsUpdate = true;
};