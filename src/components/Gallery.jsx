import React, { useState }  from 'react';
import { useParams } from 'react-router-dom';


export default function Gallery({ logements }) {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id == id);

  const [currentIndex, setCurrentIndex] = useState(0);



  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1));
  };


  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1));
  };

  return (  
      <div className="carousel-container">
        <button className="carousel-arrow left-arrow" onClick={handlePrev}>
          &lt;
        </button>
        <div className="carousel">
          {logement.pictures.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
              style={{ display: index === currentIndex ? 'block' : 'none' }}
            >
              <img src={image} alt="" />
            </div>
          ))}
        </div>
        <button className="carousel-arrow right-arrow" onClick={handleNext}>
          &gt;
        </button>
      </div>
  );
}