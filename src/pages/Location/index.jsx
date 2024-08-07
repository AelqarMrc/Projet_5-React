// Location.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Location({ logements }) {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === parseInt(id));

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="location">
      <h1>{logement.title}</h1>
      <img src={logement.image} alt={logement.title} />
    </div>
  );
}