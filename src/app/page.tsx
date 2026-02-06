import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.badge}>IEEE MTT-S Student Branch Chapter</span>
            <h1 className={styles.heroTitle}>
              Microwave Theory and Technology Society
            </h1>
            <p className={styles.heroInstitution}>
              SRM Institute of Science and Technology
            </p>
            <p className={styles.heroDescription}>
              Empowering students in microwave engineering, RF systems, and wireless communications through research, workshops, and industry engagement.
            </p>
            <div className={styles.heroActions}>
              <Link href="/about/chapter" className={styles.btnPrimary}>
                Explore Our Chapter
              </Link>
              <Link href="/events" className={styles.btnSecondary}>
                View Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Focus Areas</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>IEEE</span>
              <span className={styles.statLabel}>Global Network</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>MTT-S</span>
              <span className={styles.statLabel}>Technical Society</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className={styles.linksSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Get Involved</h2>
          <div className={styles.grid}>
            <Link href="/events" className={styles.card}>
              <div className={styles.cardIcon}>📅</div>
              <h3>Events & Activities</h3>
              <p>Workshops, Guest Lectures, and Technical Sessions.</p>
              <span className={styles.cardArrow}>→</span>
            </Link>
            <Link href="/people" className={styles.card}>
              <div className={styles.cardIcon}>👥</div>
              <h3>Office Bearers</h3>
              <p>Meet our Faculty Advisors and Executive Committee.</p>
              <span className={styles.cardArrow}>→</span>
            </Link>
            <Link href="/about/chapter" className={styles.card}>
              <div className={styles.cardIcon}>🎯</div>
              <h3>Our Mission</h3>
              <p>Learn about our vision, objectives, and focus areas.</p>
              <span className={styles.cardArrow}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Join the IEEE MTT-S Community?</h2>
            <p>Connect with like-minded students, participate in cutting-edge research, and build your professional network.</p>
            <Link href="/contact" className={styles.btnPrimary}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
