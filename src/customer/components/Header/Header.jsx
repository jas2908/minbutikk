import React from 'react';
import './header.css'; // Import the CSS file

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="title">E-Commerce</h1>
                <nav className="nav">
                    <a href="/" className="nav-link">Home</a>
                    <a href="/products" className="nav-link">Products</a>
                    <a href="/about" className="nav-link">About</a>
                    <a href="/contact" className="nav-link">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
