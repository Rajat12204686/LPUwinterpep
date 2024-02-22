import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Form</h1>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/form">Form</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
