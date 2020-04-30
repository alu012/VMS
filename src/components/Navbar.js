import React from 'react';
import { Link } from 'react-router-dom';

import SigninModal from './SigninModal';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-md shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand">
          VMS<span className="text-success">.</span>
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav text-uppercase mx-auto nav-middle">
            <li className="nav-item" role="presentation">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item mx-md-3" role="presentation">
              <Link to="/" className="nav-link">
                video library
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link to="/pricing-plans" className="nav-link">
                pricing plans
              </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav">
            <li className="nav-item" role="presentation">
              <SigninModal />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
