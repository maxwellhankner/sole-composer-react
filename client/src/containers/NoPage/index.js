import React from 'react';
import { Link } from 'react-router-dom';
import { NoPageContainer } from './styledComponents';
import { MenuButton } from '../../components/landingui/Buttons';
import { MenuPara } from '../../components/landingui/Text';

function NoPage() {
  return (
    <NoPageContainer>
      <MenuPara>404 - PAGE NOT FOUND</MenuPara>
      <Link to="/">
        <MenuButton>Home</MenuButton>
      </Link>
    </NoPageContainer>
  );
}

export default NoPage;
