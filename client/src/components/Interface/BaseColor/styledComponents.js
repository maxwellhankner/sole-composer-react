import styled from 'styled-components';

export const BaseColorRadioBox = styled.div`
  background-color: #000000;
  border-radius: 5px;
  border: 1px solid #343434;
  height: 40px;
  display: flex;
  flex-direction: row;
  padding: 3px;
  margin-bottom: 6px;
`;

export const BaseColorOption = styled.button`
  color: ${(props) => (props.active ? '#ffffff' : '#999999')};
  background-color: ${(props) => (props.active ? '#212121' : '#000000')};
  border: ${(props) => (props.active ? '1px solid #343434' : 'none')};
  border-radius: ${(props) => (props.active ? '5px' : 'unset')};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
