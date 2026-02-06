'use client';

import styles from './Footer.module.css';
import Link from 'next/link';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const fallbackData = {
    copyrightText: `© ${new Date().getFullYear()} IEEE MTT-S SBC SRM. All rights reserved.`,
    quickLinks: [
        { label: 'About', href: '/about' },
        { label: 'Events', href: '/events' },
        { label: 'Contact', href: '/contact' },
    ],
    socialLinks: {
        instagram: 'https://instagram.com/ieeemtts_srm',
        linkedin: 'https://www.linkedin.com/in/ieee-mtt-s-srm-1641343a9/',
        email: 'ieeemtts.srm@gmail.com',
    },
    tagline: 'Empowering students in microwave engineering and RF technologies.',
};

export default function Footer() {
    const { copyrightText, quickLinks, socialLinks, tagline } = fallbackData;

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerGrid}>
                    {/* Brand Section */}
                    <div className={styles.brand}>
                        <h3>IEEE MTT-S SBC</h3>
                        <p className={styles.tagline}>{tagline}</p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.links}>
                        <h4>Quick Links</h4>
                        <ul>
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className={styles.social}>
                        <h4>Connect</h4>
                        <div className={styles.socialIcons}>
                            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram size={22} />
                            </a>
                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={22} />
                            </a>
                            <a href={`mailto:${socialLinks.email}`} aria-label="Email">
                                <Mail size={22} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>{copyrightText}</p>
                    <p className={styles.disclaimer}>
                        IEEE is a registered trademark of The Institute of Electrical and Electronics Engineers, Inc.
                    </p>
                </div>
            </div>
        </footer>
    );
}
