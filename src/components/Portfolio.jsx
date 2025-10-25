import React from 'react';

function Portfolio() {
  const projects = [
    { title: '3+', image: 'https://images.unsplash.com/photo-1588600878108-578307a3cc9d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=876', description: 'Years of extensive experience in crafting stories.' },
    { title: '300+', image: 'https://images.unsplash.com/photo-1527219525722-f9767a7f2884?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=873', description: 'Successful projects delivered for clients.'},
    { title: '100+', image: 'https://plus.unsplash.com/premium_photo-1661771773771-a093c948ba92?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870', description: 'Clients served with dedication and care.' },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>Our Portfolio</h2>
        <div className="grid">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;