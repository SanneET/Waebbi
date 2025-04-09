import React, { useState, useEffect } from 'react';
import "../styles/Scrolltotop.css"; // Importer din CSS-fil for styling

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-btn"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="#000" d="M15 20H9v-8H4.16L12 4.16L19.84 12H15z"/>
          </svg>
        </button>
      )
    );
  };
  
  export default ScrollToTop;