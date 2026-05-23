import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '15px', background: '#333', color: 'white' }}>
      <h2>Ingoude Company | www.reallygreatsite.com</h2>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', padding: 0 }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
        <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
        <li><Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
www.reallygreatsite.com