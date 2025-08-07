import React from 'react';

function Features() {
  const features = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web applications and websites built with modern technologies and best practices.'
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions for your business needs.'
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and growth.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces and exceptional user experiences.'
    },
    {
      icon: '🔧',
      title: 'Technical Support',
      description: '24/7 technical support and maintenance services for all your digital solutions.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-content">
        <h2 className="section-title">Our Services</h2>
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