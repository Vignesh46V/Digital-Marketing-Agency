import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>Musingly</h1>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;