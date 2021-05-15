import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { handleConvertPartName } from '../../../../../utils/convertPartNames';
import {
  PartSelectorContainer,
  PartSelectorTitle,
  PartSelectorButton,
  PartSelectorButtonBox,
  PartSelectorTitleBox,
} from './styledComponents';
import { InterfaceSingleButtons } from '../../../../designerui';

function PartSelector({
  design,
  currentPart,
  setCurrentPart,
  setCurrentLayer,
  setLayersView,
  currentShoe,
  setCurrentShoe,
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

  const handleShoeChange = () => {
    if (currentShoe === 'right') {
      setCurrentShoe('left');
    } else {
      setCurrentShoe('right');
    }
  };

  return (
    <InterfaceSingleButtons>
      <PartSelectorContainer>
        <PartSelectorButtonBox>
          <PartSelectorButton
            active
            onClick={() => {
              handlePartChange(-1);
              setCurrentLayer(-1);
            }}
          >
            <FaChevronLeft />
          </PartSelectorButton>
        </PartSelectorButtonBox>

        <PartSelectorButtonBox>
          <PartSelectorButton
            active
            onClick={() => {
              handleShoeChange(-1);
              setCurrentLayer(-1);
            }}
          >
            {currentShoe[0].toUpperCase()}
          </PartSelectorButton>
        </PartSelectorButtonBox>

        <PartSelectorTitleBox>
          <PartSelectorTitle
            className="partname-button"
            onClick={() => {
              setLayersView('PartList');
            }}
          >
            {handleConvertPartName(arrayOfParts[currentPart])}
          </PartSelectorTitle>
        </PartSelectorTitleBox>

        <PartSelectorButtonBox>
          <PartSelectorButton
            active
            onClick={() => {
              handlePartChange(1);
              setCurrentLayer(-1);
            }}
          >
            <FaChevronRight />
          </PartSelectorButton>
        </PartSelectorButtonBox>
      </PartSelectorContainer>
    </InterfaceSingleButtons>
  );
}

export default PartSelector;
