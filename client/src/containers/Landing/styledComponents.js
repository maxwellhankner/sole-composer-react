import styled from 'styled-components';
import { mediaQueriesByDevice } from '../../utils/css/breakpoints';
const { desktop } = mediaQueriesByDevice;

export const LandingContainer = styled.div`
  background-color: #f9f9f9;
  height: 100%;
`;

export const LandingHeader = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 22px;
  color: #f9f9f9;
  background-color: #000000;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

export const LandingHeaderTitle = styled.p`
  margin: 0;
`;

export const LandingSpacing = styled.div`
  width: 100%;
  height: 42px;
`;

export const LandingContent = styled.div`
  width: 100%;
  max-width: 700px;
  margin: auto;
  margin-top: 16px;

  ${desktop} {
    margin-bottom: 0;
  }
`;

export const FeaturedDesignsContainer = styled.div`
  margin-bottom: 32px;
  width: 100%;
`;

export const LandingSectionLabel = styled.p`
  font-family: 'Poppins', 'Roboto', 'Ariel';
  margin: 0px;
  margin-left: 16px;
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: bold;
`;

export const LandingSignUpContainer = styled.div`
  margin-bottom: 60px;
  text-align: center;
`;
