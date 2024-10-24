import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ currentPage, setCurrentPage }) {
  return (
    <nav>
      <ul>
        <li>
          <Link 
            to="/" 
            onClick={() => setCurrentPage('/')}
            className={currentPage === '/' ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            onClick={() => setCurrentPage('/about')}
            className={currentPage === '/about' ? 'active' : ''}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link 
            to="/portfolio" 
            onClick={() => setCurrentPage('/portfolio')}
            className={currentPage === '/portfolio' ? 'active' : ''}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            onClick={() => setCurrentPage('/contact')}
            className={currentPage === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link 
            to="/resume" 
            onClick={() => setCurrentPage('/resume')}
            className={currentPage === '/resume' ? 'active' : ''}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
