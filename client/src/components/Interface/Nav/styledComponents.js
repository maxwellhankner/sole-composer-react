import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 280px;
  justify-content: space-between;
`;

export const NavOption = styled.div`
  width: 40px;
  height: 40px;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: ${(props) => (props.selected ? '#212121' : 'unset')};
  border-radius: 6px;

  svg {
    font-size: 22px;
    color: ${(props) => (props.selected ? '#ffffff' : '#212121')};
  }
`;
