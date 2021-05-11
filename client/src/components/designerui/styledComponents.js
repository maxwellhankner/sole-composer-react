import styled from 'styled-components';

export const LeftInterfaceContainer = styled.div`
  background-color: #212121;
  border-radius: 9px;
  padding: 6px;
`;

export const InterfaceButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 6px;
  row-gap: 6px;
`;

export const InterfaceButtonBox = styled.div`
  border: 1px solid #343434;
  border-radius: 6px;
  background-color: #000000;
  padding: 3px;
`;

export const InterfaceButton = styled.button`
  border: 1px solid #343434;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  background-color: #212121;
  color: ${(props) => (props.active ? '#ffffff' : '#bbbbbb')};
  padding: 0px;
  width: 100%;
  font-size: 13px;

  &:focus {
    outline: none;
  }
`;
