'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logoWrapper}>
                    <div className={styles.logoImage}>
                        <Image
                            src="/logo.jpg"
                            alt="IEEE MTT-S SRM Logo"
                            width={50}
                            height={50}
                            className={styles.img}
                        />
                    </div>
                    <div className={styles.logoText}>
                        <span className={styles.logoIEEE}>IEEE MTT-S SBC</span>
                        <span className={styles.logoBranch}>SRM IST</span>
                    </div>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className={styles.menuButton}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.menuIcon} ${isMenuOpen ? styles.menuOpen : ''}`}></span>
                </button>

                {/* Navigation Links */}
                <div className={`${styles.navLinks} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <Link
                        href="/"
                        className={`${styles.link} ${isActive('/') ? styles.active : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className={`${styles.link} ${isActive('/about') ? styles.active : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="/people"
                        className={`${styles.link} ${isActive('/people') ? styles.active : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Office Bearers
                    </Link>
                    <Link
                        href="/events"
                        className={`${styles.link} ${isActive('/events') ? styles.active : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Events
                    </Link>
                    <Link
                        href="/gallery"
                        className={`${styles.link} ${isActive('/gallery') ? styles.active : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Gallery
                    </Link>
                    <Link
                        href="/contact"
                        className={styles.btnLink}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
