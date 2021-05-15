import styled from 'styled-components';

export const CustomColorContainer = styled.div``;

export const HueContainer = styled.div`
  height: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid #343434;
  border-radius: 4px;
`;

export const SaturationContainer = styled.div`
  width: 100%;
  height: 120px;
  position: relative;
  overflow: hidden;
  border: 1px solid #343434;
  border-radius: 4px;
`;

export const CustomColorInputContainer = styled.div`
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 0;

  input {
    width: 100%;
    height: 38px;
    margin-right: 3px;
    border: 1px solid #ffffff;
    border-radius: 4px;
    font-size: 14px;
    padding-left: 8px;
    padding-right: 0px;
    box-shadow: none;
    -webkit-appearance: none;
    -webkit-border-radius: 4px;
  }
`;

export const CustomColorInputSwatch = styled.div`
  flex: 0 0 auto;
  width: 38px;
  height: 38px;
  margin-left: 3px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
`;
