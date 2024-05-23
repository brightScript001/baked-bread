import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
    const [navbarTransparent, setNavbarTransparent] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setNavbarTransparent(false);
            } else {
                setNavbarTransparent(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${navbarTransparent ? 'transparent' : ''}`}>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="#">Baked Bread</a>
                </div>
                <ul className="navbar-menu">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Menu</a>

                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                </ul>
                <div class="navbar-icons">
                    <a href="#" class="cart-icon"></a>
                    <a href="#" class="profile-icon"></a>
                </div>
            </nav>
        </nav>
    );
}

export default Navbar;