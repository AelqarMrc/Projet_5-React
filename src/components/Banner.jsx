import React from 'react'


const Banner = ({image, texte}) => {

  return(
    <div className='banner'>
      <img src={image} alt="banner" className='banner-image'/>
      <div className='banner-text'>{texte}</div>
    </div>
  )
}    


export default Banner;
