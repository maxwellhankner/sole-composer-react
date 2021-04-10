import React, { useState, useEffect, useContext } from 'react';
import './Landing.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import NewDesignButton from '../../components/NewDesignButton/NewDesignButton';
import FeaturedDesignCard from '../../components/FeaturedDesignCard/FeaturedDesignCard';
import MyDesignTiles from '../../components/MyDesignTiles/MyDesignTiles';
import UserProvider from '../../context/UserProvider';
import { simpleFetch } from '../../helpers/fetchHelpers';
import { Link } from 'react-router-dom';

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
    <div className="landing-container">
      <div className="landing-header">
        <p>
          <strong>Sole</strong> Composer
        </p>
        {userData ? (
          <Link to="/profile">{userData.firstName}</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
      <div className="landing-content">
        <div className="featured-designs-container">
          <p className="landing-section-label">FEATURED</p>
          {featured ? (
            <AliceCarousel responsive={responsive} items={items} />
          ) : null}
        </div>
        <NewDesignButton />

        {!userData && (
          <Link to="/login">
            <div className="landing-button">
              <button>create an account</button>
            </div>
          </Link>
        )}

        {myDesigns && <MyDesignTiles myDesigns={myDesigns} />}
      </div>
    </div>
  );
}

export default Landing;
