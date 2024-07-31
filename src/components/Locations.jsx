import React from 'react';
import Card from './Card';

export default function Locations({logements}) {
    return <>
        {logements.length > 0 ? (
            <ul>
                {logements.map(logement => (
                <li key={logement.id}>
                    <Card title={logement.title} />
                </li>
                ))}
            </ul>
        ) : (
            <p>Chargement des logements...</p>
        )}
    </>
}
