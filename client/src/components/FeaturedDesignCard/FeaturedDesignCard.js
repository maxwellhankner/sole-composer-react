import React from 'react';
import './FeaturedDesignCard.css';

function FeaturedDesignCard({ props }) {
  const { title, model, author } = props;
  return (
    <div className='featureddesigncard-container'>
      <div className='featureddesigncard-image'>
        <img src='/assets/images/blankDesign.PNG' alt='feature-design' />
      </div>

      <p className='featureddesigncard-title'>{title}</p>
      <p className='featureddesigncard-model'>{model}</p>
      <p className='featureddesigncard-author'>{author}</p>
    </div>
  );
}

export default FeaturedDesignCard;
