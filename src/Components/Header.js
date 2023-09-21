import React from "react";
import { Link } from "react-router-dom";
import { FaCocktail } from "react-icons/fa";
const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ marginBottom: '20px' }}>
  <div className="container">
    <Link className="navbar-brand" to="/" style={{ fontSize: '24px', textDecoration: 'none', color: 'white' }}>
      <FaCocktail color="yellow" />
      &nbsp; Cocktail Website
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link
            className="nav-link active"
            aria-current="page"
            to="/about"
            style={{
              fontSize: '18px',
              textDecoration: 'none',
              color: 'white',
              marginRight: '20px',
              transition: 'color 0.3s, textDecoration 0.3s',
            }}
            onMouseOver={(e) => {
              e.target.style.color = 'yellow';
              e.target.style.textDecoration = 'underline';
            }}
            onMouseOut={(e) => {
              e.target.style.color = 'white';
              e.target.style.textDecoration = 'none';
            }}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/contact"
            style={{
              fontSize: '18px',
              textDecoration: 'none',
              color: 'white',
              marginRight: '20px',
              transition: 'color 0.3s, textDecoration 0.3s',
            }}
            onMouseOver={(e) => {
              e.target.style.color = 'yellow';
              e.target.style.textDecoration = 'underline';
            }}
            onMouseOut={(e) => {
              e.target.style.color = 'white';
              e.target.style.textDecoration = 'none';
            }}
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/help"
            style={{
              fontSize: '18px',
              textDecoration: 'none',
              color: 'white',
              marginRight: '20px',
              transition: 'color 0.3s, textDecoration 0.3s',
            }}
            onMouseOver={(e) => {
              e.target.style.color = 'yellow';
              e.target.style.textDecoration = 'underline';
            }}
            onMouseOut={(e) => {
              e.target.style.color = 'white';
              e.target.style.textDecoration = 'none';
            }}
          >
            Help
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

     
    </>
  );
};

export default Header;
