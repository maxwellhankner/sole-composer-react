import styled from 'styled-components';

export const GraphicEditorUpper = styled.div`
  height: 300px;
  position: relative;
  margin: 6px;
`;

export const GraphicEditorVisualContainer = styled.div`
  transform: ${(props) => (props.mirror ? 'scaleX(-1)' : 'unset')};
`;

export const GraphicEditorButton = styled.button`
  background-color: #00000077;
  color: #ffffff;
  width: 40px;
  height: 40px;
  border: none;
  margin: auto;
  border-radius: 50px;
  padding: 0px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

export const GraphicEditorButtons = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 3fr 1fr;
  grid-template-rows: 1fr 3fr 1fr 3fr 1fr;
  z-index: 1;
  grid-template-areas:
    'counter . up . clock'
    '. . . . .'
    'left . . . right'
    '. . . . .'
    'compress . down . expand';
`;
