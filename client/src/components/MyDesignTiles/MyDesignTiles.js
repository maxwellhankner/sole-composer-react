import React from 'react';
import './MyDesignTiles.css';
import { Link } from 'react-router-dom';

function MyDesignTiles({ myDesigns }) {
  return (
    <div className='mydesigntiles-container'>
      <div>
        <p className='landing-section-label'>My Designs</p>
      </div>
      <div className='my-designs-grid'>
        {myDesigns.map((design, key) => (
          <Link
            key={key}
            to={`/designer/${design._id}`}
            className='link-to-designer'
          >
            <div className='my-design-tile'>
              <img
                src={`/api/assets/images/${design.screenshot}`}
                alt='my-design-preview'
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MyDesignTiles;
