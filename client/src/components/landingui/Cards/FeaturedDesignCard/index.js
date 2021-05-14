import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  FeaturedDesignCardContainer,
  FeaturedDesignCardImage,
  FeaturedDesignCardTitle,
  FeaturedDesignCardModel,
  FeaturedDesignCardAuthor,
} from './styledComponents';

function FeaturedDesignCard({ props }) {
  const { _id, title, configId, author, screenshot } = props;

  const history = useHistory();

  const handleClick = () => {
    history.push(`/designer/${_id}`);
  };

  return (
    <FeaturedDesignCardContainer onClick={() => handleClick()}>
      <FeaturedDesignCardImage>
        <img src={`api/assets/images/${screenshot}`} alt="feature-design" />
      </FeaturedDesignCardImage>

      <FeaturedDesignCardTitle>{title}</FeaturedDesignCardTitle>
      <FeaturedDesignCardModel>{configId.modelName}</FeaturedDesignCardModel>
      <FeaturedDesignCardAuthor>{author.firstName}</FeaturedDesignCardAuthor>
    </FeaturedDesignCardContainer>
  );
}

export default FeaturedDesignCard;
