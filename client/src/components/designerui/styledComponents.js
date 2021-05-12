import styled from 'styled-components';

export const LeftInterfaceContainer = styled.div`
  background-color: #212121;
  border-radius: 9px;
`;

export const InterfaceTitle = styled.p`
  font-size: 16px;
  margin: 10px 14px;
  color: #ffffff;
`;

export const InterfaceDoubleButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 6px;
  row-gap: 6px;
  margin: 6px;
`;

export const InterfaceSingleButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 6px;
  margin: 6px;
`;

export const InterfaceButtonBox = styled.div`
  box-sizing: border-box;
  border: 1px solid #343434;
  border-radius: 6px;
  background-color: #000000;
  padding: 3px;
`;

export const InterfaceButton = styled.button`
  box-sizing: border-box;
  border: 1px solid #343434;
  border-radius: 3px;
  width: 100%;
  height: 38px;
  background-color: #212121;
  color: ${(props) => (props.active ? '#ffffff' : '#bbbbbb')};
  padding: 0px;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

// Icons - Square Buttons
export const InterfaceIconButtonBox = styled.div`
  box-sizing: border-box;
  border: 1px solid #343434;
  border-radius: 6px;
  background-color: #000000;
  padding: 3px;
  margin-left: 6px;
`;

export const InterfaceIconButton = styled.button`
  box-sizing: border-box;
  border: 1px solid;
  border-color: ${(props) => (props.active ? '#343434' : '#000000')};
  border-radius: 3px;
  width: 38px;
  height: 38px;
  background-color: ${(props) => (props.active ? '#212121' : '#000000')};
  padding: 0px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    color: ${(props) => (props.active ? '#ffffff' : '#343434')};
  }

  &:focus {
    outline: none;
  }
`;
