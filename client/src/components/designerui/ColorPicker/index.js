import React from 'react';
import { CustomPicker } from 'react-color';
import CurrentColors from './CurrentColors';
import {
  EditableInput,
  Hue,
  Saturation,
} from 'react-color/lib/components/common';
import {
  CustomColorContainer,
  HueContainer,
  SaturationContainer,
  CustomColorInputContainer,
  CustomColorInputSwatch,
} from './styledComponents';
import {
  CustomColorPointer,
  CustomColorPointerOffset,
} from './CustomColorPointers';
import {
  InterfaceSingleButtons,
  InterfaceDoubleButtons,
  InterfaceButton,
  InterfaceButtonBox,
} from '../';

export const CustomColor = ({
  hex,
  hsl,
  hsv,
  onChange,
  handleColorChange,
  colorsArray,
}) => {
  return (
    <CustomColorContainer>
      <InterfaceSingleButtons>
        <HueContainer>
          <Hue
            hsl={hsl}
            onChange={onChange}
            pointer={CustomColorPointerOffset}
          />
        </HueContainer>

        <SaturationContainer>
          <Saturation
            hsl={hsl}
            hsv={hsv}
            onChange={onChange}
            pointer={CustomColorPointer}
          />
        </SaturationContainer>

        <CurrentColors
          colorsArray={colorsArray}
          handleColorChange={handleColorChange}
        />
      </InterfaceSingleButtons>

      <InterfaceDoubleButtons>
        <InterfaceButtonBox>
          <InterfaceButton
            active
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
          <CustomColorInputContainer>
            <EditableInput value={hex} onChange={onChange} />
            <CustomColorInputSwatch color={hex}></CustomColorInputSwatch>
          </CustomColorInputContainer>
        </InterfaceButtonBox>
      </InterfaceDoubleButtons>
    </CustomColorContainer>
  );
};

export default CustomPicker(CustomColor);
