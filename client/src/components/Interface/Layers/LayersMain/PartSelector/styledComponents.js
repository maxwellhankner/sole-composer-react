import styled from 'styled-components';

export const PartSelectorContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const PartSelectorTitleBox = styled.div`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  border: 1px solid #343434;
  border-radius: 6px;
  background-color: #000000;
  padding: 3px;
`;

export const PartSelectorTitle = styled.button`
  width: 100%;
  height: 38px;
  text-align: center;
  border: 1px solid #343434;
  background-color: #212121;
  color: #ffffff;
  font-size: 16px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

export const PartSelectorButtonBox = styled.div`
  box-sizing: border-box;
  border: 1px solid #343434;
  border-radius: 6px;
  background-color: #000000;
  padding: 3px;
`;

export const PartSelectorButton = styled.button`
  box-sizing: border-box;
  border: 1px solid #343434;
  border-radius: 4px;
  color: #ffffff;
  width: 38px;
  height: 38px;
  background-color: #212121;
  padding: 0px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    color: ${(props) => (props.active ? '#ffffff' : '#343434')};
  }

  &:focus {
    outline: none;
  }
`;
