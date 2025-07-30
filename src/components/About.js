import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About React-Build</h2>
          <p>
            React-Build is a modern web development platform that empowers developers to create 
            stunning, high-performance websites using React.js. Our mission is to simplify the 
            development process while delivering exceptional user experiences.
          </p>
          <p>
            With years of experience in web development and a passion for clean, efficient code, 
            we've created a framework that combines the power of React with modern design principles 
            and best practices.
          </p>
          <p>
            Whether you're a seasoned developer or just starting your journey, React-Build provides 
            the tools and structure you need to bring your ideas to life.
          </p>
        </div>
        <div className="about-image">
          <div style={{
            width: '400px',
            height: '300px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '2rem',
            fontWeight: 'bold'
          }}>
            🚀 React-Build
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 