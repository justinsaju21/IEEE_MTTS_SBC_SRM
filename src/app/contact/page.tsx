import styles from './page.module.css';
import Link from 'next/link';
import { getSiteSettings } from '@/lib/sanity';

interface SiteSettings {
    email: string;
    instagramHandle: string;
    instagramUrl: string;
    linkedinUrl: string;
    address: string;
}

const fallbackSettings: SiteSettings = {
    email: 'ieeemtts.srm@gmail.com',
    instagramHandle: '@ieeemtts_srm',
    instagramUrl: 'https://instagram.com/ieeemtts_srm',
    linkedinUrl: 'https://www.linkedin.com/in/ieee-mtt-s-srm-1641343a9/',
    address: 'SRM Institute of Science and Technology\nKattankulathur, Chennai\nTamil Nadu - 603203, India',
};

export const metadata = {
    title: "Contact Us | IEEE MTT-S SBC SRM",
};

export default async function Contact() {
    const settings: SiteSettings = await getSiteSettings() || fallbackSettings;
    const { email, instagramHandle, instagramUrl, linkedinUrl, address } = { ...fallbackSettings, ...settings };

    return (
        <div className="container section">
            <div className={styles.header}>
                <h1 className={styles.title}>Contact Us</h1>
                <p className={styles.subtitle}>Get in touch with the IEEE MTT-S Student Branch Chapter.</p>
            </div>

            <div className={styles.contactGrid}>
                <div className={styles.infoCard}>
                    <div className={styles.iconWrapper}>
                        <span className={styles.icon}>✉️</span>
                    </div>
                    <h2>Official Email</h2>
                    <p>For membership, events, or collaboration inquiries:</p>
                    <a href={`mailto:${email}`} className={styles.link}>
                        {email}
                    </a>
                </div>

                <div className={styles.infoCard}>
                    <div className={styles.iconWrapper}>
                        <span className={styles.icon}>📸</span>
                    </div>
                    <h2>Instagram</h2>
                    <p>Stay updated with our latest activities:</p>
                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        {instagramHandle}
                    </a>
                </div>

                <div className={styles.infoCard}>
                    <div className={styles.iconWrapper}>
                        <span className={styles.icon}>💼</span>
                    </div>
                    <h2>LinkedIn</h2>
                    <p>Connect with us professionally:</p>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        IEEE MTT-S SRM
                    </a>
                </div>

                <div className={styles.infoCard}>
                    <div className={styles.iconWrapper}>
                        <span className={styles.icon}>📍</span>
                    </div>
                    <h2>Location</h2>
                    <address className={styles.address}>
                        {address.split('\n').map((line, i) => (
                            <span key={i}>{line}<br /></span>
                        ))}
                    </address>
                </div>
            </div>

            <div className={styles.ctaBlock}>
                <h3>Interested in joining IEEE MTT-S?</h3>
                <p>Become a member and unlock access to global IEEE resources, networking opportunities, and technical events.</p>
                <Link href="/about" className={styles.ctaButton}>
                    Learn About Our Chapter
                </Link>
            </div>
        </div>
    );
}
