import styled from 'styled-components';
import { mediaQueriesByDevice } from '../../utils/css/breakpoints';
const { desktop } = mediaQueriesByDevice;

export const InterfaceContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  touch-action: none;
  display: flex;
  padding-bottom: 30px;

  ${desktop} {
    right: 0;
    width: 375px;
  }
`;

export const InterfaceLeft = styled.div`
  width: 0px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 16px;
`;

export const InterfaceRight = styled.div`
  width: 70px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
