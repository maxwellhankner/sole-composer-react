import styled from 'styled-components';

export const LayersMainContainer = styled.div``;

export const LayersMainDivider = styled.div`
  height: 5px;
  background-color: #000000;
  border-top: 1px solid #343434;
  border-bottom: 1px solid #343434;
  border-right: none;
  border-left: none;
`;

// Controls
export const LayersMainControlsContainer = styled.div`
  margin: 6px;
  display: flex;
  justify-content: space-between;
`;

export const LayersMainControlsLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LayersMainControlsTitle = styled.p`
  font-size: 16px;
  color: #ffffff;
  margin: 0px;
  padding-left: 6px;
`;

export const LayersMainControlsRight = styled.div`
  display: flex;

  svg {
    color: #ffffff;
  }
`;

// Layers
export const LayersBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 150px;
  margin: 6px;
  border: 1px solid #343434;
  border-radius: 6px;
  background-color: #000000;
  padding: 3px;
`;

export const LayersScrollBox = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  border-radius: 4px;
`;

export const AnotherScrollBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const LayerItem = styled.div`
  height: 40px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  margin-bottom: 3px;
  font-size: 16px;
  text-transform: capitalize;
  overflow: hidden;

  &:first-of-type {
    margin-bottom: 0;
  }
`;

export const LayerItemRight = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.active ? '#EEEEEE' : '#212121')};
  color: ${(props) => (props.active ? '#000000' : '#EEEEEE')};
  justify-content: center;
  border: ${(props) =>
    props.active ? '1px solid #EEEEEE' : '1px solid #343434'};
  border-radius: 4px;
`;

export const LayerItemRightTitle = styled.p`
  margin: 0px;
  padding-left: 10px;
`;

export const LayerItemLeft = styled.div`
  width: 40px;
  margin-right: 3px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #212121;
`;
