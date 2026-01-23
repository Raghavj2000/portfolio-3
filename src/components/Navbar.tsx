"use client";

import { useState } from 'react';
import styles from './Navbar.module.css';
import GamePopup from './GamePopup';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isGameOpen, setIsGameOpen] = useState(false);


    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.container}>
                    <a href="#" className={styles.logoBtn} aria-label="Home" onClick={closeMenu}>
                        <svg className={styles.logoSvg} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="2" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="2" fill="rgba(45, 212, 191, 0.1)" />
                            <path d="M14 28V12H20C23.3137 12 26 14.6863 26 18C26 21.3137 23.3137 24 20 24H14M14 24L26 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>

                    {/* Desktop Links */}
                    <div className={`${styles.links} ${styles.desktopLinks}`}>
                        <a href="#about" className={styles.link}>About</a>
                        <a href="#experience" className={styles.link}>Experience</a>
                        <a href="#projects" className={styles.link}>Projects</a>
                        <a href="#blog" className={styles.link}>Blog</a>
                        <a href="#contact" className={styles.link}>Contact</a>

                        <button
                            className={styles.gameTrigger}
                            onClick={() => setIsGameOpen(true)}
                            title="Play a game!"
                        >
                            <span className={styles.gameIcon}>👾</span>
                        </button>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <a href="#about" className={styles.link} onClick={closeMenu}>About</a>
                    <a href="#experience" className={styles.link} onClick={closeMenu}>Experience</a>
                    <a href="#projects" className={styles.link} onClick={closeMenu}>Projects</a>
                    <a href="#blog" className={styles.link} onClick={closeMenu}>Blog</a>
                    <a href="#contact" className={styles.link} onClick={closeMenu}>Contact</a>

                    <button
                        className={styles.gameTrigger}
                        onClick={() => {
                            setIsGameOpen(true);
                            closeMenu();
                        }}
                        title="Play a game!"
                    >
                        <span className={styles.gameIcon}>👾</span>
                    </button>
                </div>
            )}

            <GamePopup isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
        </>
    );
}
