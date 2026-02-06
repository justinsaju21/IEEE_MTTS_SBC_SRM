import Link from 'next/link';
import styles from './page.module.css';
import { getHomePage } from '@/lib/sanity';

// Fallback data if Sanity doesn't have content yet
const fallbackData = {
  heroBadge: 'IEEE MTT-S Student Branch Chapter',
  heroTitle: 'Microwave Theory and Technology Society',
  heroInstitution: 'SRM Institute of Science and Technology',
  heroDescription: 'Empowering students in microwave engineering, RF systems, and wireless communications through research, workshops, and industry engagement.',
  stats: [
    { number: '10+', label: 'Focus Areas' },
    { number: 'IEEE', label: 'Global Network' },
    { number: 'MTT-S', label: 'Technical Society' },
  ],
  quickLinks: [
    { icon: '📡', title: 'About MTT-S', description: 'Learn about IEEE MTT-S and our chapter', link: '/about' },
    { icon: '📅', title: 'Events', description: 'Upcoming workshops and technical talks', link: '/events' },
    { icon: '👥', title: 'Our Team', description: 'Meet the office bearers', link: '/people' },
  ],
  ctaTitle: 'Ready to Join?',
  ctaDescription: 'Become a part of the IEEE MTT-S community and unlock global opportunities in microwave engineering.',
  ctaButtonText: 'Get Started',
  ctaButtonLink: '/contact',
};

export default async function Home() {
  const data = await getHomePage() || fallbackData;

  const {
    heroBadge,
    heroTitle,
    heroInstitution,
    heroDescription,
    stats,
    quickLinks,
    ctaTitle,
    ctaDescription,
    ctaButtonText,
    ctaButtonLink,
  } = { ...fallbackData, ...data };

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.badge}>{heroBadge}</span>
            <h1 className={styles.heroTitle}>{heroTitle}</h1>
            <p className={styles.heroInstitution}>{heroInstitution}</p>
            <p className={styles.heroDescription}>{heroDescription}</p>
            <div className={styles.heroActions}>
              <Link href="/about" className={styles.btnPrimary}>
                Explore Our Chapter
              </Link>
              <Link href="/events" className={styles.btnSecondary}>
                View Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {(stats || fallbackData.stats).map((stat: { number: string; label: string }, index: number) => (
              <div key={index} className={styles.statItem}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.quickLinks}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Get Involved</h2>
          <div className={styles.linksGrid}>
            {(quickLinks || fallbackData.quickLinks).map((item: { icon: string; title: string; description: string; link: string }, index: number) => (
              <Link key={index} href={item.link} className={styles.linkCard}>
                <span className={styles.linkIcon}>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>{ctaTitle}</h2>
          <p>{ctaDescription}</p>
          <Link href={ctaButtonLink || '/contact'} className={styles.ctaButton}>
            {ctaButtonText}
          </Link>
        </div>
      </section>
    </main>
  );
}
