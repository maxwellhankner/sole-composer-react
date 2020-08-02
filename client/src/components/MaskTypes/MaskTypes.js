import React from 'react';
import './MaskTypes.css';
import { maskTypes } from '../../helpers/partsObject';

function MaskTypes({ handleAddMaskLayer, setLayersView, currentPartName }) {

    return (
        <div className="design-preview-container">
            <div className='view-title'>
                <p>Select Mask Type</p>
            </div>
            
            {maskTypes[currentPartName].map((type, i) =>
                <div key={i} className='change-view-button'>
                    <button onClick={() => {
                        console.log('clicked');
                        handleAddMaskLayer(type[0], type[1]);
                        setLayersView('Layer');
                    }}>
                        {type[0]}
                    </button>
                </div>
            )}
        </div >
    );
}

export default MaskTypes;