import { useState } from 'react';

const TourCard = ({ id, name, info, image, price, onRemove }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} alt={name} className="tour-img" />
        <p className="tour-price">${price}</p>
      </div>
      <div className="tour-info">
        <h4>{name}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button 
            className="read-more-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
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
