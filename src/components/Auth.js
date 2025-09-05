import React, { useState } from 'react';
import './Auth.css';

function Auth({ onLogin }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const endpoint = isSignUp ? '/api/signup' : '/api/login';
      const response = await fetch(`http://localhost:8081${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          email: formData.email
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage(data.message);
        
        if (isSignUp) {
          // After successful signup, switch to login mode
          setIsSignUp(false);
          setFormData({ username: formData.username, password: '', email: '' });
          setMessage('Registration successful! Please sign in with your credentials.');
        } else {
          // After successful login, store token and redirect
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          onLogin(data.user, data.token);
          setFormData({ username: '', password: '', email: '' });
        }
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('Connection error. Please try again.');
      console.error('Auth error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
        
        {message && (
          <div className={`message ${message.includes('successful') || message.includes('Login successful') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter your username"
            />
          </div>

          {isSignUp && (
            <div className="form-group">
              <label htmlFor="email">Email (Optional)</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Sign In')}
          </button>
        </form>

        <div className="auth-switch">
          <p>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button 
              type="button" 
              className="switch-button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setMessage('');
                setFormData({ username: '', password: '', email: '' });
              }}
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>

        <div className="auth-info">
          <p>🚀 <strong>Welcome to Zerozilla web-Page and Thank You </strong></p>
          {isSignUp && (
            <p>🔐 <strong>Security:</strong> Don't Worry Your Passwords are encrypted with bcrypt</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth; 
