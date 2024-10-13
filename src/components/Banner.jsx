import React from 'react'


const Banner = ({image, texte}) => {

  return(
    <div className='banner'>
      <div className='banner-container'>
        <img src = {image} alt="banniere" className='banner-image' />
        <p className='banner-text'>{texte}</p>
      </div>
    </div>
  )
}    


export default Banner;
