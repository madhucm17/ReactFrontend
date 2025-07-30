import React from 'react';

function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Built with React.js for optimal performance and smooth user experience.'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Looks perfect on all devices - desktop, tablet, and mobile.'
    },
    {
      icon: '🎨',
      title: 'Modern UI',
      description: 'Beautiful, clean design with smooth animations and transitions.'
    },
    {
      icon: '🔧',
      title: 'Easy to Customize',
      description: 'Well-structured code that\'s easy to modify and extend.'
    },
    {
      icon: '🚀',
      title: 'Production Ready',
      description: 'Optimized for deployment with build tools and best practices.'
    },
    {
      icon: '💻',
      title: 'Developer Friendly',
      description: 'Clean code structure with modern JavaScript and React patterns.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-content">
        <h2 className="section-title">Why Choose React-Build?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features; 