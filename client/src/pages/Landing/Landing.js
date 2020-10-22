import React, { useState, useEffect } from 'react';
import './Landing.css';
import NewDesignButton from '../../components/NewDesignButton/NewDesignButton';
import FeaturedDesignCard from '../../components/FeaturedDesignCard/FeaturedDesignCard';
import MyDesignTiles from '../../components/MyDesignTiles/MyDesignTiles';
import { FaBars } from 'react-icons/fa';

function Landing() {
  const [featured, setFeatured] = useState();
  const [myDesigns, setMyDesigns] = useState();

  useEffect(() => {
    fetch('/api/featured', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => setFeatured(data));

    fetch('/api/outlines/mydesigns', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => setMyDesigns(data));

    // const data = await fetch(route, method)
    // set(data)
  }, []);

  return (
    <div className='landing-container'>
      <div className='landing-header'>
        <p>
          <strong>Sole</strong> Composer
        </p>
        <FaBars />
      </div>

      <div className='landing-content'>
        <div className='featured-designs-container'>
          <p className='landing-section-label'>Featured</p>
          <div className='feature-designs'>
            {featured
              ? featured.featured.map((outline, key) => (
                  <FeaturedDesignCard
                    props={outline.outline}
                    id={outline._id}
                    key={key}
                  />
                ))
              : null}
          </div>
        </div>

        <NewDesignButton />

        {myDesigns && <MyDesignTiles myDesigns={myDesigns} />}
      </div>
    </div>
  );
}

export default Landing;
