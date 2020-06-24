import React, { useEffect } from 'react';
import { FaArrowUp, FaArrowDown, FaArrowRight, FaArrowLeft, FaUndoAlt, FaRedoAlt, FaArrowsAlt, FaCompressArrowsAlt } from 'react-icons/fa'
import './GraphicEditor.css';

function GraphicEditor({ setLayersView, currentLayer, graphicVisualCanvas, currentPartName, handleUpdateGraphicVisualCanvas, handleDesignChangeManager }) {

    handleUpdateGraphicVisualCanvas(currentPartName)

    const handleMoveGraphic = (direction, distance) => {
        handleDesignChangeManager(['graphic-moved', currentPartName, currentLayer, direction, distance])
    }

    const handleGraphicVisual = () => {
        let div = document.getElementById("graphic-visual-container")
        div.innerHTML = '';
        div.appendChild(graphicVisualCanvas)
    }

    useEffect(() => {
        handleGraphicVisual()
    })

    

    return (
        <div className="graphic-editor-container">
            <div className='graphic-editor-buttons'>
                <button className="graphic-edit-button" id='up-button' onClick={() => handleMoveGraphic('vert', -40)} ><FaArrowUp /></button>
                <button className="graphic-edit-button" id='down-button' onClick={() => handleMoveGraphic('vert', 40)} ><FaArrowDown /></button>
                <button className="graphic-edit-button" id='left-button' onClick={() => handleMoveGraphic('hor', -40)} ><FaArrowLeft /></button>
                <button className="graphic-edit-button" id='right-button' onClick={() => handleMoveGraphic('hor', 40)} ><FaArrowRight /></button>
                <button className="graphic-edit-button" id='scale-up-button' onClick={() => handleMoveGraphic('scale', 60)} ><FaArrowsAlt /></button>
                <button className="graphic-edit-button" id='scale-down-button' onClick={() => handleMoveGraphic('scale', -60)} ><FaCompressArrowsAlt /></button>
                <button className="graphic-edit-button" id='clockwise-button' onClick={() => handleMoveGraphic('rotate', 5)} ><FaRedoAlt /></button>
                <button className="graphic-edit-button" id='counterclockwise-button' onClick={() => handleMoveGraphic('rotate', -5)} ><FaUndoAlt /></button>
                <button className="graphic-interface-button" id='reset-button' onClick={() => handleMoveGraphic('reset', 0)} >Reset</button>
                <button className="graphic-interface-button" id='back-button' onClick={() => setLayersView('Layers')} >Back</button>
            </div>
            <div id="graphic-visual-container"></div>
        </div>
    );
}

export default GraphicEditor;