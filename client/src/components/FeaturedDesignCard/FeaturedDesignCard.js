import React from 'react';
import './FeaturedDesignCard.css';
import { Link } from 'react-router-dom';

function FeaturedDesignCard({ props }) {
  const { _id, title, configId, author, screenshot } = props;
  return (
    <Link to={`/designer/${_id}`} className='link-to-designer'>
      <div className='featureddesigncard-container'>
        <div className='featureddesigncard-image'>
          <img src={screenshot} alt='feature-design' />
        </div>

        <p className='featureddesigncard-title'>{title}</p>
        <p className='featureddesigncard-model'>{configId.modelName}</p>
        <p className='featureddesigncard-author'>{author}</p>
      </div>
    </Link>
  );
}

export default FeaturedDesignCard;
