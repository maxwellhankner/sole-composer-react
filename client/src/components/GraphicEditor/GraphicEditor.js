import React from 'react';
import './GraphicEditor.css';

function GraphicEditor({ setLayersView, design, setDesign, currentLayer, currentPartName }) {

    const handleMoveGraphic = (direction, distance) => {
        const tempDesign = JSON.parse(JSON.stringify(design));
        if (direction === 'vert') {
            tempDesign.parts[currentPartName].layers[currentLayer].y += distance;
        }
        else {
            tempDesign.parts[currentPartName].layers[currentLayer].x += distance;
        }

        setDesign(tempDesign);
    }

    return (
        <div className="design-preview-container">
            <div className='view-title'>
                <p>Graphic Editor</p>
            </div>
            <div className='change-view-button'>
                <button onClick={() => setLayersView('Layers')} >Done</button>
            </div>
            <div className='change-view-button'>
                <button onClick={() => handleMoveGraphic('vert', -40)} >Up</button>
            </div>
            <div className='change-view-button'>
                <button onClick={() => handleMoveGraphic('vert', 40)} >Down</button>
            </div>
            <div className='change-view-button'>
                <button onClick={() => handleMoveGraphic('hor', -40)} >Left</button>
            </div>
            <div className='change-view-button'>
                <button onClick={() => handleMoveGraphic('hor', 40)} >Right</button>
            </div>
        </div>
    );
}

export default GraphicEditor;