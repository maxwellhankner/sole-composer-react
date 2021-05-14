import React from 'react';
import {
  CurrentColorsScroll,
  CurrentColorsAnotherScroll,
  CurrentColorsOption,
} from './styledComponents';
import { InterfaceSingleButtons, InterfaceButtonBox } from '../designerui';

function CurrentColors({ colorsArray, handleColorChange }) {
  return (
    // <InterfaceSingleButtons>
    <InterfaceButtonBox>
      <CurrentColorsAnotherScroll>
        <CurrentColorsScroll>
          {colorsArray.map((color, i) => (
            <CurrentColorsOption
              color={color}
              key={i}
              // style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            ></CurrentColorsOption>
          ))}
        </CurrentColorsScroll>
      </CurrentColorsAnotherScroll>
    </InterfaceButtonBox>
    // </InterfaceSingleButtons>
  );
}

export default CurrentColors;
