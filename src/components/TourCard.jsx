// Import React hooks
import { useState } from 'react';

// TourCard component displays individual tour information
// Props:
// - id: unique identifier for the tour
// - name: name of the tour
// - info: detailed description of the tour
// - image: URL of the tour image
// - price: price of the tour
// - onRemove: callback function to remove tour from list
const TourCard = ({ id, name, info, image, price, onRemove }) => {
  // State to toggle between showing full or truncated description
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour-card">
      {/* Tour image section with price overlay */}
      <div className="tour-img-container">
        <img src={image} alt={name} className="tour-img" />
        <p className="tour-price">${price}</p>
      </div>

      {/* Tour details section */}
      <div className="tour-info">
        <h4>{name}</h4>
        <p>
          {/* Show full text if readMore is true, otherwise show truncated version */}
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button 
            className="read-more-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        {/* Button to remove tour from list */}
        <button 
          className="btn btn-danger delete-btn"
          onClick={() => onRemove(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default TourCard;
