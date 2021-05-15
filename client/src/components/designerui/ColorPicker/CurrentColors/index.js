import React from 'react';
import { CurrentColorsScroll, CurrentColorsOption } from './styledComponents';
import { InterfaceButtonBox } from '../../../designerui';

function CurrentColors({ colorsArray, handleColorChange }) {
  return (
    <InterfaceButtonBox>
      <CurrentColorsScroll>
        {colorsArray.map((color, i) => (
          <CurrentColorsOption
            color={color}
            key={i}
            onClick={() => handleColorChange(color)}
          ></CurrentColorsOption>
        ))}
      </CurrentColorsScroll>
    </InterfaceButtonBox>
  );
}

export default CurrentColors;
