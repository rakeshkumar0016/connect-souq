import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoWebsite from '../assets/images/Logo_website.svg';
import iconPhone from '../assets/images/call_icon.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="main-header-class">
          {/* Logo */}
          <div className="website-logo">
            <img src={logoWebsite} alt="Website Logo" className="logo-image" />
          </div>

          {/* Navbar */}

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

              {/* Process menu with submenu */}

              <li className="dropdown">
                <NavLink to="/process" activeClassName="active-link" onClick={() => setMenuOpen(false)}>
                  Process
                </NavLink>
                <ul className="submenu">
                  <li><NavLink to="/step-1">Step 1</NavLink></li>
                  <li><NavLink to="/step-2">Step 2</NavLink></li>
                  <li><NavLink to="/step-3">Step 3</NavLink></li>
                  <li><NavLink to="/step-1" onClick={() => setMenuOpen(false)}>Step 1</NavLink></li>
                  <li><NavLink to="/step-2" onClick={() => setMenuOpen(false)}>Step 2</NavLink></li>
                  <li><NavLink to="/step-3" onClick={() => setMenuOpen(false)}>Step 3</NavLink></li>
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


          {/* Menu Icon for mobile */}
          <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle Menu">
            ☰
          </button>

          {/* Call button and Join Now button */}
          <div className="call_button_align">
            {/* Phone Call Section */}
            <a href="tel:+97142285285" className="phone_call" aria-label="Call Us">
              <img src={iconPhone} alt="Call Icon" className="phone-icon" />
              <span>+97142285285</span>
            </a>
            <div className="button">
              <button className="btn_join">Join Now</button>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;