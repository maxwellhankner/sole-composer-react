import React from 'react';
import './FeaturedDesignCard.css';
import { useHistory } from 'react-router-dom';

function FeaturedDesignCard({ props, userData }) {
  const { _id, title, configId, author, screenshot } = props;

  const history = useHistory();

  const handleClick = () => {
    if (userData) {
      history.push(`/designer/${_id}`);
    }
  };

  return (
    <div className='featureddesigncard-container' onClick={() => handleClick()}>
      <div className='featureddesigncard-image'>
        <img src={`api/assets/images/${screenshot}`} alt='feature-design' />
      </div>

      <p className='featureddesigncard-title'>{title}</p>
      <p className='featureddesigncard-model'>{configId.modelName}</p>
      <p className='featureddesigncard-author'>{author.firstName}</p>
    </div>
  );
}

export default FeaturedDesignCard;
