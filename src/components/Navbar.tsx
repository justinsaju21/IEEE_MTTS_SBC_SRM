import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIEEE}>IEEE</span>
                    <span className={styles.logoMTT}>MTT-S</span>
                    <span className={styles.logoBranch}>SRM IST</span>
                </Link>
                <div className={styles.navLinks}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <div className={styles.dropdown}>
                        <span className={styles.link}>About</span>
                        <div className={styles.dropdownContent}>
                            <Link href="/about/ieee-mtts">IEEE & MTT-S</Link>
                            <Link href="/about/chapter">Student Chapter</Link>
                        </div>
                    </div>
                    <Link href="/people" className={styles.link}>People</Link>
                    <Link href="/events" className={styles.link}>Events</Link>
                    <Link href="/gallery" className={styles.link}>Gallery</Link>
                    <Link href="/contact" className={styles.btnLink}>Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
