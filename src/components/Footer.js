import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Zerozilla. All rights reserved.</p>
        <p>Leading Technology Solutions Company</p>
        <p>
          <a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a> | 
          <a href="#features" style={{ color: 'white', textDecoration: 'none' }}> Services</a> | 
          <a href="#about" style={{ color: 'white', textDecoration: 'none' }}> About</a> | 
          <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}> Contact</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer; 