import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <>
      <nav>
        <span className="brand">Bookstore CMS</span>{' '}
        <ul>
          <li><Link className="nav-link" to="/">BOOKS</Link></li>
          <li><Link className="nav-link" to="/categories">CATEGORIES</Link></li>
        </ul>
      </nav>
      </>
    );
  }
export default Navbar;