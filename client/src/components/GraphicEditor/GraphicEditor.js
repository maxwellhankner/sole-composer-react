import React, { useEffect } from 'react';
import { FaArrowUp, FaArrowDown, FaArrowRight, FaArrowLeft, FaUndoAlt, FaRedoAlt, FaArrowsAlt, FaCompressArrowsAlt } from 'react-icons/fa'
import './GraphicEditor.css';

function GraphicEditor({ setLayersView, design, setDesign, currentLayer, currentPartName }) {

    const handleMoveGraphic = (direction, distance) => {
        const tempDesign = JSON.parse(JSON.stringify(design));
        if (direction === 'vert') {
            tempDesign.parts[currentPartName].layers[currentLayer].y += distance;
        }
        else if (direction === 'hor') {
            tempDesign.parts[currentPartName].layers[currentLayer].x += distance;
        }
        else if (direction === 'scale') {
            tempDesign.parts[currentPartName].layers[currentLayer].scale += distance;
        }
        else if (direction === 'rotate') {
            tempDesign.parts[currentPartName].layers[currentLayer].rotation += distance;
        }
        else if (direction === 'reset') {
            tempDesign.parts[currentPartName].layers[currentLayer].y = 0;
            tempDesign.parts[currentPartName].layers[currentLayer].x = 0;
            tempDesign.parts[currentPartName].layers[currentLayer].scale = 500;
            tempDesign.parts[currentPartName].layers[currentLayer].rotation = 0;
        }
        
        setDesign(tempDesign);
    }

    useEffect(() => {
        handleGraphicVisual()
    }, [])

    const handleGraphicVisual = () => {
        const graphicVisualCanvas = document.createElement('canvas');
        graphicVisualCanvas.id = 'graphic-visual-canvas';
        graphicVisualCanvas.width = 4096;
        graphicVisualCanvas.height = 4096;
        var gvcCTX = graphicVisualCanvas.getContext('2d');
        gvcCTX.fillStyle = '#555';
        gvcCTX.fillRect(0, 0, 4096, 4096);

        let div = document.getElementById("graphic-visual-container")
        div.innerHTML = '';
        div.appendChild(graphicVisualCanvas)
    }

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