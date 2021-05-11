import styled from 'styled-components';
import { mediaQueriesByDevice } from '../../utils/css/breakpoints';
const { mobile } = mediaQueriesByDevice;

export const LandingSplashContainer = styled.div`
  height: 65vh;
  margin-top: 15vh;
  display: flex;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;

  ${mobile} {
    flex-direction: column-reverse;
    height: unset;
    margin-top: 0px;
  }
`;

export const SplashLeft = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;

  ${mobile} {
    margin-top: 0px;
    margin-bottom: 20px;
    padding-right: 0px;
    text-align: center;
  }
`;

export const SplashHeader = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin: 0;
  margin-top: 70px;
  margin-bottom: 25px;

  ${mobile} {
    font-size: 30px;
    margin-top: 30px;
  }
`;

export const SplashPara = styled.p`
  font-size: 17px;
  line-height: 150%;
  margin: 0;
  margin-bottom: 30px;
`;

export const SplashRight = styled.div`
  height: 100%;
  width: 100%;
  margin-right: 5%;

  ${mobile} {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    padding-left: 1px;
    margin-top: 90px;
  }
`;

export const SplashImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
