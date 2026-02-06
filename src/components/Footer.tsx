'use client';

import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const fallbackData = {
    copyrightText: `© ${new Date().getFullYear()} IEEE MTT-S SBC SRM IST`,
    quickLinks: [
        { label: 'About', href: '/about' },
        { label: 'Events', href: '/events' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Contact', href: '/contact' },
    ],
    socialLinks: {
        instagram: 'https://instagram.com/ieeemtts_srm',
        linkedin: 'https://www.linkedin.com/in/ieee-mtt-s-srm-1641343a9/',
        email: 'ieeemtts.srm@gmail.com',
    },
    tagline: 'Empowering students in microwave engineering, RF technologies, and wireless communications through research, workshops, and industry engagement.',
};

export default function Footer() {
    const { copyrightText, quickLinks, socialLinks, tagline } = fallbackData;

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    {/* Brand Section */}
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logoLink}>
                            <div className={styles.logoImage}>
                                <Image
                                    src="/logo.jpg"
                                    alt="IEEE MTT-S SRM"
                                    width={48}
                                    height={48}
                                />
                            </div>
                            <div className={styles.logoText}>
                                <span className={styles.logoIEEE}>IEEE MTT-S SBC</span>
                                <span className={styles.logoBranch}>SRM IST</span>
                            </div>
                        </Link>
                        <p className={styles.tagline}>{tagline}</p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.column}>
                        <h4>Quick Links</h4>
                        <ul className={styles.linkList}>
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className={styles.column}>
                        <h4>Connect</h4>
                        <div className={styles.socialLinks}>
                            <a
                                href={socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className={styles.socialIcon}
                            >
                                <Instagram />
                            </a>
                            <a
                                href={socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className={styles.socialIcon}
                            >
                                <Linkedin />
                            </a>
                            <a
                                href={`mailto:${socialLinks.email}`}
                                aria-label="Email"
                                className={styles.socialIcon}
                            >
                                <Mail />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>{copyrightText}</p>
                    <p className={styles.disclaimer}>
                        IEEE and MTT-S are registered trademarks of The Institute of Electrical and Electronics Engineers, Inc.
                    </p>
                </div>
            </div>
        </footer>
    );
}
