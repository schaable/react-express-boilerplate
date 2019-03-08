import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () =>
  <nav className="navbar">
    <Link className="navbar-brand" to="/home">
      © [Year Company]
    </Link>
  </nav>;

export default Footer;
