import React from 'react';
import './CurrentGraphics.css';

function CurrentGraphics({ graphicsArray, handleAddGraphicLayer }) {
  return (
    <div className='current-graphics-container'>
      {graphicsArray.map((graphic, i) => (
        <div
          className='current-graphics-item'
          key={i}
          onClick={() => handleAddGraphicLayer(graphic)}
        >
          <img src={`/api/assets/images/${graphic}`} alt='used-already'></img>
        </div>
      ))}
    </div>
  );
}

export default CurrentGraphics;
