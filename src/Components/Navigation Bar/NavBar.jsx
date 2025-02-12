import React, { useState } from 'react';
import './navBar.scss';
import Input from './SearchIcon';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <h1>
            Narayani <br />
            Machines
          </h1>
        </a>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="/">Industries</a>
          <a href="/">Products</a>
          <a href="/">Services and Support</a>
          <a href="/">Shop</a>
          <a href="/">About</a>
        </div>
      </div>

      <div className="right">
        <a>
          <Input className="searchIcon" />
        </a>

        <span className="location">
          <img src="LocationIcon.png" alt="Location" />
          <a href="/">Location</a>
        </span>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default NavBar;
