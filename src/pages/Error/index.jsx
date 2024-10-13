import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/scss/index.scss';

const Error = () => {
    return (
      <section id="error">
        <div className="error-container">
          <h1>404</h1>
          <h2>Oups, la page que vous avez demandé n'existe pas</h2>
          <Link to="/" className="btn">
            Retournez à la page d'accueil
          </Link>
        </div>
      </section>
    )
}
export default Error

