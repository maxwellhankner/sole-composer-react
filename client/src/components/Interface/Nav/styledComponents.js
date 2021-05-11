import styled from 'styled-components';
// import { mediaQueriesByDevice } from '../../utils/css/breakpoints';
// const { mobile } = mediaQueriesByDevice;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavOption = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 26px;
    background-color: ${(props) => (props.selected ? '#212121' : 'unset')};
    color: ${(props) => (props.selected ? '#ffffff' : '#212121')};
    padding: 8px;
    border-radius: 5px;
  }
`;
