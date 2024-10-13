import React from 'react';
import Card from './Card';

export default function Locations({ logements }) {
    return (
        <section className="gallery">
            {logements.length > 0 ? (
                logements.map(logement => (
                    <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
                ))
            ) : (
                <p>Chargement des logements...</p>
            )}
        </section>
    );
}