import styled from 'styled-components';

export const PartSelectorContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const PartSelectorTitle = styled.button`
  margin: auto;
  padding: 12px;
  border: none;
  background-color: transparent;
  color: #ffffff;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`;

export const PartSelectorButton = styled.button`
  font-weight: bold;
  color: #ffffff;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  padding-left: 15px;
  padding-right: 15px;

  &:focus {
    outline: none;
  }
`;
