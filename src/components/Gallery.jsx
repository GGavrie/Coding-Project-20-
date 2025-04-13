import { useEffect } from 'react';
import TourCard from './TourCard';

const Gallery = ({ tours, onRemove }) => {
  useEffect(() => {
    console.log('Gallery rendered');
  }, []);

  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Gallery;
