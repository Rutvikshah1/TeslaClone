import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer__links">
        <li className="footer__links--link">
          <a href="/">HOME</a>
        </li>
        <li className="footer__links--link">
          <a href="/">SOLAR ROOF</a>
        </li>
        <li className="footer__links--link">
          <a href="/">SOLAR PANELS</a>
        </li>
        <li className="footer__links--link">
          <a href="/">CAREER</a>
        </li>
        <li className="footer__links--link">
          <a href="/">CONTACT US</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
