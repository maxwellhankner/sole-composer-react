import React from 'react';
// import { FaEye } from 'react-icons/fa';
import { ToggleOptionBox, ToggleOptionButton } from './styledComponents';
import { InterfaceSingleButtons } from '../../../designerui';

function Toggle({ setCurrentShoe, visibility, setVisibility }) {
  const hanleShoeVisibility = (shoe) => {
    if (shoe === 'left') {
      if (visibility.left && visibility.right) {
        let visObj = { ...visibility };
        visObj.left = false;
        setVisibility(visObj);
        setCurrentShoe('right');
      } else if (visibility.left && !visibility.right) {
        let visObj = { ...visibility };
        visObj.left = false;
        visObj.right = true;
        setVisibility(visObj);
        setCurrentShoe('right');
      } else {
        let visObj = { ...visibility };
        visObj.left = true;
        setVisibility(visObj);
        setCurrentShoe('left');
      }
    } else {
      if (visibility.left && visibility.right) {
        let visObj = { ...visibility };
        visObj.right = false;
        setVisibility(visObj);
        setCurrentShoe('left');
      } else if (!visibility.left && visibility.right) {
        let visObj = { ...visibility };
        visObj.right = false;
        visObj.left = true;
        setVisibility(visObj);
        setCurrentShoe('left');
      } else {
        let visObj = { ...visibility };
        visObj.right = true;
        setVisibility(visObj);
        setCurrentShoe('right');
      }
    }
  };

  return (
    <InterfaceSingleButtons>
      <ToggleOptionBox>
        <ToggleOptionButton
          active={visibility.left}
          onClick={() => {
            hanleShoeVisibility('left');
          }}
        >
          Left
        </ToggleOptionButton>
      </ToggleOptionBox>
      <ToggleOptionBox>
        <ToggleOptionButton
          active={visibility.right}
          onClick={() => {
            hanleShoeVisibility('right');
          }}
        >
          Right
        </ToggleOptionButton>
      </ToggleOptionBox>
    </InterfaceSingleButtons>
  );
}

export default Toggle;
