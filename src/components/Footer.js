import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 React-Build. All rights reserved.</p>
        <p>Built with ❤️ using React.js</p>
        <p>
          <a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a> | 
          <a href="#features" style={{ color: 'white', textDecoration: 'none' }}> Features</a> | 
          <a href="#about" style={{ color: 'white', textDecoration: 'none' }}> About</a> | 
          <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}> Contact</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer; 