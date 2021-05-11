import React from 'react';
import { VisibilityContainer } from './styledComponents';
import Toggle from './Toggle';

function Visibility({
  currentShoe,
  setCurrentShoe,
  shoeVisibility,
  setShoeVisibility,
}) {
  return (
    <VisibilityContainer>
      <Toggle
        currentShoe={currentShoe}
        setCurrentShoe={setCurrentShoe}
        visibility={shoeVisibility}
        setVisibility={setShoeVisibility}
      />
    </VisibilityContainer>
  );
}

export default Visibility;
