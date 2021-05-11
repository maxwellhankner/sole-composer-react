import styled from 'styled-components';

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
  padding-left: 16px;
`;

export const InterfaceRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 70px;
`;
