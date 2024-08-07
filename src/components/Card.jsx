import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Card({id, title, cover}) {
  return (
    
    <Link to={`/location/${id}`} className="card">
        <article className='logement-card'>
        <img src={cover} alt="image logement" />
        <div className='card-title'>
          <h2>{title}</h2>
        </div>
        </article>
      </Link>
      
  )
}

Card.propTypes = {  title: PropTypes.string.isRequired,};