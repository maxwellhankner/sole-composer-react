import React from 'react';
import {
  LeftInterfaceContainer,
  InterfaceTitle,
  InterfaceSingleButtons,
  InterfaceButtonBox,
  InterfaceButton,
} from '../../../designerui';

function AddLayerType({ props }) {
  const { design, currentPartName, handleAddLayer, setLayersView } = props;
  return (
    <LeftInterfaceContainer>
      <InterfaceTitle>Select Layer Type</InterfaceTitle>
      <InterfaceSingleButtons>
        {design.configData.layerTypes[currentPartName].types.map((type, i) => (
          <InterfaceButtonBox key={i}>
            {type === 'Mask' ? (
              <InterfaceButton
                active
                onClick={() => {
                  setLayersView('MaskTypes');
                }}
              >
                {type}
              </InterfaceButton>
            ) : type === 'Graphic' ? (
              <InterfaceButton
                active
                onClick={() => {
                  setLayersView('GraphicPicker');
                }}
              >
                {type}
              </InterfaceButton>
            ) : (
              <InterfaceButton
                active
                onClick={() => {
                  handleAddLayer(type);
                  setLayersView('LayersMain');
                }}
              >
                {type}
              </InterfaceButton>
            )}
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

export default AddLayerType;
