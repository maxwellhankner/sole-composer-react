import React from 'react';
import {
  LeftInterfaceContainer,
  InterfaceTitle,
  InterfaceSingleButtons,
  InterfaceButtonBox,
  InterfaceButton,
} from '../../../designerui';
import {
  PartsBox,
  AnotherPartsScrollBox,
  PartsScrollBox,
  PartButton,
} from './styledComponents';

function PartList({ props }) {
  const {
    design,
    setCurrentPart,
    setLayersView,
    setCurrentLayer,
    currentPartName,
  } = props;

  return (
    <LeftInterfaceContainer>
      <InterfaceTitle>Select Part</InterfaceTitle>
      <PartsBox>
        <AnotherPartsScrollBox>
          <PartsScrollBox>
            {design.configData.partsArray.map((part, i) => (
              <PartButton
                key={i}
                active={currentPartName === part}
                onClick={() => {
                  setCurrentLayer(-1);
                  setCurrentPart(i);
                  setLayersView('LayersMain');
                }}
              >
                {part}
              </PartButton>
            ))}
          </PartsScrollBox>
        </AnotherPartsScrollBox>
      </PartsBox>

      <InterfaceSingleButtons>
        <InterfaceButtonBox>
          <InterfaceButton active onClick={() => setLayersView('LayersMain')}>
            Back
          </InterfaceButton>
        </InterfaceButtonBox>
      </InterfaceSingleButtons>
    </LeftInterfaceContainer>
  );
}

export default PartList;
