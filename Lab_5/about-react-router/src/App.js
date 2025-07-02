import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';
import Quiz from './components/Quiz';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <nav className="bg-light px-3 py-2">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-dark text-decoration-none me-4 ${isActive ? 'fw-bold' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-dark text-decoration-none me-4 ${isActive ? 'fw-bold' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                `text-dark text-decoration-none me-4 ${isActive ? 'fw-bold' : ''}`
              }
            >
              News
            </NavLink>
            <NavLink
              to="/quiz"
              className={({ isActive }) =>
                `text-dark text-decoration-none me-4 ${isActive ? 'fw-bold' : ''}`
              }
            >
              Quiz
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-dark text-decoration-none ${isActive ? 'fw-bold' : ''}`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;