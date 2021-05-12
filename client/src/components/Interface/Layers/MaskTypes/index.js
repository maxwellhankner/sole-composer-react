import React from 'react';
import {
  LeftInterfaceContainer,
  InterfaceTitle,
  InterfaceSingleButtons,
  InterfaceButtonBox,
  InterfaceButton,
} from '../../../designerui';

function MaskTypes({ props }) {
  const { design, currentPartName, handleAddMaskLayer, setLayersView } = props;
  return (
    <LeftInterfaceContainer>
      <InterfaceTitle>Select Mask Type</InterfaceTitle>

      <InterfaceSingleButtons>
        {design.configData.maskTypes[currentPartName].map((type, i) => (
          <InterfaceButtonBox key={i}>
            <InterfaceButton
              active
              onClick={() => {
                handleAddMaskLayer(type[0], type[1]);
                setLayersView('LayersMain');
              }}
            >
              {type[0]}
            </InterfaceButton>
          </InterfaceButtonBox>
        ))}
        <InterfaceButtonBox>
          <InterfaceButton active onClick={() => setLayersView('LayersMain')}>
            Cancel
          </InterfaceButton>
        </InterfaceButtonBox>
      </InterfaceSingleButtons>
    </LeftInterfaceContainer>
  );
}

export default MaskTypes;
