import React from 'react';
import { Link } from 'react-router-dom';
import { NoPageContainer } from './styledComponents';
import { MenuButton } from '../../components/baseui/Buttons';
import { MenuPara } from '../../components/baseui/Text';

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
