import React from 'react';
import './PartSelector.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { handleConvertPartName } from '../../helpers/convertPartNames';

function PartSelector({
  design,
  currentPart,
  setCurrentPart,
  setFocusLayer,
  setLayersView,
}) {
  const numberOfParts = design.config.partsArray.length;
  const arrayOfParts = design.config.partsArray;

  const handlePartChange = (i) => {
    if (currentPart === 0 && i < 0) {
      setCurrentPart(numberOfParts - 1);
    } else if (currentPart === numberOfParts - 1 && i > 0) {
      setCurrentPart(0);
    } else {
      setCurrentPart(currentPart + i);
    }
  };

  return (
    <div className='part-selector-container'>
      <div>
        <button
          className='change-part-button'
          onClick={() => {
            handlePartChange(-1);
            setFocusLayer(-1);
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          className='partname-button'
          onClick={() => {
            setLayersView('PartList');
          }}
        >
          {handleConvertPartName(arrayOfParts[currentPart])}
        </button>
        <button
          className='change-part-button'
          onClick={() => {
            handlePartChange(1);
            setFocusLayer(-1);
          }}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default PartSelector;
