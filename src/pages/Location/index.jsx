// Location.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../assets/scss/index.scss';
import DropdownSection from '../../components/Dropdown.jsx';

export default function Location({ logements }) {
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
    <div className="location-container">
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
      <div className="details-container">

        <span>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </span>

        <span>
          <div className="host-info">
            <div>
              <span>
                <p>{logement.host.name.split(' ')[0]}</p>
                <p>{logement.host.name.split(' ')[1]}</p>
              </span>
                <img src={logement.host.picture} alt={logement.host.name} />
            </div>
            {'⭐'.repeat(logement.rating)}
          </div>


        </span>


      </div>

      <div className="dropdown">
      <DropdownSection title="Description" content={<p>{logement.description}</p>} />
      <DropdownSection
        title="Équipements"
        content={
          <ul>
            {logement.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        }
      />
    </div>

    </div>

  );
}