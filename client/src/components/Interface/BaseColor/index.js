import React, { useState } from 'react';
import { cloneDeep } from 'lodash';
import CustomColor from '../../CustomColor/CustomColor';
import {
  LeftInterfaceContainer,
  InterfaceButtons,
  InterfaceButtonBox,
  InterfaceButton,
} from '../../designerui';
import { BaseColorRadioBox, BaseColorOption } from './styledComponents';

function ChangeBaseColor({
  handleViewChange,
  design,
  setDesign,
  setCanSave,
  handleUpdateBaseColor,
  currentShoe,
  setCurrentShoe,
}) {
  const initialRadioOption = () => {
    if (
      design.outlineData.baseColors.left === design.outlineData.baseColors.right
    ) {
      return 'both';
    } else {
      return currentShoe;
    }
  };

  const [radioOption, setRadioOption] = useState(initialRadioOption());
  const [baseColor, setBaseColor] = useState(
    design.outlineData.baseColors[currentShoe]
  );

  const updateBaseColor = () => {
    const tempDesign = cloneDeep(design);
    if (radioOption === 'left') {
      tempDesign.outlineData.baseColors.left = baseColor;
    } else if (radioOption === 'right') {
      tempDesign.outlineData.baseColors.right = baseColor;
    } else if (radioOption === 'both') {
      tempDesign.outlineData.baseColors.left = baseColor;
      tempDesign.outlineData.baseColors.right = baseColor;
    }
    setCanSave(true);
    setDesign(tempDesign);
    handleUpdateBaseColor(tempDesign);
  };

  const handleColorChange = (color) => {
    const newColor = color.hex || color;
    setBaseColor(newColor);
  };

  const handleRadioOption = (option) => {
    setRadioOption(option);
    if (option === 'right' || option === 'left') {
      setCurrentShoe(option);
      setBaseColor(design.outlineData.baseColors[option]);
    }
  };

  return (
    <LeftInterfaceContainer>
      <BaseColorRadioBox>
        <BaseColorOption
          active={radioOption === 'left'}
          onClick={() => {
            handleRadioOption('left');
          }}
        >
          Left
        </BaseColorOption>
        <BaseColorOption
          active={radioOption === 'both'}
          onClick={() => {
            handleRadioOption('both');
          }}
        >
          Both
        </BaseColorOption>
        <BaseColorOption
          active={radioOption === 'right'}
          onClick={() => {
            handleRadioOption('right');
          }}
        >
          Right
        </BaseColorOption>
      </BaseColorRadioBox>
      <CustomColor color={baseColor} onChangeComplete={handleColorChange} />
      <InterfaceButtons>
        <InterfaceButtonBox>
          <InterfaceButton
            onClick={() =>
              handleColorChange(
                '#' +
                  (
                    '00000' + ((Math.random() * (1 << 24)) | 0).toString(16)
                  ).slice(-6)
              )
            }
          >
            Random
          </InterfaceButton>
        </InterfaceButtonBox>
        <InterfaceButtonBox>
          <InterfaceButton onClick={() => updateBaseColor()}>
            Apply
          </InterfaceButton>
        </InterfaceButtonBox>
        <InterfaceButtonBox>
          <InterfaceButton onClick={() => handleViewChange('DesignInfo')}>
            Done
          </InterfaceButton>
        </InterfaceButtonBox>
      </InterfaceButtons>
    </LeftInterfaceContainer>
  );
}

export default ChangeBaseColor;
