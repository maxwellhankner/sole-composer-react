import styled from 'styled-components';

export const PartsBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 220px;
  margin: 6px;
  border: 1px solid #343434;
  border-radius: 6px;
  background-color: #000000;
`;

export const AnotherPartsScrollBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const PartsScrollBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 6px;
  row-gap: 6px;
`;

export const PartButton = styled.button`
  box-sizing: border-box;
  color: ${(props) => (props.active ? '#ffffff' : '#999999')};
  background-color: ${(props) => (props.active ? '#212121' : '#000000')};
  border: 1px solid;
  border-color: ${(props) => (props.active ? '#343434' : '#000000')};
  border-radius: 4px;
  margin: 3px;
  height: 40px;
  font-size: 16px;
  text-transform: capitalize;
  overflow: hidden;
`;
