import styled from 'styled-components';
import { mediaQueriesByDevice } from '../../../utils/css/breakpoints';
const { desktop } = mediaQueriesByDevice;

export const LandingSplashContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: unset;
  margin-bottom: 35px;

  ${desktop} {
    height: 65vh;
    margin-top: 15vh;
    flex-direction: unset;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SplashLeft = styled.div`
  margin-top: 0px;
  margin-bottom: 30px;
  padding-right: 0px;
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  height: 100%;

  ${desktop} {
    margin-top: unset;
    margin-bottom: unset;
    padding-right: unset;
    text-align: unset;
    width: 100%;
  }
`;

export const SplashHeader = styled.p`
  font-size: 30px;
  margin-top: 30px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 25px;

  ${desktop} {
    font-size: 40px;
    margin-top: 70px;
  }
`;

export const SplashPara = styled.p`
  font-size: 17px;
  line-height: 150%;
  margin: 0;
  margin-bottom: 30px;
`;

export const SplashRight = styled.div`
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 90px;
  margin-bottom: 30px;
  padding-left: 1px;
  height: 100%;

  ${desktop} {
    width: 100%;
    margin: unset;
    margin-right: 5%;
  }
`;

export const SplashImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
