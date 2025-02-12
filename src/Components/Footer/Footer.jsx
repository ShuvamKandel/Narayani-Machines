import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        {/* Left aligned links */}
        <div className="footer__left">
          <ul>
            <li><a href="#industries">Industries</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#services">Services & Support</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>

        {/* Center aligned contact numbers */}
        <div className="footer__center">
          <p>Contact Us:</p>
          <p>+977 9851092467</p>
          <p>+977 9860472047</p>
          <p>01-1232124</p>
        </div>

        {/* Right aligned social media links */}
        <div className="footer__right">
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
