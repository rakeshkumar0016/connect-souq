import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoWebsite from '../assets/images/Logo_website.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="main-header-class">
          <div className="website-logo">
            <img src={logoWebsite} alt="Website Logo" className="logo-image" />
          </div>
          <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active-link" onClick={() => setMenuOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active-link" onClick={() => setMenuOpen(false)}>
                  About
                </NavLink>
              </li>
              {/* Process with submenu */}
              <li className="dropdown">
                <NavLink to="/process" activeClassName="active-link" onClick={() => setMenuOpen(false)}>
                  Process
                </NavLink>
                <ul className="submenu">
                  <li><NavLink to="/step-1">Step 1</NavLink></li>
                  <li><NavLink to="/step-2">Step 2</NavLink></li>
                  <li><NavLink to="/step-3">Step 3</NavLink></li>
                </ul>
              </li>
              <li>
                <NavLink to="/why-us" activeClassName="active-link" onClick={() => setMenuOpen(false)}>
                  Why Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/ecommerce" activeClassName="active-link" onClick={() => setMenuOpen(false)}>
                  Ecommerce
                </NavLink>
              </li>
            </ul>
          </nav>
          <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle Menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;