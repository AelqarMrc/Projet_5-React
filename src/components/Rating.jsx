import React from 'react'
import '../assets/scss/index.scss';

const Rating = ({ rating }) => {
    const TotalStars = 5;
    const active = Math.round(rating);
    const noActive = TotalStars - active;
    
    return (
        <div id="rating">
            {[...Array(active)].map((i) => <span key={i} className="star active">★</span>)}
            {[...Array(noActive)].map((i) => <span key={i} className="star noActive">★</span>)}
        </div>
    )
}


export default Rating; 