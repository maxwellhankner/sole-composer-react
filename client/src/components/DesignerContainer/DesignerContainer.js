import React, { useState, useEffect, useRef } from 'react';
import './DesignerContainer.css';
import { createTexture, createCanvas, createGraphicVisualCanvas } from '../../helpers/createFunctions';
import NavBar from '../../components/NavBar/NavBar.js';
import Scene from '../../components/Scene/Scene.js';
import Interface from '../../components/Interface/Interface.js';
import { canvasObjectToTextureCanvas, designObjectToCanvasObject, updateCanvasObjectPart, updateLayer } from '../../helpers/drawfunctions';
// import { designObject } from '../../helpers/partsObject'

function DesignerContainer({ designSpec }) {

    console.log('designer component rendered')

    const [design, setDesign] = useState(designSpec);

    const [textureCanvas] = useState(createCanvas());

    const [texture] = useState(createTexture(textureCanvas));

    const canvasObjectRef = useRef();

    const [graphicVisualCanvas] = useState(createGraphicVisualCanvas())

    // const graphicVisualCanvas = useRef();
    // graphicVisualCanvas.current = createGraphicVisualCanvas();

    const handlePartUpdate = (part) => {
        console.log('handle part update')
        updateCanvasObjectPart(design, part, canvasObjectRef.current, textureCanvas, texture, graphicVisualCanvas);
    }

    const handleUpdateLayer = (part, layer, layerObject) => {
        console.log('handle update layer')
        updateLayer(part, layer, layerObject, canvasObjectRef.current, textureCanvas, texture, graphicVisualCanvas)
    }

    useEffect(() => {
        console.log('design useEffect')

        const buildTexture = async () => {
            console.log('buildTexture')
            canvasObjectRef.current = await designObjectToCanvasObject(design);
            canvasObjectToTextureCanvas(canvasObjectRef.current, textureCanvas)
        }
        buildTexture()


    }, [])


    return (
        <div className="designer-container">
            <NavBar />
            <Scene design={design} texture={texture} textureCanvas={textureCanvas} />
            <Interface design={design} setDesign={setDesign} graphicVisualCanvas={graphicVisualCanvas} handlePartUpdate={handlePartUpdate} handleUpdateLayer={handleUpdateLayer} />
        </div>
    );


}

export default DesignerContainer;