import React from 'react';
import './CurrentColors.css';


function CurrentColors({ colorsArray, handleColorChange, currentLayer }) {

    return (
        <div className='current-colors-container'>
            <div className='current-colors-scroll'>
                {colorsArray.map((color, i) =>
                    <button key={i} style={{ backgroundColor: color }} onClick={() => handleColorChange(currentLayer, color)} ></button>
                )}
            </div>
        </div>
    );
}

export default CurrentColors;