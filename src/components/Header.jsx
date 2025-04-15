import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo.jpg';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <Link to="/">
                <img src={logo} className="navbar-logo" alt="Cruz Auto Detailing" />
            </Link>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
        </nav>
    );
};

export default Header;
