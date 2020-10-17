import React, { useState, useEffect } from 'react';
import './Landing.css';
import NewDesignButton from '../../components/NewDesignButton/NewDesignButton';
import FeaturedDesignCard from '../../components/FeaturedDesignCard/FeaturedDesignCard';
import { FaBars } from 'react-icons/fa';

function Landing() {
  const [featured, setFeatured] = useState();

  useEffect(() => {
    fetch('/api/featured', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => setFeatured(data));
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
          <p className='featured-designs-label'>Featured</p>
          <div className='feature-designs'>
            {featured
              ? featured.featured.map((outline, key) => (
                  <FeaturedDesignCard props={outline.outline} key={key} />
                ))
              : null}
          </div>
        </div>

        <NewDesignButton />
      </div>
    </div>
  );
}

export default Landing;
