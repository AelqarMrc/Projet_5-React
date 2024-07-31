import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

export default function Header() {
  return (
    <header className='header'>
      <nav>
        <img src={logo} alt="Logo" />
      </nav>
    </header>

  );
}
