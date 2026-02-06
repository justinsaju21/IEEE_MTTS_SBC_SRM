'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { FadeIn, StaggerContainer, StaggerItem, HeroText } from '@/components/Animations';

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

interface HomeData {
  heroBadge?: string;
  heroTitle?: string;
  heroInstitution?: string;
  heroDescription?: string;
  stats?: { number: string; label: string }[];
  quickLinks?: { icon: string; title: string; description: string; link: string }[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
}

export default function Home() {
  const [data, setData] = useState<HomeData>(fallbackData);

  useEffect(() => {
    fetch('/api/home')
      .then(res => res.json())
      .then(homeData => {
        if (homeData) setData({ ...fallbackData, ...homeData });
      })
      .catch(() => { });
  }, []);

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
  } = data;

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <HeroText delay={0}>
              <span className={styles.badge}>{heroBadge}</span>
            </HeroText>
            <HeroText delay={0.1}>
              <h1 className={styles.heroTitle}>{heroTitle}</h1>
            </HeroText>
            <HeroText delay={0.2}>
              <p className={styles.heroInstitution}>{heroInstitution}</p>
            </HeroText>
            <HeroText delay={0.3}>
              <p className={styles.heroDescription}>{heroDescription}</p>
            </HeroText>
            <HeroText delay={0.4}>
              <div className={styles.heroActions}>
                <Link href="/about" className={styles.btnPrimary}>
                  Explore Our Chapter
                </Link>
                <Link href="/events" className={styles.btnSecondary}>
                  View Events
                </Link>
              </div>
            </HeroText>
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className="container">
          <StaggerContainer className={styles.statsGrid}>
            {(stats || fallbackData.stats).map((stat, index) => (
              <StaggerItem key={index}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className={styles.quickLinks}>
        <div className="container">
          <FadeIn>
            <h2 className={styles.sectionTitle}>Get Involved</h2>
          </FadeIn>
          <StaggerContainer className={styles.linksGrid} staggerDelay={0.15}>
            {(quickLinks || fallbackData.quickLinks).map((item, index) => (
              <StaggerItem key={index}>
                <Link href={item.link} className={styles.linkCard}>
                  <span className={styles.linkIcon}>{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <FadeIn>
            <h2>{ctaTitle}</h2>
            <p>{ctaDescription}</p>
            <Link href={ctaButtonLink || '/contact'} className={styles.ctaButton}>
              {ctaButtonText}
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
