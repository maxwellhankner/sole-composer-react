import { partsObject } from './partsObject';

export const drawColorFunction = (texture, textureCanvas, setTextureCanvas, color, part, graphicVisualCanvas, isCurrentPart) => {
    return new Promise((resolve, reject) => {
        const tempCanvas = document.createElement('canvas');

        tempCanvas.id = 'temp-canvas';
        tempCanvas.width = 4096;
        tempCanvas.height = 4096;
        const mask = new Image()
        mask.src = part.mask;
        mask.onload = () => {
            const ctxtemp = tempCanvas.getContext('2d');
            if (ctxtemp) {
                // const hey = document.createElement('h1');
                // hey.innerHTML = (part.mask)
                // document.body.appendChild(hey)
            }
            ctxtemp.drawImage(mask, 0, 0, tempCanvas.width, tempCanvas.height);
            ctxtemp.globalCompositeOperation = "source-in";
            ctxtemp.fillStyle = color;
            ctxtemp.fillRect(0, 0, 4096, 4096);
            const finalCanvas = textureCanvas;
            finalCanvas.drawImage(tempCanvas, part.x, part.y, part.width, part.height);
            finalCanvas.canvas.id = "new-canvas";
            setTextureCanvas(finalCanvas);
            texture.needsUpdate = true;

            // Graphic Part Visual
            if (isCurrentPart) {
                const gvcCTX = graphicVisualCanvas.getContext('2d');
                const graphicMask = document.createElement('canvas')
                graphicMask.id = 'temp-graphic-mask';
                graphicMask.width = 4096;
                graphicMask.height = 4096;
                const tempGraphicMask = graphicMask.getContext('2d')
                tempGraphicMask.drawImage(mask, 0, 0, graphicVisualCanvas.width, graphicVisualCanvas.height)
                tempGraphicMask.globalCompositeOperation = "source-in";
                tempGraphicMask.fillStyle = color;
                tempGraphicMask.fillRect(0, 0, 4096, 4096);
                gvcCTX.drawImage(graphicMask, 0, 0, 4096, 4096);
            }
            resolve('done');
        }
    })
}

export const drawGraphicFunction = (texture, textureCanvas, setTextureCanvas, part, layerDetails, graphicVisualCanvas, isCurrentPart) => {
    const { link, x, y, scale, rotation } = layerDetails

    return new Promise((resolve, reject) => {
        var graphicImg = new Image();
        // graphicImg.crossOrigin = 'Anonymous';
        graphicImg.src = link;
        graphicImg.onload = () => {

            // Variables
            var graphicWidth = graphicImg.width;
            var graphicHeight = graphicImg.height;
            var graphicPythagorean = Math.sqrt(Math.pow(graphicWidth, 2) + Math.pow(graphicHeight, 2));

            // Create Pythagorean Canvas
            var pythagoreanCanvas = document.createElement('canvas');
            pythagoreanCanvas.id = 'pythagorean-canvas';
            pythagoreanCanvas.width = graphicPythagorean;
            pythagoreanCanvas.height = graphicPythagorean;
            var pythagoreanTemp = pythagoreanCanvas.getContext('2d');
            pythagoreanTemp.translate(pythagoreanCanvas.width / 2, pythagoreanCanvas.height / 2);
            pythagoreanTemp.rotate(rotation * Math.PI / 180);
            pythagoreanTemp.drawImage(graphicImg, (-graphicImg.width / 2), (-graphicImg.height / 2), graphicImg.width, graphicImg.height);

            // Load the mask
            const tempCanvas = document.createElement('canvas');
            tempCanvas.id = 'temp-canvas';
            tempCanvas.width = 4096;
            tempCanvas.height = 4096;
            const ctxtemp = tempCanvas.getContext('2d');
            const mask = new Image()
            mask.src = part.mask;
            mask.onload = function () {
                ctxtemp.drawImage(mask, 0, 0, ctxtemp.canvas.width, ctxtemp.canvas.height);
                ctxtemp.globalCompositeOperation = "source-in";
                ctxtemp.translate(ctxtemp.canvas.width / 2, ctxtemp.canvas.width / 2);
                ctxtemp.drawImage(pythagoreanCanvas, (-ctxtemp.canvas.width / 2) + x - scale, (-ctxtemp.canvas.height / 2) + y - scale, ctxtemp.canvas.width + (2 * scale), ctxtemp.canvas.width + (2 * scale));
                ctxtemp.resetTransform();

                // document.body.appendChild(tempCanvas);

                // // Final step
                const finalCanvas = textureCanvas;
                finalCanvas.drawImage(tempCanvas, part.x, part.y, part.width, part.height);

                // Graphic Part Visual
                if (isCurrentPart) {
                    const gvcCTX = graphicVisualCanvas.getContext('2d');
                    // draw graphic
                    gvcCTX.globalCompositeOperation = "source-over"
                    gvcCTX.translate(ctxtemp.canvas.width / 2, ctxtemp.canvas.width / 2);
                    gvcCTX.drawImage(pythagoreanCanvas, (-ctxtemp.canvas.width / 2) + x - scale, (-ctxtemp.canvas.height / 2) + y - scale, ctxtemp.canvas.width + (2 * scale), ctxtemp.canvas.width + (2 * scale))

                    // draw mask
                    const graphicMask = document.createElement('canvas')
                    graphicMask.id = 'temp-graphic-mask';
                    graphicMask.width = 4096;
                    graphicMask.height = 4096;
                    const tempGraphicMask = graphicMask.getContext('2d')
                    tempGraphicMask.drawImage(mask, 0, 0, graphicMask.width, graphicMask.height)
                    tempGraphicMask.globalCompositeOperation = "source-out";
                    tempGraphicMask.fillStyle = '#333333bb';
                    tempGraphicMask.fillRect(0, 0, 4096, 4096);
                    gvcCTX.resetTransform()
                    gvcCTX.drawImage(graphicMask, 0, 0, 4096, 4096);
                }

                setTextureCanvas(finalCanvas);
                texture.needsUpdate = true;
                resolve('done');
            }
        }
    })
}

/*
designObject: {
    parts: {
        outerHeel: {
            layers: {
                [
                    {
                        type: 'color',
                        color: '#ffffff'
                    },
                    {
                        type: 'overlay',
                        source: 'quarterHeelOverlay'
                    },
                    {
                        type: 'graphic',
                        link: '/assets/images/japanes.png',
                        x: 0,
                        y: 0,
                        scale: 500,
                        roatation: 0
                    }
                ]
            }
        },
        outerQuarter: {
            layers: {
                [
                    {
                        type: 'color',
                        color: '#ffffff'
                    },
                    {
                        type: 'overlay',
                        source: 'quarterHeelOverlay'
                    },
                ]
            }
        },
        quarterHeelOverlay: {
            layers: {
                [
                    {
                        type: graphic,
                        link: '/assets/images/spongebob.png',
                        x: 0,
                        y: 0,
                        scale: 500,
                        roatation: 0
                    },
                ]
            }
        }
    }
}

function that updates a part of the canvasObject given the designObject changes

color change
graphic moved
layer added - design is changed, canvasObject needs update, part needs redraw
layer deleted - design is changed, canvasObject needs update, part needs redraw
layer moved - design is changed, canvasObject needs update, part needs redraw

*/

// New Functions

const createColorLayerCanvas = (layer, partName) => {
    console.log(partName, layer)
    return new Promise((resolve, reject) => {
        const { mask } = partsObject[partName];
        const { color } = layer;
        const layerCanvas = document.createElement('canvas');
        layerCanvas.width = 4096;
        layerCanvas.height = 4096;
        const layerCanvasCTX = layerCanvas.getContext('2d');
        const maskImg = new Image()
        maskImg.src = mask;
        maskImg.onload = () => {
            layerCanvasCTX.drawImage(maskImg, 0, 0, layerCanvas.width, layerCanvas.height);
            layerCanvasCTX.globalCompositeOperation = "source-in";
            layerCanvasCTX.fillStyle = color;
            layerCanvasCTX.fillRect(0, 0, 4096, 4096);
            resolve(layerCanvas)
        }
    })
}

const createGraphicLayerCanvas = (layer, partName) => {
    return new Promise((resolve, reject) => {
        const { mask } = partsObject[partName];
        const { link, x, y, scale, rotation } = layer;
        const layerCanvas = document.createElement('canvas');
        layerCanvas.width = 4096;
        layerCanvas.height = 4096;
        const layerCanvasCTX = layerCanvas.getContext('2d');
        var graphicImg = new Image();
        graphicImg.src = link;
        graphicImg.onload = () => {
            var graphicWidth = graphicImg.width;
            var graphicHeight = graphicImg.height;
            var graphicPythagorean = Math.sqrt(Math.pow(graphicWidth, 2) + Math.pow(graphicHeight, 2));
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
                layerCanvasCTX.translate(layerCanvasCTX.canvas.width / 2, layerCanvasCTX.canvas.width / 2);
                layerCanvasCTX.drawImage(pythagoreanCanvas, (-layerCanvasCTX.canvas.width / 2) + x - scale, (-layerCanvasCTX.canvas.height / 2) + y - scale, layerCanvasCTX.canvas.width + (2 * scale), layerCanvasCTX.canvas.width + (2 * scale));
                layerCanvasCTX.resetTransform();
                resolve(layerCanvas);
            }
        }
    })
}

// create canvasObject part with designObject part
const createCanvasObjectPart = async (designLayers, property) => {
    const canvasLayers = [];
    for (let layer in designLayers) {
        if (designLayers[layer].type === 'color') {
            const thisLayer = await createColorLayerCanvas(designLayers[layer], property)
            canvasLayers.push(thisLayer)
        }
        else if (designLayers[layer].type === 'graphic') {
            canvasLayers.push(await createGraphicLayerCanvas(designLayers[layer], property))
        }
    }

    return { layers: canvasLayers }
}

// turn designObject into canvasObject
export const designObjectToCanvasObject = (design) => {
    return new Promise((resolve, reject) => {
        const canvasObject = {};
        const createAllParts = async () => {
            for (let property in design.parts) {
                canvasObject[property] = await createCanvasObjectPart(design.parts[property].layers, property)
            }
            for (let property in design.overlays) {
                canvasObject[property] = await createCanvasObjectPart(design.overlays[property].layers, property)
            }
            resolve(canvasObject)
        }
        createAllParts();
        // return canvasObject
    })
}

// turn canvasObject into a finalTexture
export const canvasObjectToTextureCanvas = (canvasObject, finalCanvas) => {
    const finalCanvasCTX = finalCanvas.getContext('2d');
    for (let property in canvasObject) {
        const { x, y, width, height } = partsObject[property]
        for (let layer in canvasObject[property].layers) {
            const layerCanvas = canvasObject[property].layers[layer]
            finalCanvasCTX.drawImage(layerCanvas, x, y, width, height)
        }
    }
}

// update finalTexture from canvasObject part
const redrawCanvasObjectPart = (finalCanvas, canvasObjectPart, property, texture, graphicVisualCanvas) => {
    const finalCanvasCTX = finalCanvas.getContext('2d');
    const graphicCTX = graphicVisualCanvas.getContext('2d');
    const { x, y, width, height } = partsObject[property]
    for (let layer in canvasObjectPart.layers) {
        const layerCanvas = canvasObjectPart.layers[layer]
        finalCanvasCTX.drawImage(layerCanvas, x, y, width, height)
        graphicCTX.drawImage(layerCanvas, 0, 0, 4096, 4096)
    }
    texture.needsUpdate = true;
}

// update part layer in canvasObject, then redraw
export const updateLayer = async (part, layerIndex, layerObject, canvasObject, canvasTexture, texture, graphicVisualCanvas) => {
    // update canvasObject layer
    let layerCanvas;
    if (layerObject.type === 'color') {
        layerCanvas = await createColorLayerCanvas(layerObject, part)
        console.log('done')
    }
    else {
        layerCanvas = await createGraphicLayerCanvas(layerObject, part)
    }
    console.log(canvasObject);
    canvasObject[part].layers[layerIndex] = layerCanvas;
    // redraw part
    console.log('here')
    redrawCanvasObjectPart(canvasTexture, canvasObject[part], part, texture, graphicVisualCanvas)
}

// update graphicVisualCanvas
export const updateGraphicVisualCanvas = (graphicVisualCanvas, partName, canvasObject) => {
    const graphicCTX = graphicVisualCanvas.getContext('2d');
    graphicCTX.clearRect(0, 0, 4096, 4096)
    for (let layer in canvasObject[partName].layers) {
        const layerCanvas = canvasObject[partName].layers[layer]
        graphicCTX.drawImage(layerCanvas, 0, 0, 4096, 4096)
    }
}

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
            thisLayer.scale += distance;
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
        updateLayer(partName, layerIndex, thisLayer, canvasObject, textureCanvas, texture, graphicVisualCanvas)
    }
    else if (changeArray[0] === 'color-changed') {
        const partName = changeArray[1]
        const layerIndex = changeArray[2];
        const newColor = changeArray[3]
        const tempDesign = JSON.parse(JSON.stringify(design));
        let thisLayer;
        if (partName === 'outerOverlay') {
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
        else {
            tempDesign.parts[partName].layers.push({
                type: 'graphic',
                link: 'assets/images/japanese.png',
                x: 0,
                y: 0,
                scale: 500,
                rotation: 0
            });
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

const addLayerToCanvasObject = async (canvasObject, partName, layerObject, textureCanvas, texture, graphicVisualCanvas) => {
    if (layerObject.type === 'color') {
        const newLayerCanvas = await createColorLayerCanvas(layerObject, partName)
        canvasObject[partName].layers.push(newLayerCanvas)
    }
    else if (layerObject.type === 'graphic') {
        const newLayerCanvas = await createGraphicLayerCanvas(layerObject, partName)
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