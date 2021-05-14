import React, { useState, useEffect } from 'react';
import { cloneDeep } from 'lodash';
import { ColorPicker } from '../../designerui';
import {
  LeftInterfaceContainer,
  InterfaceSingleButtons,
  InterfaceTitleAndIcon,
  InterfaceTitleBox,
  InterfaceTitle,
  InterfaceIconButtonBox,
  InterfaceIconButton,
} from '../../designerui';
import { BaseColorRadioBox, BaseColorOption } from './styledComponents';
import { FaCheck } from 'react-icons/fa';

function ChangeBaseColor({
  design,
  setDesign,
  setCanSave,
  handleUpdateBaseColor,
  currentShoe,
  setCurrentShoe,
}) {
  const [colorsArray, setColorsArray] = useState([]);

  useEffect(() => {
    const getDesignColors = () => {
      const colors = [];
      for (const property in design.outlineData.parts) {
        for (const layer in design.outlineData.parts[property].right) {
          const type = design.outlineData.parts[property].right[layer].type;
          if (type === 'color' || type === 'mask') {
            const thisColor =
              design.outlineData.parts[property].right[layer].color;
            if (!colors.includes(thisColor)) {
              colors.push(thisColor);
            }
          }
        }
        for (const layer in design.outlineData.parts[property].left) {
          const type = design.outlineData.parts[property].left[layer].type;
          if (type === 'color' || type === 'mask') {
            const thisColor =
              design.outlineData.parts[property].left[layer].color;
            if (!colors.includes(thisColor)) {
              colors.push(thisColor);
            }
          }
        }
      }
      for (const property in design.outlineData.overlays) {
        for (const layer in design.outlineData.overlays[property].right) {
          if (
            design.outlineData.overlays[property].right[layer].type === 'color'
          ) {
            const thisColor =
              design.outlineData.overlays[property].right[layer].color;
            if (!colors.includes(thisColor)) {
              colors.push(thisColor);
            }
          }
        }
        for (const layer in design.outlineData.overlays[property].left) {
          if (
            design.outlineData.overlays[property].left[layer].type === 'color'
          ) {
            const thisColor =
              design.outlineData.overlays[property].left[layer].color;
            if (!colors.includes(thisColor)) {
              colors.push(thisColor);
            }
          }
        }
      }

      const rightBaseColor = design.outlineData.baseColors.right;
      if (!colors.includes(rightBaseColor)) {
        colors.push(rightBaseColor);
      }

      const leftBaseColor = design.outlineData.baseColors.left;
      if (!colors.includes(leftBaseColor)) {
        colors.push(leftBaseColor);
      }

      return colors;
    };

    setColorsArray(getDesignColors());
  }, [design, setColorsArray]);

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
      <InterfaceTitleAndIcon>
        <InterfaceTitleBox>
          <InterfaceTitle>Base Color</InterfaceTitle>
        </InterfaceTitleBox>
        <InterfaceIconButtonBox>
          <InterfaceIconButton active onClick={() => updateBaseColor()}>
            <FaCheck />
          </InterfaceIconButton>
        </InterfaceIconButtonBox>
      </InterfaceTitleAndIcon>
      <InterfaceSingleButtons>
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
      </InterfaceSingleButtons>

      <ColorPicker
        colorsArray={colorsArray}
        color={baseColor}
        onChangeComplete={handleColorChange}
        handleColorChange={handleColorChange}
      />
    </LeftInterfaceContainer>
  );
}

export default ChangeBaseColor;
