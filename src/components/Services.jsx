import React from 'react';

function Services() {
  const services = [
    { title: 'Creative Services', description: 'We turn ideas into visually compelling stories through design, copy, illustration, and more.' },
    { title: 'Branding and Identity', description: 'We help brands build a strong, memorable identity through thoughtful design, strategy, and storytelling.' },
    { title: 'Digital Marketing', description: 'SEO, social media, and campaigns that drive results.' },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="grid">
          {services.map((service, index) => (
            <div key={index} className="card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;