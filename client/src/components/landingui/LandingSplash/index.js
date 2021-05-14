import React from 'react';
import { SplashDesignButton } from '../Buttons';
import {
  LandingSplashContainer,
  SplashLeft,
  SplashHeader,
  SplashPara,
  SplashRight,
  SplashImage,
} from './styledComponents';

function LandingSplash() {
  return (
    <LandingSplashContainer>
      <SplashLeft>
        <SplashHeader>Create Something New</SplashHeader>
        <SplashPara>
          Sole Composer gives you the ability to design and visualize
          one&#8209;of&#8209;a&#8209;kind sneakers.
        </SplashPara>
        <SplashDesignButton />
      </SplashLeft>
      <SplashRight>
        <SplashImage src="/sole-cover.png" />
      </SplashRight>
    </LandingSplashContainer>
  );
}

export default LandingSplash;
