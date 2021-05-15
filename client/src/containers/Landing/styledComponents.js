import styled from 'styled-components';
import { mediaQueriesByDevice } from '../../utils/css/breakpoints';
const { desktop } = mediaQueriesByDevice;

export const LandingContainer = styled.div`
  font-family: 'Roboto';
  height: 100%;
`;

export const LandingHeader = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 46px;
  color: #f9f9f9;
  background-color: #000000;
  /* padding: 10px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    color: #ffffff;
    text-decoration: none;
    margin: auto 15px;
  }
`;

export const LandingHeaderTitle = styled.p`
  margin: auto 15px;
`;

export const HeaderSpacing = styled.div`
  width: 100%;
  height: 45px;
  background-color: pink;
`;

export const LandingSpacing = styled.div`
  width: 100%;
  height: 46px;
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
