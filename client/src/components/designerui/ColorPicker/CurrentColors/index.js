import React from 'react';
import {
  CurrentColorsScroll,
  CurrentColorsAnotherScroll,
  CurrentColorsOption,
} from './styledComponents';
import { InterfaceButtonBox } from '../../../designerui';

function CurrentColors({ colorsArray, handleColorChange }) {
  return (
    <InterfaceButtonBox>
      <CurrentColorsAnotherScroll>
        <CurrentColorsScroll>
          {colorsArray.map((color, i) => (
            <CurrentColorsOption
              color={color}
              key={i}
              onClick={() => handleColorChange(color)}
            ></CurrentColorsOption>
          ))}
        </CurrentColorsScroll>
      </CurrentColorsAnotherScroll>
    </InterfaceButtonBox>
  );
}

export default CurrentColors;
