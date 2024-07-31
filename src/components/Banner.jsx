import React from 'react'
import banniere from '../banniere.png'

export default function Banner() {
  return (
    <div className='banner'>
      <img src={banniere} alt="banner" className='banner-image'/>
      <div className='banner-text'>Chez vous, partout et ailleurs</div>
    </div>
  )
}
