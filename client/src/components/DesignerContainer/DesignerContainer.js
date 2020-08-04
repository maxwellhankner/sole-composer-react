import React, { useState, useEffect, useRef } from 'react';
import './DesignerContainer.css';
import Scene from '../../components/Scene/Scene.js';
import Interface from '../../components/Interface/Interface.js';
import { canvasObjectToTextureCanvas, designObjectToCanvasObject, updateGraphicVisualCanvas, designChangeManager, overlayCanvasObjectToTextureCanvas, overlayChangeManager } from '../../helpers/drawfunctions';

function DesignerContainer({ designSpec, texture, textureCanvas, outerOverlayCanvas, innerOverlayCanvas, graphicVisualCanvas }) {

    const [design, setDesign] = useState(designSpec);

    const canvasObjectRef = useRef();
    const overlaysCanvasObjectRef = useRef();

    const handleUpdateGraphicVisualCanvas = (partName) => {
        if (partName === 'outerOverlay' || partName === 'innerOverlay') {
            updateGraphicVisualCanvas(graphicVisualCanvas, partName, overlaysCanvasObjectRef.current)
        }
        else {
            updateGraphicVisualCanvas(graphicVisualCanvas, partName, canvasObjectRef.current)
        }
    }

    // Update design and canvasObject as needed depending on params
    const handleDesignChangeManager = (changeArray) => {
        if (changeArray[1] === 'outerOverlay' || changeArray[1] === 'innerOverlay') {
            overlayChangeManager(changeArray, design, setDesign, texture, textureCanvas, graphicVisualCanvas, canvasObjectRef.current, outerOverlayCanvas, overlaysCanvasObjectRef.current)
        }
        else {
            designChangeManager(changeArray, design, setDesign, texture, textureCanvas, graphicVisualCanvas, canvasObjectRef.current);
        }
    }

    useEffect(() => {
        if (!canvasObjectRef.current) {
            const buildTexture = async () => {
                overlaysCanvasObjectRef.current = await designObjectToCanvasObject(design, 'overlaysCanvasObject');
                overlayCanvasObjectToTextureCanvas(overlaysCanvasObjectRef.current, outerOverlayCanvas, 'outerOverlay', graphicVisualCanvas)
                overlayCanvasObjectToTextureCanvas(overlaysCanvasObjectRef.current, innerOverlayCanvas, 'innerOverlay', graphicVisualCanvas)

                canvasObjectRef.current = await designObjectToCanvasObject(design, 'partsCanvasObject', [outerOverlayCanvas, innerOverlayCanvas]);
                canvasObjectToTextureCanvas(canvasObjectRef.current, textureCanvas, texture)
            }
            buildTexture()
        }
    })

    return (
        <div className="designer-container">
            <Scene design={design} texture={texture} textureCanvas={textureCanvas} />
            <Interface design={design} setDesign={setDesign} graphicVisualCanvas={graphicVisualCanvas} handleUpdateGraphicVisualCanvas={handleUpdateGraphicVisualCanvas} handleDesignChangeManager={handleDesignChangeManager} />
        </div>
    );


}

export default DesignerContainer;