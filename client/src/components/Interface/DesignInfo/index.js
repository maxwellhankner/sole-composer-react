import React from 'react';
import { InfoContainer, InfoTitle, InfoModel } from './styledComponents';

function DesignInfo({ design }) {
  return (
    <InfoContainer>
      <InfoTitle>{design.title}</InfoTitle>
      <InfoModel>{design.modelName}</InfoModel>
    </InfoContainer>
  );
}

export default DesignInfo;
