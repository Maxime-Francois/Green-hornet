import React from 'react';
import { FaStar, FaRegStar, FaStarHalf } from 'react-icons/fa';

interface RatingProps {
  value: number; // Ajoutez une annotation de type pour 'value'
}


function Rating({ value }: RatingProps) {
  const maxRating = 5; // Nombre maximal d'étoiles

  const renderStars = () => {
    const stars = [];
    
  for (let i = 1; i <= maxRating; i++) {
      if (i <= value) {
        stars.push(<FaStar key={i} className="star filled" />);
      } else if (i - 0.5 === value) {
        stars.push(<FaStarHalf key={i} className="star half" />);
      } else {
        stars.push(<FaRegStar key={i} className="star" />);
      }
    }

    return stars;
  };

  return (
    <div className="rating">
      {renderStars()}
    </div>
  );
}

export default Rating;
