import React, { useState, useEffect, useRef } from 'react';
import './DesignerContainer.css';

import NavBar from '../../components/NavBar/NavBar.js';
import Scene from '../../components/Scene/Scene.js';
import Interface from '../../components/Interface/Interface.js';
import { canvasObjectToTextureCanvas, designObjectToCanvasObject, updateGraphicVisualCanvas, designChangeManager } from '../../helpers/drawfunctions';

function DesignerContainer({ designSpec, texture, textureCanvas, graphicVisualCanvas }) {

    const [design, setDesign] = useState(designSpec);

    const canvasObjectRef = useRef();

    const handleUpdateGraphicVisualCanvas = (partName) => {
        updateGraphicVisualCanvas(graphicVisualCanvas, partName, canvasObjectRef.current)
    }

    // Update design and canvasObject as needed depending on params
    const handleDesignChangeManager = (changeArray) => {
        designChangeManager(changeArray, design, setDesign, texture, textureCanvas, graphicVisualCanvas, canvasObjectRef.current);
    }

    useEffect(() => {
        
        if (!canvasObjectRef.current) {
            const buildTexture = async () => {
                console.log('buildTexture()')
                canvasObjectRef.current = await designObjectToCanvasObject(design);
                canvasObjectToTextureCanvas(canvasObjectRef.current, textureCanvas)
            }
            buildTexture()
        }
    }, [design, textureCanvas])

    return (
        <div className="designer-container">
            <NavBar />
            <Scene design={design} texture={texture} textureCanvas={textureCanvas} />
            <Interface design={design} setDesign={setDesign} graphicVisualCanvas={graphicVisualCanvas} handleUpdateGraphicVisualCanvas={handleUpdateGraphicVisualCanvas} handleDesignChangeManager={handleDesignChangeManager} />
        </div>
    );


}

export default DesignerContainer;