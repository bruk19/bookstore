import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <>
        <h1>Bookstore CMS</h1>
        <div className="nav-links">
          <Link className="links" to="/Books">
            Books
          </Link>
          <Link className="links" to="/Categories">
            Categories
          </Link>
        </div>
      </>
    );
  }
export default Navbar;