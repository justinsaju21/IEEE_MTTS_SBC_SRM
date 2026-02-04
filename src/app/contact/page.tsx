import styles from './page.module.css';

export const metadata = {
    title: "Contact Us | IEEE MTT-S Student Branch Chapter SRM IST",
};

export default function Contact() {
    return (
        <div className="container section">
            <div className={styles.header}>
                <h1 className={styles.title}>Contact Us</h1>
                <p className={styles.subtitle}>Get in touch with the IEEE MTT-S Student Branch Chapter.</p>
            </div>

            <div className={styles.contactContainer}>
                <div className={styles.infoCard}>
                    <h2>General Inquiries</h2>
                    <p>
                        For any queries regarding membership, events, or collaboration, please email us at:
                    </p>
                    <a href="mailto:ieeemtts.srm@gmail.com" className={styles.emailLink}>
                        ieeemtts.srm@gmail.com
                    </a>
                </div>

                <div className={styles.infoCard}>
                    <h2>Social Media</h2>
                    <p>Follow us for the latest updates:</p>
                    <a href="https://instagram.com/ieeemtts_srm" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        Instagram: @ieeemtts_srm
                    </a>
                </div>

                <div className={styles.infoCard}>
                    <h2>Location</h2>
                    <address className={styles.address}>
                        <strong>SRM Institute of Science and Technology</strong><br />
                        Kattankulathur, Chengalpattu District,<br />
                        Tamil Nadu - 603203, India.
                    </address>
                </div>
            </div>
        </div>
    );
}
