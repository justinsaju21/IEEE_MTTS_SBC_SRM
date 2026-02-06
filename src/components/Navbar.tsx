'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/people', label: 'Office Bearers' },
    { href: '/events', label: 'Events' },
    { href: '/gallery', label: 'Gallery' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };

    return (
        <div className={styles.navbarWrapper}>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`${styles.header} ${scrolled ? styles.scrolled : styles.top}`}
            >
                <nav className={styles.nav}>
                    {/* Logo */}
                    <Link href="/" className={styles.logoWrapper}>
                        <div className={styles.logoImage}>
                            <Image
                                src="/logo.jpg"
                                alt="IEEE MTT-S Logo"
                                width={40}
                                height={40}
                                className={styles.img}
                            />
                        </div>
                        <div className={styles.logoText}>
                            <span className={styles.logoIEEE}>IEEE MTT-S SBC</span>
                            <span className={styles.logoBranch}>SRM IST</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={styles.navLinks}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`${styles.link} ${isActive(link.href) ? styles.active : ''}`}
                            >
                                {link.label}
                                {isActive(link.href) && (
                                    <motion.span
                                        layoutId="activeNavIndicator"
                                        className={styles.activeBackground}
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                        <Link href="/contact" className={styles.btnLink}>
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={styles.menuButton}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={styles.mobileLink}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className={`${styles.btnLink} ${styles.mobileBtn}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
