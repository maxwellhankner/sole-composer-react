import styled from 'styled-components';
import { mediaQueriesByDevice } from '../../utils/css/breakpoints';
const { mobile } = mediaQueriesByDevice;

export const MyDesignsContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const MyDesignsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3px;
  margin: 16px;

  ${mobile} {
    grid-template-columns: 1fr 1fr;
    margin: 3px;
  }
`;

export const DesignTile = styled.div`
  width: 100%;
  background-color: #f0f0f0;

  img {
    width: 100%;
  }
`;
