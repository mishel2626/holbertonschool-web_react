import React from 'react';
import './Header.css';
import image3 from '../assets/holberton-logo.jpg';

const Header = () => {
  return (
    <div className="App-header">
      <img src={image3} alt="holberton logo" />
      <h1>School dashboard</h1>
    </div>
  );
};

export default Header;