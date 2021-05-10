import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import LandingSplash from '../../components/LandingSplash/LandingSplash';
import NewDesignButton from '../../components/NewDesignButton/NewDesignButton';
import FeaturedDesignCard from '../../components/FeaturedDesignCard/FeaturedDesignCard';
import MyDesignTiles from '../../components/MyDesignTiles/MyDesignTiles';
import UserProvider from '../../UserProvider';
import { simpleFetch } from '../../utils/fetchHelpers';
import {
  LandingContainer,
  LandingContent,
  LandingHeader,
  FeaturedDesignsContainer,
  LandingSignUpContainer,
  LandingHeaderTitle,
  LandingSectionLabel,
} from './styledComponents';
import { LandingSignUpButton } from '../../components/baseui/Buttons';

function Landing() {
  const userData = useContext(UserProvider.context);
  const [featured, setFeatured] = useState();
  const [myDesigns, setMyDesigns] = useState();

  useEffect(() => {
    simpleFetch('/api/featured', 'GET')
      .then((res) => res.json())
      .then((data) => setFeatured(data));

    if (userData) {
      simpleFetch('/api/outlines/mydesigns', 'GET')
        .then((res) => res.json())
        .then((data) => setMyDesigns(data));
    }
  }, [userData]);

  let items = featured
    ? featured.featured.map((design, key) => (
        <FeaturedDesignCard props={design} userData={userData} key={key} />
      ))
    : null;

  const responsive = {
    0: { items: 1.7 },
    700: { items: 3 },
  };

  return (
    <LandingContainer>
      <LandingHeader>
        <LandingHeaderTitle>
          <strong>Sole</strong> Composer
        </LandingHeaderTitle>

        {userData ? (
          <Link to="/profile">{userData.firstName}</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </LandingHeader>

      {!userData && <LandingSplash />}

      <LandingContent>
        <FeaturedDesignsContainer>
          <LandingSectionLabel>FEATURED</LandingSectionLabel>
          {featured && <AliceCarousel responsive={responsive} items={items} />}
        </FeaturedDesignsContainer>

        {userData && <NewDesignButton />}

        {!userData && (
          <LandingSignUpContainer>
            <Link to="/login">
              <LandingSignUpButton>sign up</LandingSignUpButton>
            </Link>
          </LandingSignUpContainer>
        )}

        {myDesigns && <LandingSectionLabel>MY DESIGNS</LandingSectionLabel>}
        {myDesigns && <MyDesignTiles myDesigns={myDesigns} />}
      </LandingContent>
    </LandingContainer>
  );
}

export default Landing;
