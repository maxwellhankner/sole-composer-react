import React from 'react';
import {
  LoadingSpinnerContainer,
  LoadingSpinnerIcon,
} from './styledComponents';

function LoadingSpinner() {
  return (
    <LoadingSpinnerContainer>
      <LoadingSpinnerIcon></LoadingSpinnerIcon>
    </LoadingSpinnerContainer>
  );
}

export default LoadingSpinner;
