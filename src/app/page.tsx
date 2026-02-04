import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>
            IEEE Microwave Theory and Technology Society (MTT-S)
            <span className={styles.heroSubtitle}>Student Branch Chapter – SRM Institute of Science and Technology</span>
          </h1>
          <p className={styles.heroDescription}>
            Advancing the technology of microwaves, RF, and wireless applications through education, technical meetings, and student activities at SRM IST.
          </p>
          <div className={styles.heroActions}>
            <Link href="/about/chapter" className="btn">
              About Our Chapter
            </Link>
            <Link href="/events" className="btn btn-secondary">
              Latest Events
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Event Highlight Section */}
      <section className="section">
        <div className="container">
          <h2 className={styles.sectionTitle}>Latest Highlight</h2>
          <div className={styles.highlightCard}>
            <div className={styles.highlightContent}>
              <h3>Inauguration of IEEE MTT-S SBC</h3>
              <p>Celebrating the official formation of our chapter with distinguished speakers from the industry and academia. Join us as we embark on a journey of innovation in RF and Microwave technologies.</p>
              <Link href="/events" className={styles.textLink}>
                View Event Details &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className={`section ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.grid}>
            <Link href="/events" className={styles.card}>
              <h3>Events</h3>
              <p>Explore our workshops, seminars, and technical talks.</p>
            </Link>
            <Link href="/people" className={styles.card}>
              <h3>Office Bearers</h3>
              <p>Meet the dedicated team leading our chapter.</p>
            </Link>
            <Link href="/gallery" className={styles.card}>
              <h3>Gallery</h3>
              <p>Glimpses of our vibrant community and activities.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
