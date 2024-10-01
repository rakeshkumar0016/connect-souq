import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoWebsite from '../assets/images/Logo_website.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Footer">
      <div className="container">
        <h3>home</h3>
      </div>
    </div>
  );
};

export default Header; 