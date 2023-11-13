import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'

import "../navbar/_navbar.scss"

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar_logo'>
        <img src={logo} alt='Logo du site Kasa' />
      </div>
      <div className='navbar_menu'>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/about">A Propos</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
