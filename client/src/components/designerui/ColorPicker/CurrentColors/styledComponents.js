import styled from 'styled-components';

export const CurrentColorsScroll = styled.div`
  width: 100%;
  min-width: 0;
  display: flex;
  flex: 0 1 auto;
  overflow: auto;
  border-radius: 4px;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CurrentColorsOption = styled.button`
  width: 38px;
  height: 38px;
  margin-right: 3px;
  border-radius: 4px;
  flex: 0 0 auto;
  background-color: ${(props) => props.color};
  border: none;

  &:last-child {
    margin-right: 0px;
  }

  &:focus {
    outline: none;
  }
`;
