import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { handleConvertPartName } from '../../../../../utils/convertPartNames';
import {
  PartSelectorContainer,
  PartSelectorTitle,
  PartSelectorButton,
} from './styledComponents';

function PartSelector({
  design,
  currentPart,
  setCurrentPart,
  setCurrentLayer,
  setLayersView,
}) {
  const numberOfParts = design.configData.partsArray.length;
  const arrayOfParts = design.configData.partsArray;

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
    <PartSelectorContainer>
      <PartSelectorButton
        onClick={() => {
          handlePartChange(-1);
          setCurrentLayer(-1);
        }}
      >
        <FaChevronLeft />
      </PartSelectorButton>
      <PartSelectorTitle
        className="partname-button"
        onClick={() => {
          setLayersView('PartList');
        }}
      >
        {handleConvertPartName(arrayOfParts[currentPart])}
      </PartSelectorTitle>
      <PartSelectorButton
        onClick={() => {
          handlePartChange(1);
          setCurrentLayer(-1);
        }}
      >
        <FaChevronRight />
      </PartSelectorButton>
    </PartSelectorContainer>
  );
}

export default PartSelector;
