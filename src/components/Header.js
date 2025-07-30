import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <a href="#home" className="logo">🚀 React-Build</a>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 