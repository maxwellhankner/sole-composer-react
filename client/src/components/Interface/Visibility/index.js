import React from 'react';
import { VisibilityContainer } from './styledComponents';
import Toggle from './Toggle';
import { LeftInterfaceContainer } from '../../designerui';

function Visibility({
  currentShoe,
  setCurrentShoe,
  shoeVisibility,
  setShoeVisibility,
}) {
  return (
    <VisibilityContainer>
      <LeftInterfaceContainer>
        <Toggle
          currentShoe={currentShoe}
          setCurrentShoe={setCurrentShoe}
          visibility={shoeVisibility}
          setVisibility={setShoeVisibility}
        />
      </LeftInterfaceContainer>
    </VisibilityContainer>
  );
}

export default Visibility;
