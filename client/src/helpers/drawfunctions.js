import { partsObject, translations, canvasSize } from './partsObject';

//------------------------------------------- Create Canvas Functions
const createColorLayerCanvas = (layer, partName) => {
    return new Promise((resolve, reject) => {
        const { mask } = partsObject[partName];
        const { color } = layer;
        const layerCanvas = document.createElement('canvas');
        layerCanvas.width = canvasSize;
        layerCanvas.height = canvasSize;
        const layerCanvasCTX = layerCanvas.getContext('2d');
        const maskImg = new Image()
        maskImg.src = mask;
        maskImg.onload = () => {
            layerCanvasCTX.drawImage(maskImg, 0, 0, layerCanvas.width, layerCanvas.height);
            layerCanvasCTX.globalCompositeOperation = "source-in";
            layerCanvasCTX.fillStyle = color;
            layerCanvasCTX.fillRect(0, 0, canvasSize, canvasSize);
            resolve(layerCanvas)
        }
    })
}

const createGraphicLayerCanvas = (layer, partName) => {
    return new Promise((resolve, reject) => {
        const { mask } = partsObject[partName];
        const { link, x, y, scale, rotation } = layer;
        const layerCanvas = document.createElement('canvas');
        layerCanvas.width = canvasSize;
        layerCanvas.height = canvasSize;
        const layerCanvasCTX = layerCanvas.getContext('2d');
        var graphicImg = new Image();
        graphicImg.src = link;
        graphicImg.onload = () => {
            var graphicWidth = graphicImg.width;
            var graphicHeight = graphicImg.height;
            var graphicPythagorean = Math.round(Math.sqrt((graphicWidth * graphicWidth) + (graphicHeight * graphicHeight)));
            // Create Pythagorean Canvas
            var pythagoreanCanvas = document.createElement('canvas');
            pythagoreanCanvas.id = 'pythagorean-canvas';
            pythagoreanCanvas.width = graphicPythagorean;
            pythagoreanCanvas.height = graphicPythagorean;
            var pythagoreanTemp = pythagoreanCanvas.getContext('2d');
            pythagoreanTemp.translate(pythagoreanCanvas.width / 2, pythagoreanCanvas.height / 2);
            pythagoreanTemp.rotate(rotation * Math.PI / 180);
            pythagoreanTemp.drawImage(graphicImg, (-graphicImg.width / 2), (-graphicImg.height / 2), graphicImg.width, graphicImg.height);
            const maskImg = new Image()
            maskImg.src = mask;
            maskImg.onload = function () {
                layerCanvasCTX.drawImage(maskImg, 0, 0, layerCanvasCTX.canvas.width, layerCanvasCTX.canvas.height);
                layerCanvasCTX.globalCompositeOperation = "source-in";
                layerCanvasCTX.drawImage(pythagoreanCanvas, x + (canvasSize - (canvasSize * scale))/2, y + (canvasSize - (canvasSize * scale))/2, layerCanvas.width * scale, layerCanvas.width * scale);
                layerCanvasCTX.resetTransform();
                resolve(layerCanvas);
            }
        }
    })
}

const createMaskLayerCanvas = (layer, partName) => {
    return new Promise((resolve, reject) => {
        const { link, color } = layer;
        const layerCanvas = document.createElement('canvas');
        layerCanvas.width = canvasSize;
        layerCanvas.height = canvasSize;
        const layerCanvasCTX = layerCanvas.getContext('2d');
        var graphicImg = new Image();
        graphicImg.src = link;
        graphicImg.onload = () => {
            layerCanvasCTX.drawImage(graphicImg, 0, 0, canvasSize, canvasSize);
            layerCanvasCTX.globalCompositeOperation = "source-in";
            layerCanvasCTX.fillStyle = color;
            layerCanvasCTX.fillRect(0, 0, canvasSize, canvasSize);
            resolve(layerCanvas);
        }
    })
}

const createOverlayLayerCanvas = (layer, partName, overlayCanvas) => {
    return new Promise((resolve, reject) => {
        const { mask } = partsObject[partName];
        const { source } = layer;
        const { x, y, scale, rotation } = translations[source][partName]
        const layerCanvas = document.createElement('canvas');
        layerCanvas.width = canvasSize;
        layerCanvas.height = canvasSize;
        const layerCanvasCTX = layerCanvas.getContext('2d');
        const maskImg = new Image()
        maskImg.src = mask;
        maskImg.onload = () => {
            layerCanvasCTX.drawImage(maskImg, 0, 0, layerCanvas.width, layerCanvas.height);
            layerCanvasCTX.globalCompositeOperation = "source-in";
            layerCanvasCTX.translate(canvasSize * x, canvasSize * y)
            layerCanvasCTX.rotate(rotation)
            layerCanvasCTX.drawImage(overlayCanvas, 0, 0, canvasSize * scale, canvasSize * scale)
            resolve(layerCanvas)
        }
    })
}

//------------------------------------------- Initial Functions
// create canvasObject part with designObject part
const createCanvasObjectPart = async (designLayers, property, overlays) => {
    const canvasLayers = [];
    for (let layer in designLayers) {
        if (designLayers[layer].type === 'color') {
            const thisLayer = await createColorLayerCanvas(designLayers[layer], property)
            canvasLayers.push(thisLayer)
        }
        else if (designLayers[layer].type === 'graphic') {
            canvasLayers.push(await createGraphicLayerCanvas(designLayers[layer], property))
        }
        else if (designLayers[layer].type === 'mask') {
            canvasLayers.push(await createMaskLayerCanvas(designLayers[layer], property))
        }
        else if (designLayers[layer].type === 'overlay') {
            if (designLayers[layer].source === 'outerOverlay') {
                canvasLayers.push(await createOverlayLayerCanvas(designLayers[layer], property, overlays[0]))
            }
            else {
                canvasLayers.push(await createOverlayLayerCanvas(designLayers[layer], property, overlays[1]))
            }
        }
    }

    return { layers: canvasLayers }
}

// turn designObject into canvasObject
export const designObjectToCanvasObject = (design, type, overlays) => {
    return new Promise((resolve, reject) => {
        const canvasObject = {};
        const createAllParts = async () => {
            if (type === 'partsCanvasObject') {
                for (let property in design.parts) {
                    canvasObject[property] = await createCanvasObjectPart(design.parts[property].layers, property, overlays)
                }
            }
            else if (type === 'overlaysCanvasObject') {
                for (let property in design.overlays) {
                    canvasObject[property] = await createCanvasObjectPart(design.overlays[property].layers, property)
                }
            }
            resolve(canvasObject)
        }
        createAllParts();
    })
}

// turn canvasObject into a finalTexture
export const canvasObjectToTextureCanvas = (canvasObject, finalCanvas, texture) => {
    const finalCanvasCTX = finalCanvas.getContext('2d');
    for (let property in canvasObject) {
        const { x, y, width, height } = partsObject[property]
        for (let layer in canvasObject[property].layers) {
            const layerCanvas = canvasObject[property].layers[layer]
            finalCanvasCTX.drawImage(layerCanvas, x, y, width, height)
        }
    }
    texture.needsUpdate = true;
}

export const overlayCanvasObjectToTextureCanvas = (overlayCanvasObject, overlayCanvas, property, graphicVisualCanvas) => {
    const overlayCanvasCTX = overlayCanvas.getContext('2d');
    const graphicCTX = graphicVisualCanvas.getContext('2d');
    graphicCTX.clearRect(0, 0, canvasSize, canvasSize);
    overlayCanvasCTX.clearRect(0, 0, canvasSize, canvasSize);
    // for (let property in overlayCanvasObject) {
    // const { x, y, width, height } = partsObject[property]
    for (let layer in overlayCanvasObject[property].layers) {
        const layerCanvas = overlayCanvasObject[property].layers[layer]
        overlayCanvasCTX.drawImage(layerCanvas, 0, 0, canvasSize, canvasSize)
        graphicCTX.drawImage(layerCanvas, 0, 0, canvasSize, canvasSize)
    }
    // }
}

// update graphicVisualCanvas
export const updateGraphicVisualCanvas = (graphicVisualCanvas, partName, canvasObject) => {
    const graphicCTX = graphicVisualCanvas.getContext('2d');
    graphicCTX.clearRect(0, 0, canvasSize, canvasSize)
    for (let layer in canvasObject[partName].layers) {
        const layerCanvas = canvasObject[partName].layers[layer]
        graphicCTX.drawImage(layerCanvas, 0, 0, canvasSize, canvasSize)
    }
}

//------------------------------------------- Part Change Functions
export const designChangeManager = (changeArray, design, setDesign, texture, textureCanvas, graphicVisualCanvas, canvasObject) => {
    if (changeArray[0] === 'graphic-moved') {
        const partName = changeArray[1]
        const layerIndex = changeArray[2]
        const direction = changeArray[3]
        const distance = changeArray[4];
        const tempDesign = JSON.parse(JSON.stringify(design));
        const thisLayer = tempDesign.parts[partName].layers[layerIndex];
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
            thisLayer.scale = 1;
            thisLayer.rotation = 0;
        }
        setDesign(tempDesign);
        updateLayer(partName, layerIndex, thisLayer, canvasObject, textureCanvas, texture, graphicVisualCanvas)
    }
    else if (changeArray[0] === 'color-changed') {
        const partName = changeArray[1]
        const layerIndex = changeArray[2];
        const newColor = changeArray[3]
        const tempDesign = JSON.parse(JSON.stringify(design));
        let thisLayer;
        if (partName === 'outerOverlay' || partName === 'innerOverlay') {
            thisLayer = tempDesign.overlays[partName].layers[layerIndex];
        }
        else {
            thisLayer = tempDesign.parts[partName].layers[layerIndex];
        }

        thisLayer.color = newColor;
        setDesign(tempDesign);
        updateLayer(partName, layerIndex, thisLayer, canvasObject, textureCanvas, texture, graphicVisualCanvas)
    }
    else if (changeArray[0] === 'layer-added') {
        const partName = changeArray[1]
        const type = changeArray[2]
        const tempDesign = JSON.parse(JSON.stringify(design));
        if (type === 'Color') {
            tempDesign.parts[partName].layers.push({
                type: 'color',
                color: '#fb68f5'
            });
        }
        else if (type === 'Graphic') {
            tempDesign.parts[partName].layers.push({
                type: 'graphic',
                link: 'assets/images/japanese.png',
                x: 0,
                y: 0,
                scale: 0,
                rotation: 0
            });
        }
        else {
            // const maskType = changeArray[3];
            const maskLink = changeArray[4];
            tempDesign.parts[partName].layers.push(
                {
                    type: 'mask',
                    link: maskLink,
                    color: '#000000'
                }
            )
        }
        setDesign(tempDesign)
        addLayerToCanvasObject(canvasObject, partName, tempDesign.parts[partName].layers.slice(-1)[0], textureCanvas, texture, graphicVisualCanvas)
    }
    else if (changeArray[0] === 'layer-moved') {
        const partName = changeArray[1]
        const layerIndex = changeArray[2]
        const direction = changeArray[3]
        const tempDesign = JSON.parse(JSON.stringify(design));
        let array = tempDesign.parts[partName].layers
        let tempElement = array[layerIndex]
        array[layerIndex] = array[layerIndex + direction]
        array[layerIndex + direction] = tempElement
        tempDesign.parts[partName].layers = array;
        setDesign(tempDesign)
        moveLayerInCanvasObject(canvasObject, partName, layerIndex, direction, textureCanvas, texture, graphicVisualCanvas)
    }
    else if (changeArray[0] === 'layer-deleted') {
        const partName = changeArray[1]
        const layerIndex = changeArray[2]
        const tempDesign = JSON.parse(JSON.stringify(design));
        tempDesign.parts[partName].layers.splice(layerIndex, 1);
        setDesign(tempDesign);
        deleteLayerFromCanvasObject(canvasObject, partName, layerIndex, textureCanvas, texture, graphicVisualCanvas);
    }
}

const redrawCanvasObjectPart = (finalCanvas, canvasObjectPart, property, texture, graphicVisualCanvas) => {
    const finalCanvasCTX = finalCanvas.getContext('2d');
    const graphicCTX = graphicVisualCanvas.getContext('2d');
    graphicCTX.clearRect(0, 0, canvasSize, canvasSize);
    const { x, y, width, height } = partsObject[property]
    for (let layer in canvasObjectPart.layers) {
        const layerCanvas = canvasObjectPart.layers[layer]
        finalCanvasCTX.drawImage(layerCanvas, x, y, width, height)
        graphicCTX.drawImage(layerCanvas, 0, 0, canvasSize, canvasSize)
    }
    texture.needsUpdate = true;
}

const updateLayer = async (part, layerIndex, layerObject, canvasObject, canvasTexture, texture, graphicVisualCanvas) => {
    // update canvasObject layer
    let layerCanvas;
    if (layerObject.type === 'color') {
        layerCanvas = await createColorLayerCanvas(layerObject, part)
    }
    else if (layerObject.type === 'graphic') {
        layerCanvas = await createGraphicLayerCanvas(layerObject, part)
    }
    else {
        layerCanvas = await createMaskLayerCanvas(layerObject, part)
    }
    canvasObject[part].layers[layerIndex] = layerCanvas;
    // redraw part
    redrawCanvasObjectPart(canvasTexture, canvasObject[part], part, texture, graphicVisualCanvas)
}

const addLayerToCanvasObject = async (canvasObject, partName, layerObject, textureCanvas, texture, graphicVisualCanvas) => {
    if (layerObject.type === 'color') {
        const newLayerCanvas = await createColorLayerCanvas(layerObject, partName)
        canvasObject[partName].layers.push(newLayerCanvas)
    }
    else if (layerObject.type === 'graphic') {
        const newLayerCanvas = await createGraphicLayerCanvas(layerObject, partName)
        canvasObject[partName].layers.push(newLayerCanvas)
    }
    else {
        const newLayerCanvas = await createMaskLayerCanvas(layerObject, partName)
        canvasObject[partName].layers.push(newLayerCanvas)
    }
    redrawCanvasObjectPart(textureCanvas, canvasObject[partName], partName, texture, graphicVisualCanvas)
}

const deleteLayerFromCanvasObject = (canvasObject, partName, layerIndex, textureCanvas, texture, graphicVisualCanvas) => {
    canvasObject[partName].layers.splice(layerIndex, 1);
    redrawCanvasObjectPart(textureCanvas, canvasObject[partName], partName, texture, graphicVisualCanvas)
}

const moveLayerInCanvasObject = (canvasObject, partName, layerIndex, direction, textureCanvas, texture, graphicVisualCanvas) => {
    let array = canvasObject[partName].layers
    let tempElement = array[layerIndex]
    array[layerIndex] = array[layerIndex + direction]
    array[layerIndex + direction] = tempElement
    canvasObject[partName].layers = array;
    redrawCanvasObjectPart(textureCanvas, canvasObject[partName], partName, texture, graphicVisualCanvas)
}

//------------------------------------------- Overlay Change Functions
export const overlayChangeManager = (changeArray, design, setDesign, texture, textureCanvas, graphicVisualCanvas, canvasObject, overlayCanvas, overlayCanvasObject) => {
    // update design
    if (changeArray[0] === 'graphic-moved') {
        const partName = changeArray[1]
        const layerIndex = changeArray[2]
        const direction = changeArray[3]
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
        updateOverlayLayer(partName, layerIndex, thisLayer, overlayCanvasObject, overlayCanvas, texture, graphicVisualCanvas, design, canvasObject, textureCanvas)
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
                scale: 0,
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
}

const updateOverlayLayer = async (partName, layerIndex, layerObject, overlayCanvasObject, overlayCanvas, texture, graphicVisualCanvas, design, canvasObject, canvasTexture) => {
    const effectedParts = design.overlays[partName].parts
    // update canvasObject layer
    let layerCanvas;
    if (layerObject.type === 'color') {
        layerCanvas = await createColorLayerCanvas(layerObject, partName)
    }
    else {
        layerCanvas = await createGraphicLayerCanvas(layerObject, partName)
    }
    overlayCanvasObject[partName].layers[layerIndex] = layerCanvas;

    // redraw part on overlayCanvas
    overlayCanvasObjectToTextureCanvas(overlayCanvasObject, overlayCanvas, partName, graphicVisualCanvas);

    // update effected layers in canvas object
    for (let part in effectedParts) {
        const currentPart = effectedParts[part]
        for (let i = 0; i < design.parts[currentPart].layers.length; i++) {
            const layerIndex = i;
            if (design.parts[currentPart].layers[i].type === 'overlay') {
                if (design.parts[currentPart].layers[i].source === partName) {
                    const layerCanvas = await createOverlayLayerCanvas(design.parts[currentPart].layers[i], currentPart, overlayCanvas)
                    canvasObject[currentPart].layers[layerIndex] = layerCanvas
                    // redraw effected parts in textureCanvas
                    redrawOverlayCanvasObjectPart(canvasTexture, canvasObject[currentPart], currentPart)
                }

            }
        }
    }
    texture.needsUpdate = true;
}

const redrawOverlayCanvasObjectPart = (finalCanvas, canvasObjectPart, property) => {
    const finalCanvasCTX = finalCanvas.getContext('2d');
    const { x, y, width, height } = partsObject[property]
    for (let layer in canvasObjectPart.layers) {
        const layerCanvas = canvasObjectPart.layers[layer]
        finalCanvasCTX.drawImage(layerCanvas, x, y, width, height)
    }
    // texture.needsUpdate = true;
}

const addLayerToOverlayCanvasObject = async (overlayCanvasObject, partName, layerObject, overlayCanvas, texture, graphicVisualCanvas, design, canvasTexture, canvasObject, tempDesign) => {
    if (layerObject.type === 'color') {
        const newLayerCanvas = await createColorLayerCanvas(layerObject, partName)
        overlayCanvasObject[partName].layers.push(newLayerCanvas)
    }
    else if (layerObject.type === 'graphic') {
        const newLayerCanvas = await createGraphicLayerCanvas(layerObject, partName)
        overlayCanvasObject[partName].layers.push(newLayerCanvas)
    }
    overlayCanvasObjectToTextureCanvas(overlayCanvasObject, overlayCanvas, partName, graphicVisualCanvas);
    // update effected layers in canvas object
    const effectedParts = design.overlays[partName].parts
    for (let part in effectedParts) {
        const currentPart = effectedParts[part]
        for (let i = 0; i < tempDesign.parts[currentPart].layers.length; i++) {
            const layerIndex = i;
            if (tempDesign.parts[currentPart].layers[i].type === 'overlay') {
                if (tempDesign.parts[currentPart].layers[i].source === partName) {
                    const layerCanvas = await createOverlayLayerCanvas(tempDesign.parts[currentPart].layers[i], currentPart, overlayCanvas)
                    canvasObject[currentPart].layers[layerIndex] = layerCanvas
                    // redraw effected parts in textureCanvas
                    redrawOverlayCanvasObjectPart(canvasTexture, canvasObject[currentPart], currentPart)
                }
            }
        }
    }
    texture.needsUpdate = true;
}

const moveLayerInOverlayCanvasObject = async (overlayCanvasObject, partName, layerIndex, direction, overlayCanvas, texture, graphicVisualCanvas, design, canvasTexture, canvasObject) => {
    let array = overlayCanvasObject[partName].layers
    let tempElement = array[layerIndex]
    array[layerIndex] = array[layerIndex + direction]
    array[layerIndex + direction] = tempElement
    overlayCanvasObject[partName].layers = array;
    overlayCanvasObjectToTextureCanvas(overlayCanvasObject, overlayCanvas, partName, graphicVisualCanvas);

    const effectedParts = design.overlays[partName].parts
    for (let part in effectedParts) {
        const currentPart = effectedParts[part]
        for (let i = 0; i < design.parts[currentPart].layers.length; i++) {
            const layerIndex = i;
            if (design.parts[currentPart].layers[i].type === 'overlay') {
                if (design.parts[currentPart].layers[i].source === partName) {
                    const layerCanvas = await createOverlayLayerCanvas(design.parts[currentPart].layers[i], currentPart, overlayCanvas)
                    canvasObject[currentPart].layers[layerIndex] = layerCanvas
                    // redraw effected parts in textureCanvas
                    redrawOverlayCanvasObjectPart(canvasTexture, canvasObject[currentPart], currentPart)
                }
            }
        }
    }
    texture.needsUpdate = true;
}

const deleteLayerFromOverlayCanvasObject = async (overlayCanvasObject, partName, layerIndex, overlayCanvas, texture, graphicVisualCanvas, design, canvasTexture, canvasObject, tempDesign) => {
    overlayCanvasObject[partName].layers.splice(layerIndex, 1);
    overlayCanvasObjectToTextureCanvas(overlayCanvasObject, overlayCanvas, partName, graphicVisualCanvas);

    const effectedParts = design.overlays[partName].parts
    for (let part in effectedParts) {
        const currentPart = effectedParts[part]
        for (let i = 0; i < tempDesign.parts[currentPart].layers.length; i++) {
            const layerIndex = i;
            if (tempDesign.parts[currentPart].layers[i].type === 'overlay') {

                if (tempDesign.parts[currentPart].layers[i].source === partName) {
                    const layerCanvas = await createOverlayLayerCanvas(design.parts[currentPart].layers[i], currentPart, overlayCanvas)
                    canvasObject[currentPart].layers[layerIndex] = layerCanvas
                }
            }
            // redraw effected parts in textureCanvas
            redrawOverlayCanvasObjectPart(canvasTexture, canvasObject[currentPart], currentPart)
        }
    }
    texture.needsUpdate = true;
}