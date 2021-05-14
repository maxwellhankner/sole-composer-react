import React from 'react';
import { Link } from 'react-router-dom';
import {
  MyDesignsContainer,
  MyDesignsGrid,
  DesignTile,
} from './styledComponents';

function MyDesigns({ myDesigns }) {
  return (
    <MyDesignsContainer>
      <MyDesignsGrid>
        {myDesigns.map((design, key) => (
          <Link
            key={key}
            to={`/designer/${design._id}`}
            className="link-to-designer"
          >
            <DesignTile>
              <img
                src={`/api/assets/images/${design.screenshot}`}
                alt="my-design-preview"
              />
            </DesignTile>
          </Link>
        ))}
      </MyDesignsGrid>
    </MyDesignsContainer>
  );
}

export default MyDesigns;
