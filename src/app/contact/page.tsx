import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
    title: "Contact Us | IEEE MTT-S SBC SRM",
};

export default function Contact() {
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
                    <a href="mailto:ieeemtts.srm@gmail.com" className={styles.link}>
                        ieeemtts.srm@gmail.com
                    </a>
                </div>

                <div className={styles.infoCard}>
                    <div className={styles.iconWrapper}>
                        <span className={styles.icon}>📸</span>
                    </div>
                    <h2>Instagram</h2>
                    <p>Stay updated with our latest activities:</p>
                    <a href="https://instagram.com/ieeemtts_srm" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        @ieeemtts_srm
                    </a>
                </div>

                <div className={styles.infoCard}>
                    <div className={styles.iconWrapper}>
                        <span className={styles.icon}>💼</span>
                    </div>
                    <h2>LinkedIn</h2>
                    <p>Connect with us professionally:</p>
                    <a href="https://www.linkedin.com/in/ieee-mtt-s-srm-1641343a9/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        IEEE MTT-S SRM
                    </a>
                </div>

                <div className={styles.infoCard}>
                    <div className={styles.iconWrapper}>
                        <span className={styles.icon}>📍</span>
                    </div>
                    <h2>Location</h2>
                    <address className={styles.address}>
                        SRM Institute of Science and Technology<br />
                        Kattankulathur, Chennai<br />
                        Tamil Nadu - 603203, India
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
