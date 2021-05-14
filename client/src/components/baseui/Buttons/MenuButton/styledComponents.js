import styled from 'styled-components';
import { BaseButton } from '../';
import {
  googleLoginButtonBackgroundColor,
  defaultButtonBackgroundColor,
} from '../../../../utils/css/defaultStyles';

export const MenuButton = styled(BaseButton)`
  height: 40px;
  background-color: ${(props) =>
    props.google
      ? googleLoginButtonBackgroundColor
      : defaultButtonBackgroundColor};
  padding: 8px;
  font-size: 16px;
  text-transform: capitalize;
  margin-top: 15px;
`;
