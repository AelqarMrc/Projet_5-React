import React from 'react';
import Card from './Card';

export default function Gallery({ logements }) {
  return (
    <section className="gallery">
      {logements.map(logement => (
        <Card key={logement.id} title={logement.title} />
      ))}
    </section>
  );
}