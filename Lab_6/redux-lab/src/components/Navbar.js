import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
    <div className="container">
      <ul className="navbar-nav gap-3">
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'fw-bold text-dark' : ''}`}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/news" className="nav-link">News</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/quizzes" className="nav-link">Quiz</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;