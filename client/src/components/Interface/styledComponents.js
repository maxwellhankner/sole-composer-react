import styled from 'styled-components';
// import { mediaQueriesByDevice } from '../../utils/css/breakpoints';
// const { mobile } = mediaQueriesByDevice;

export const InterfaceContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  touch-action: none;
  display: flex;
  padding-bottom: 20px;
`;

export const InterfaceLeft = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const InterfaceLeftContainer = styled.div`
  background-color: #212121;
  margin-left: 16px;
  /* padding: 6px; */
  /* border-radius: 9px; */
`;

export const InterfaceRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 70px;
`;
