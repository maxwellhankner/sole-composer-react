import React from 'react';
import './PartSelector.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { partsObject } from '../../helpers/partsObject'
import { handleConvertPartName } from '../../helpers/convertPartNames'

function PartSelector({ currentPart, setCurrentPart, setFocusLayer }) {

  const numberOfParts = Object.keys(partsObject).length
  const arrayOfParts = Object.keys(partsObject)

  const handlePartChange = (i) => {
    if (currentPart === 0 && i < 0) {
      setCurrentPart(numberOfParts - 1)
    }
    else if (currentPart === numberOfParts - 1 && i > 0) {
      setCurrentPart(0)
    }
    else {
      setCurrentPart(currentPart + i)
    }
  }

  return (
    <div className="part-selector-container">
      <div>
        <button onClick={() => {
          handlePartChange(-1);
          setFocusLayer(-1)
        }} ><FaChevronLeft /></button>
        <p>{handleConvertPartName(arrayOfParts[currentPart])}</p>
        <button onClick={() => {
          handlePartChange(1);
          setFocusLayer(-1);
        }} ><FaChevronRight /></button>
      </div>
    </div>
  );
}

export default PartSelector;