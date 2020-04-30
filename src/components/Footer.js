import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/">
            <i className="fab fa-snapchat-ghost"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
        <ul className="list-inline text-capitalize">
          <li className="list-inline-item">
            <Link to="/">Home</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/">video library</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/">pricing plans</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/">Terms</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/">Privacy Policy</Link>
          </li>
        </ul>
        <p className="copyright">
          VMS<span className="text-success">.</span> © 2020
        </p>
      </footer>
    </div>
  );
};

export default Footer;
