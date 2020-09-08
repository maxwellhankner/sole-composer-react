import { partsObject, canvasSize } from '../../helpers/partsObject';
import {
    createColorLayerCanvas,
    createGraphicLayerCanvas,
    createMaskLayerCanvas,
} from '../index';

//------------------------------------------- Part Change Functions
export const partChangeManager = (changeArray, design, setDesign, texture, textureCanvas, graphicVisualCanvas, canvasObject) => {
    if (changeArray[0] === 'graphic-moved') {
        const partName = changeArray[1];
        const layerIndex = changeArray[2];
        const direction = changeArray[3];
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
        const partName = changeArray[1];
        const layerIndex = changeArray[2];
        const newColor = changeArray[3];
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
        updateLayer(partName, layerIndex, thisLayer, canvasObject, textureCanvas, texture, graphicVisualCanvas);
    }
    else if (changeArray[0] === 'layer-added') {
        const partName = changeArray[1];
        const type = changeArray[2];
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
                scale: 1,
                rotation: 0
            });
        }
        else {
            const maskLink = changeArray[4];
            tempDesign.parts[partName].layers.push(
                {
                    type: 'mask',
                    link: maskLink,
                    color: '#000000'
                }
            )
        }
        setDesign(tempDesign);
        const layerObject = tempDesign.parts[partName].layers.slice(-1)[0];
        addLayerToCanvasObject({
			canvasObject,
			graphicVisualCanvas,
			layerObject,
			partName,
			texture,
			textureCanvas,
		});
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
};

const redrawCanvasObjectPart = (finalCanvas, canvasObjectPart, property, texture, graphicVisualCanvas) => {
    const finalCanvasCTX = finalCanvas.getContext('2d');
    const graphicCTX = graphicVisualCanvas.getContext('2d');
    graphicCTX.clearRect(0, 0, canvasSize, canvasSize);
    const { x, y, width, height } = partsObject[property];
    for (let layer in canvasObjectPart.layers) {
        const layerCanvas = canvasObjectPart.layers[layer];
        finalCanvasCTX.drawImage(layerCanvas, x, y, width, height);
        graphicCTX.drawImage(layerCanvas, 0, 0, canvasSize, canvasSize);
    }
    texture.needsUpdate = true;
};

const updateLayer = async (part, layerIndex, layerObject, canvasObject, canvasTexture, texture, graphicVisualCanvas) => {
    // update canvasObject layer
    let layerCanvas;
    if (layerObject.type === 'color') {
        layerCanvas = await createColorLayerCanvas(layerObject, part, canvasSize);
    }
    else if (layerObject.type === 'graphic') {
        layerCanvas = await createGraphicLayerCanvas(layerObject, part);
    }
    else {
        layerCanvas = await createMaskLayerCanvas(layerObject);
    }
    canvasObject[part].layers[layerIndex] = layerCanvas;
    // redraw part
    redrawCanvasObjectPart(canvasTexture, canvasObject[part], part, texture, graphicVisualCanvas);
};

const addLayerToCanvasObject = async ({
	canvasObject,
	graphicVisualCanvas,
	layerObject,
	partName,
	texture,
	textureCanvas,
}) => {
	if (layerObject.type === 'color') {
		const newLayerCanvas = await createColorLayerCanvas(
			layerObject,
            partName,
            canvasSize
		);
		canvasObject[partName].layers.push(newLayerCanvas);
	} else if (layerObject.type === 'graphic') {
		const newLayerCanvas = await createGraphicLayerCanvas(
			layerObject,
			partName
		);
		canvasObject[partName].layers.push(newLayerCanvas);
	} else {
		const newLayerCanvas = await createMaskLayerCanvas(
			layerObject
		);
		canvasObject[partName].layers.push(newLayerCanvas);
	}
	redrawCanvasObjectPart(
		textureCanvas,
		canvasObject[partName],
		partName,
		texture,
		graphicVisualCanvas
	);
};

const deleteLayerFromCanvasObject = (canvasObject, partName, layerIndex, textureCanvas, texture, graphicVisualCanvas) => {
    canvasObject[partName].layers.splice(layerIndex, 1);
    redrawCanvasObjectPart(textureCanvas, canvasObject[partName], partName, texture, graphicVisualCanvas);
};

const moveLayerInCanvasObject = (canvasObject, partName, layerIndex, direction, textureCanvas, texture, graphicVisualCanvas) => {
    let array = canvasObject[partName].layers;
    let tempElement = array[layerIndex];
    array[layerIndex] = array[layerIndex + direction];
    array[layerIndex + direction] = tempElement;
    canvasObject[partName].layers = array;
    redrawCanvasObjectPart(textureCanvas, canvasObject[partName], partName, texture, graphicVisualCanvas);
};