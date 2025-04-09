import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Header.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // State der styrer om mobilmenuen er åben eller lukket

    // Lukker menuen når der klikkes på et link
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Wæbbi</Link> {/* Logo-link der fører til forsiden */}
            </div>

            {/* Knap der toggler mobilmenuen (burger-ikon) */}
            <button 
                className="menu-toggle" 
                onClick={() => setMenuOpen(!menuOpen)} // Åbner/lukker menuen ved klik
                aria-label="Toggle menu" // Bedre tilgængelighed for skærmlæsere
            >
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="15"></rect>
                    <rect y="30" width="100" height="15"></rect>
                    <rect y="60" width="100" height="15"></rect>
                </svg>
            </button>

            {/* Navigationsmenu der vises/skjules baseret på menuOpen-state */}
            <nav className={`nav ${menuOpen ? "open" : ""}`}>
                <Link to="/" onClick={handleLinkClick}>Forside</Link> {/* Link til forsiden */}
                <Link to="/service" onClick={handleLinkClick}>Service</Link>
                <Link to="/vores-vaerdier" onClick={handleLinkClick}>Vores værdier</Link>
                <Link to="/kontakt" onClick={handleLinkClick}>Kontakt</Link>
            </nav>

            {/* Mørkt overlay der vises når menuen er åben - lukker menuen ved klik */}
            {menuOpen && (
                <div 
                    className="overlay" 
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </header>
    );
}