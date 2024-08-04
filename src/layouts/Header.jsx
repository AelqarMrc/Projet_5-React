import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

export default function Header() {
  return (
    <header>
    <img src={logo} alt="Logo" />
      <nav className='navbar'>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">A Propos</Link></li>
        </ul>  
      </nav>
   </header>
  );
}
