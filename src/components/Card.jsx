import React from 'react'
import PropTypes from 'prop-types'

export default function Card({title}) {
  return (
    <div className='card'>
      <div className='card-title'>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

Card.propTypes = {  title: PropTypes.string.isRequired,};