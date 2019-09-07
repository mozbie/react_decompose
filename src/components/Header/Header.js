import React from 'react';
import './Header.css';

import NavigationList from '../NavigationList';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Site Name</h1>
      <NavigationList />
    </header>
  );
}

export default Header;