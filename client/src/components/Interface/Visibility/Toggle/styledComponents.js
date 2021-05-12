import styled from 'styled-components';

export const ToggleOptionBox = styled.div`
  border: 1px solid #343434;
  border-radius: 6px;
  background-color: #000000;
  padding: 3px;
`;

export const ToggleOptionButton = styled.button`
  border: ${(props) => (props.active ? '1px solid #343434' : 'unset')};
  border-radius: 4px;
  width: 100%;
  height: 38px;
  background-color: ${(props) => (props.active ? '#212121' : '#000000')};
  color: ${(props) => (props.active ? '#ffffff' : '#999999')};
  padding: 0px;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;
