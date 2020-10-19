import React from 'react';
import './FeaturedDesignCard.css';
import { Link } from 'react-router-dom';

function FeaturedDesignCard({ props, id }) {
  const { title, model, author } = props;
  const imageLink = title.toLowerCase().split(' ').join('');
  return (
    <Link to={`/designer/${id}`} className='link-to-designer'>
      <div className='featureddesigncard-container'>
        <div className='featureddesigncard-image'>
          <img src={`/assets/images/${imageLink}.png`} alt='feature-design' />
        </div>

        <p className='featureddesigncard-title'>{title}</p>
        <p className='featureddesigncard-model'>{model}</p>
        <p className='featureddesigncard-author'>{author}</p>
      </div>
    </Link>
  );
}

export default FeaturedDesignCard;
