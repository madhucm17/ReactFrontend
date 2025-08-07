import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Zerozilla</h2>
          <p>
            Zerozilla is a leading technology company that specializes in providing comprehensive 
            digital solutions to businesses worldwide. With years of experience in the industry, 
            we have established ourselves as a trusted partner for companies looking to transform 
            their digital presence.
          </p>
          <p>
            Our team of expert developers, designers, and digital marketers work together to 
            deliver cutting-edge solutions that drive business growth. We believe in innovation, 
            quality, and customer satisfaction, which is why we stay updated with the latest 
            technologies and industry trends.
          </p>
          <p>
            From custom web applications to mobile apps, cloud solutions to digital marketing 
            strategies, Zerozilla offers end-to-end services that help businesses thrive in 
            the digital age. Our commitment to excellence and attention to detail sets us apart 
            in the competitive technology landscape.
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
            fontWeight: 'bold',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚀</div>
              <div>Zerozilla</div>
              <div style={{ fontSize: '1rem', marginTop: '0.5rem', opacity: 0.8 }}>
                Technology Solutions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 