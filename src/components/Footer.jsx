import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Musingly Creative Services. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/company/musingly-creative-services/">LinkedIn</a>
          <a href="https://www.instagram.com/musinglyofficial/">Instagram</a>
          <a href="musingly.official@gmail.com">musingly.official@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;