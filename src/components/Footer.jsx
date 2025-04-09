import React, { Component } from "react";
import "../styles/Footer.css"; // Import your CSS file for styling
import logofooter from "../assets/img/logo.webp";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-container">
                    
                    {/* Ring til os */}
                    <div className="footer-column">
                        <h4>Ring til os</h4>
                        <p>72 28 60 00</p>
                        <p>Man-Tors: 9-14</p>
                        <p>Fre: 9-12</p>
                    </div>

                    {/* Skriv til os */}
                    <div className="footer-column">
                        <h4>Skriv til os</h4>
                        <p>info@eaaa.dk</p>
                    </div>

                    {/* Logo i midten */}
                    <div className="footer-logo">
                        <img src={logofooter} alt="Logo" />
                    </div>

                    {/* Besøg os */}
                    <div className="footer-column">
                        <h4>Besøg os</h4>
                        <p>Sønderhøj 30</p>
                        <p>8260 Viby J</p>
                        <p>Danmark</p>
                    </div>

                    {/* Følg os */}
                    <div className="footer-column">
                        <h4>Følg os</h4>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>LinkedIn</p>
                    </div>

                </div>
            </footer>
        );
    }
}