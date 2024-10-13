// Location.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import '../../assets/scss/index.scss';
import DropdownSection from '../../components/Dropdown.jsx';
import Rating from '../../components/Rating.jsx';
import Gallery from '../../components/Gallery.jsx';

export default function Location({ logements }) {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id == id);

  return (
    <div className="location-container">

      <Gallery logements={logements} />
      
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
          <div id="host-info">
            <div className='host-info'>
              <span>
                <p>{logement.host.name.split(' ')[0]}</p>
                <p>{logement.host.name.split(' ')[1]}</p>
              </span>
                <img src={logement.host.picture} alt={logement.host.name} />
            </div>
            <Rating rating={logement.rating} />
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