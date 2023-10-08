import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Logo.css';

function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="логотип" />
    </Link>
  );
}

export default Logo;
