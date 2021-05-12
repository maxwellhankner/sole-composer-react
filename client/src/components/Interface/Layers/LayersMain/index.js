import React from 'react';
import { handleConvertPartName } from '../../../../utils/convertPartNames';
import { FaChevronUp, FaChevronDown, FaPlus, FaTrash } from 'react-icons/fa';
import PartSelector from '../../../PartSelector/PartSelector';
import {
  LayersMainContainer,
  LayersMainDivider,
  LayersMainControlsContainer,
  LayersMainControlsLeft,
  LayersMainControlsTitle,
  LayersMainControlsRight,
  LayersBox,
  LayersScrollBox,
  AnotherScrollBox,
  LayerItem,
  LayerItemLeft,
  LayerItemLeftTitle,
  LayerItemRight,
} from './styledComponents';
import {
  InterfaceIconButtonBox,
  InterfaceIconButton,
} from '../../../designerui';

function LayersMain({ props }) {
  const {
    allLayers,
    currentPart,
    design,
    currentLayer,
    numberOfLayers,
    setCurrentLayer,
    setCurrentPart,
    setLayersView,
    handleDeleteLayer,
    handleEditLayer,
    handleMoveLayer,
  } = props;

  // These two functions just double check
  // Could do conditional in components onClick
  const deleteLayer = (index) => {
    if (index !== -1) {
      if (allLayers[index].type !== 'overlay') {
        handleDeleteLayer(index);
      }
    }
  };

  const moveLayer = (index, direction) => {
    if (index !== -1) {
      if (direction === -1) {
        if (index !== 0) {
          handleMoveLayer(index, direction);
        }
      } else {
        if (index !== numberOfLayers - 1) {
          handleMoveLayer(index, direction);
        }
      }
    }
  };

  return (
    <LayersMainContainer>
      <PartSelector
        design={design}
        currentPart={currentPart}
        setCurrentPart={setCurrentPart}
        setCurrentLayer={setCurrentLayer}
        setLayersView={setLayersView}
      />

      <LayersMainDivider />

      <LayersMainControlsContainer>
        <LayersMainControlsLeft>
          <LayersMainControlsTitle>Layers</LayersMainControlsTitle>
        </LayersMainControlsLeft>
        <LayersMainControlsRight>
          <InterfaceIconButtonBox>
            <InterfaceIconButton
              active={
                currentLayer !== -1 &&
                allLayers?.[currentLayer]?.type !== 'overlay'
              }
              onClick={() => deleteLayer(currentLayer)}
            >
              <FaTrash />
            </InterfaceIconButton>
          </InterfaceIconButtonBox>
          <InterfaceIconButtonBox>
            <InterfaceIconButton
              active={
                currentLayer !== -1 && numberOfLayers - 1 !== currentLayer
              }
              onClick={() => moveLayer(currentLayer, 1)}
            >
              <FaChevronUp />
            </InterfaceIconButton>
          </InterfaceIconButtonBox>
          <InterfaceIconButtonBox>
            <InterfaceIconButton
              active={currentLayer !== -1 && 0 !== currentLayer}
              onClick={() => moveLayer(currentLayer, -1)}
            >
              <FaChevronDown />
            </InterfaceIconButton>
          </InterfaceIconButtonBox>
          <InterfaceIconButtonBox>
            <InterfaceIconButton
              active
              onClick={() => setLayersView('AddLayerType')}
            >
              <FaPlus />
            </InterfaceIconButton>
          </InterfaceIconButtonBox>
        </LayersMainControlsRight>
      </LayersMainControlsContainer>

      <LayersBox>
        <AnotherScrollBox>
          <LayersScrollBox>
            {allLayers.map((layer, i) => (
              <LayerItem
                key={i}
                onClick={() => {
                  if (i === currentLayer) {
                    handleEditLayer(i, layer);
                  } else {
                    setCurrentLayer(i);
                  }
                }}
              >
                <LayerItemLeft active={i === currentLayer}>
                  <LayerItemLeftTitle>
                    {layer.type === 'overlay'
                      ? handleConvertPartName(layer.source).toLowerCase()
                      : layer.type}
                  </LayerItemLeftTitle>
                </LayerItemLeft>

                {layer.type === 'color' ? (
                  <LayerItemRight
                    style={{
                      backgroundColor: layer.color,
                    }}
                  ></LayerItemRight>
                ) : layer.type === 'graphic' ? (
                  <LayerItemRight>
                    <img
                      src={`/api/assets/images/${layer.link}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      alt="design-graphic"
                    />
                  </LayerItemRight>
                ) : layer.type === 'mask' ? (
                  <LayerItemRight>
                    <img
                      src={`/api/assets/designimages/${layer.link}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      alt="design-graphic"
                    />
                  </LayerItemRight>
                ) : (
                  <LayerItemRight>
                    <img
                      src={`/api/assets/designimages/${layer.source}Mask.png`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      alt="design-graphic"
                    />
                  </LayerItemRight>
                )}
              </LayerItem>
            ))}
          </LayersScrollBox>
        </AnotherScrollBox>
      </LayersBox>
    </LayersMainContainer>
  );
}

export default LayersMain;
