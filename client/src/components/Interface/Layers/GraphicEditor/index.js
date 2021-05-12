import React, { useEffect } from 'react';
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowsAlt,
  FaArrowUp,
  FaCompressArrowsAlt,
  FaRedoAlt,
  FaUndoAlt,
} from 'react-icons/fa';
import './GraphicEditor.css';
import {
  LeftInterfaceContainer,
  InterfaceButtonBox,
  InterfaceButton,
  InterfaceDoubleButtons,
} from '../../../designerui';
import {
  GraphicEditorUpper,
  GraphicEditorVisualContainer,
  GraphicEditorButtons,
  GraphicEditorButton,
} from './styledComponents';

function GraphicEditor({ props }) {
  const {
    currentLayer,
    currentPartName,
    graphicVisualCanvas,
    handleChangeManager,
    handleUpdateGraphicVisualCanvas,
    setLayersView,
    setCanSave,
    currentShoe,
  } = props;

  const handleMoveGraphic = (direction, distance) => {
    setCanSave(true);
    handleChangeManager({
      type: 'graphic-moved',
      partName: currentPartName,
      layerIndex: currentLayer,
      direction,
      distance,
    });
  };

  useEffect(() => {
    const placeGraphicVisual = () => {
      let div = document.getElementById('graphic-visual-container');
      div.innerHTML = '';
      div.appendChild(graphicVisualCanvas);
    };
    placeGraphicVisual();
    handleUpdateGraphicVisualCanvas(currentPartName);
    // eslint-disable-next-line
  }, []);

  return (
    <LeftInterfaceContainer>
      <GraphicEditorUpper>
        <GraphicEditorButtons>
          <GraphicEditorButton
            id="up-button"
            onClick={() => handleMoveGraphic('vert', -30)}
          >
            <FaArrowUp />
          </GraphicEditorButton>
          <GraphicEditorButton
            id="down-button"
            onClick={() => handleMoveGraphic('vert', 30)}
          >
            <FaArrowDown />
          </GraphicEditorButton>
          <GraphicEditorButton
            id="left-button"
            onClick={() => handleMoveGraphic('hor', -30)}
          >
            <FaArrowLeft />
          </GraphicEditorButton>
          <GraphicEditorButton
            id="right-button"
            onClick={() => handleMoveGraphic('hor', 30)}
          >
            <FaArrowRight />
          </GraphicEditorButton>
          <GraphicEditorButton
            id="scale-up-button"
            onClick={() => handleMoveGraphic('scale', 1.1)}
          >
            <FaArrowsAlt />
          </GraphicEditorButton>
          <GraphicEditorButton
            id="scale-down-button"
            onClick={() => handleMoveGraphic('scale', 0.9)}
          >
            <FaCompressArrowsAlt />
          </GraphicEditorButton>
          <GraphicEditorButton
            id="clockwise-button"
            onClick={() => handleMoveGraphic('rotate', 5)}
          >
            <FaRedoAlt />
          </GraphicEditorButton>
          <GraphicEditorButton
            id="counterclockwise-button"
            onClick={() => handleMoveGraphic('rotate', -5)}
          >
            <FaUndoAlt />
          </GraphicEditorButton>
        </GraphicEditorButtons>
        <GraphicEditorVisualContainer
          id="graphic-visual-container"
          mirror={currentShoe === 'left'}
        ></GraphicEditorVisualContainer>
      </GraphicEditorUpper>
      <InterfaceDoubleButtons>
        <InterfaceButtonBox>
          <InterfaceButton onClick={() => handleMoveGraphic('reset', 0)}>
            Reset
          </InterfaceButton>
        </InterfaceButtonBox>
        <InterfaceButtonBox>
          <InterfaceButton onClick={() => setLayersView('LayersMain')}>
            Back
          </InterfaceButton>
        </InterfaceButtonBox>
      </InterfaceDoubleButtons>
    </LeftInterfaceContainer>
  );
}

export default GraphicEditor;
