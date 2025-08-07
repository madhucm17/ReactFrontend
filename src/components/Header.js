import React from 'react';

function Header({ user, onLogout }) {
  return (
    <header className="header">
      <div className="header-content">
        <a href="#home" className="logo">🚀 Zerozilla</a>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            {user && (
              <>
                <li className="user-info">
                  <span>👤 {user.username}</span>
                </li>
                <li>
                  <button onClick={onLogout} className="logout-btn">
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 