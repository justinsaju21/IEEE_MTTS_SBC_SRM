import styles from './page.module.css';

export const metadata = {
    title: "About IEEE & MTT-S | IEEE MTT-S Student Branch Chapter SRM IST",
};

export default function AboutIEEE() {
    return (
        <div className="container section">
            <div className={styles.header}>
                <h1 className={styles.title}>About IEEE & MTT-S</h1>
                <p className={styles.subtitle}>Fostering technological innovation and excellence for the benefit of humanity.</p>
            </div>

            <div className={styles.contentBlock}>
                <h2>About IEEE</h2>
                <p>
                    IEEE is the world&apos;s largest technical professional organization dedicated to advancing technology for the benefit of humanity.
                    With over 420,000 members in more than 160 countries, IEEE influences the global engineering achievement by fostering technological innovation,
                    enabling members&apos; careers, and promoting community worldwide.
                </p>
            </div>

            <div className={styles.contentBlock}>
                <h2>About MTT-S</h2>
                <p>
                    The IEEE Microwave Theory and Technology Society (MTT-S) is a transnational society with more than 10,500 members and 190 chapters worldwide.
                    The society promotes the advancement of microwave theory and its applications, including RF, microwave, millimeter-wave, and terahertz technologies.
                </p>
            </div>

            <div className={styles.contentBlock}>
                <h2>Focus Areas</h2>
                <div className={styles.focusGrid}>
                    <div className={styles.focusItem}>RF & Microwaves</div>
                    <div className={styles.focusItem}>Antennas & Propagation</div>
                    <div className={styles.focusItem}>Radar Systems</div>
                    <div className={styles.focusItem}>High-Frequency Systems</div>
                    <div className={styles.focusItem}>Wireless Communications</div>
                    <div className={styles.focusItem}>Electromagnetics</div>
                </div>
            </div>
        </div>
    );
}
