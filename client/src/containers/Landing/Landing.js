import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css';
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
import { NewDesignButton } from '../../components/baseui/Buttons';
import { LandingSignUpButton } from '../../components/baseui/Buttons';
import { FeaturedDesignCard } from '../../components/baseui/Cards';
import LandingSplash from '../../components/LandingSplash';
import MyDesigns from '../../components/MyDesigns';

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
        {featured && (
          <FeaturedDesignsContainer>
            <LandingSectionLabel>FEATURED</LandingSectionLabel>
            <AliceCarousel responsive={responsive} items={items} />
          </FeaturedDesignsContainer>
        )}

        {userData && <NewDesignButton />}

        {!userData && (
          <LandingSignUpContainer>
            <Link to="/login">
              <LandingSignUpButton>sign up</LandingSignUpButton>
            </Link>
          </LandingSignUpContainer>
        )}

        {myDesigns && <LandingSectionLabel>MY DESIGNS</LandingSectionLabel>}
        {myDesigns && <MyDesigns myDesigns={myDesigns} />}
      </LandingContent>
    </LandingContainer>
  );
}

export default Landing;
