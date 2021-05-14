import styled from 'styled-components';

export const BaseColorRadioBox = styled.div`
  box-sizing: border-box;
  background-color: #000000;
  border-radius: 6px;
  border: 1px solid #343434;
  display: flex;
  flex-direction: row;
  padding: 3px;
`;

export const BaseColorOption = styled.button`
  box-sizing: border-box;
  font-size: 16px;
  color: ${(props) => (props.active ? '#ffffff' : '#999999')};
  background-color: ${(props) => (props.active ? '#212121' : '#000000')};
  border: 1px solid;
  border-radius: 3px;
  border-color: ${(props) => (props.active ? '#343434' : '#000000')};
  width: 100%;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
