import React from 'react';
import Card from './Card';

export default function Gallery({ logements }) {
  return (
    <section className="gallery">
      {logements.map(logement => (
        <Card id={logement.id} title={logement.title} cover={logement.cover}/>
      ))}
    </section>
  );
}