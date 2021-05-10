import styled from 'styled-components';

export const BasicButton = styled.button`
  height: 40px;
  color: #ffffff;
  background-color: ${(props) => (props.google ? '#4285f4' : '#000000')};
  border: none;
  border-radius: 5px;
  padding: 8px;
  width: 100%;
  font-size: 13px;
  text-transform: capitalize;
  margin-top: 15px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
