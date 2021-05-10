import styled from 'styled-components';
import {
  defaultButtonTextColor,
  defaultButtonBackgroundColor,
} from '../../../utils/css/defaultStyles';

const BasicButton = styled.button`
  box-shadow: none;
  margin: 0;
  color: ${defaultButtonTextColor};
  background-color: ${defaultButtonBackgroundColor};
  border: none;
  border-radius: 5px;
  width: 100%;

  &:active {
    box-shadow: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export default BasicButton;
