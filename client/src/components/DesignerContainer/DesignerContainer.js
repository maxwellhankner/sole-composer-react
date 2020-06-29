import React, { useState, useEffect, useRef } from 'react';
import './DesignerContainer.css';

import NavBar from '../../components/NavBar/NavBar.js';
import Scene from '../../components/Scene/Scene.js';
import Interface from '../../components/Interface/Interface.js';
import { canvasObjectToTextureCanvas, designObjectToCanvasObject, updateGraphicVisualCanvas, designChangeManager, overlayCanvasObjectToTextureCanvas, overlayChangeManager } from '../../helpers/drawfunctions';

function DesignerContainer({ designSpec, texture, textureCanvas, overlayCanvas, graphicVisualCanvas }) {

    const [design, setDesign] = useState(designSpec);

    const canvasObjectRef = useRef();
    const overlaysCanvasObjectRef = useRef();

    const handleUpdateGraphicVisualCanvas = (partName) => {
        if (partName === 'outerOverlay') {
            console.log('update visual')
            updateGraphicVisualCanvas(graphicVisualCanvas, partName, overlaysCanvasObjectRef.current)
        }
        else {
            updateGraphicVisualCanvas(graphicVisualCanvas, partName, canvasObjectRef.current)
        }
    }

    // Update design and canvasObject as needed depending on params
    const handleDesignChangeManager = (changeArray) => {
        if (changeArray[1] === 'outerOverlay') {
            overlayChangeManager(changeArray, design, setDesign, texture, textureCanvas, graphicVisualCanvas, canvasObjectRef.current, overlayCanvas, overlaysCanvasObjectRef.current)
        }
        else {
            designChangeManager(changeArray, design, setDesign, texture, textureCanvas, graphicVisualCanvas, canvasObjectRef.current);
        }
    }

    useEffect(() => {
        if (!canvasObjectRef.current) {
            const buildTexture = async () => {
                overlaysCanvasObjectRef.current = await designObjectToCanvasObject(design, 'overlaysCanvasObject');
                overlayCanvasObjectToTextureCanvas(overlaysCanvasObjectRef.current, overlayCanvas, graphicVisualCanvas)

                canvasObjectRef.current = await designObjectToCanvasObject(design, 'partsCanvasObject', overlayCanvas);
                canvasObjectToTextureCanvas(canvasObjectRef.current, textureCanvas)
            }
            buildTexture()
        }
    }, [design, textureCanvas, overlayCanvas])

    return (
        <div className="designer-container">
            <NavBar />
            <Scene design={design} texture={texture} textureCanvas={textureCanvas} />
            <Interface design={design} setDesign={setDesign} graphicVisualCanvas={graphicVisualCanvas} handleUpdateGraphicVisualCanvas={handleUpdateGraphicVisualCanvas} handleDesignChangeManager={handleDesignChangeManager} />
        </div>
    );


}

export default DesignerContainer;