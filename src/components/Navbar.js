import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar bg-${props.mode} p-3`} data-bs-theme={props.mode}>
      <div className="container-fluid">
  
      <h1 className="navbar-brand"><Link to="/">{props.title}</Link></h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">{props.title}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">{props.aboutText}</Link>
            </li>
            <div className="form-check form-switch m-auto">

              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.textColor}`} htmlFor="flexSwitchCheckDefault">{props.buttonText}</label>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}


