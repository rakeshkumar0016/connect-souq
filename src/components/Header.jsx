import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoWebsite from '../assets/images/Logo_website.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="main-header-class">
          <div className="website-logo">
             <img src={logoWebsite} alt="Website Logo" className="logo-image" /> 
          </div>
          <div className={`navbar ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/shop">Process</NavLink></li>
              <li><NavLink to="/shop">Why Us</NavLink></li>
              <li><NavLink to="/shop">Ecommerce</NavLink></li>
            </ul>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            ☰
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 