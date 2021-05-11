import styled from 'styled-components';

export const MenuDesignNameContainer = styled.div`
  margin: 12px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MenuDesignName = styled.p`
  font-size: 16px;
  margin: 0px;
  color: #ffffff;
`;

export const MenuEditNameButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0px;

  &:focus {
    outline: none;
  }

  svg {
    font-size: 16px;
    color: #ffffff;
  }
`;
