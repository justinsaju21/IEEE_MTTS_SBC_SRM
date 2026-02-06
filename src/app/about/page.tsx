import styles from './page.module.css';
import { getAboutPage } from '@/lib/sanity';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { DynamicIcon } from '@/components/DynamicIcon';

interface BentoItem {
    title: string;
    description: string;
    icon: string;
    variant: 'primary' | 'secondary';
}

interface AboutPageData {
    heroTitle: string;
    heroSubtitle: string;
    vision: string;
    mission: string;
    focusAreas: string[];
    memberBenefits: { icon: string; title: string; description: string }[];
    bentoItems: BentoItem[];
}

const fallbackData: AboutPageData = {
    heroTitle: 'About Us',
    heroSubtitle: 'Innovating at the intersection of electromagnetic waves and future technology.',
    vision: 'To be a premier hub of microwave innovation, fostering technical excellence and professional growth.',
    mission: 'Empowering students to master RF & Microwave technologies through research, collaboration, and industry exposure.',
    focusAreas: [
        'Microwave Engineering', '5G/6G Networks', 'Antenna Design', 'Radar Systems',
        'Satellite Comms', 'IoT Connectivity', 'Radio Astronomy', 'Bio-Medical RF',
        'Wireless Power', 'Electromagnetics'
    ],
    memberBenefits: [
        { icon: 'globe', title: 'Global Network', description: 'Connect with 400,000+ members worldwide.' },
        { icon: 'book', title: 'Resources', description: 'Access IEEE Xplore & cutting-edge journals.' },
        { icon: 'graduation', title: 'Career Growth', description: 'Scholarships, grants, and job portals.' },
        { icon: 'handshake', title: 'Community', description: 'Mentorship from industry veterans.' }
    ],
    bentoItems: [
        {
            title: 'Our Chapter',
            description: 'Our Student Branch Chapter at SRM IST is a vibrant community of innovators. We bridge the gap between academic theory and industry reality through hands-on workshops, expert talks, and cutting-edge research projects.',
            icon: 'cpu',
            variant: 'primary'
        },
        {
            title: 'IEEE',
            description: 'IEEE is the world\'s largest technical professional organization dedicated to advancing technology for the benefit of humanity.',
            icon: 'globe',
            variant: 'secondary'
        },
        {
            title: 'MTT-S',
            description: 'The IEEE Microwave Theory and Technology Society (MTT-S) promotes the advancement of microwave theory and its applications, including RF, microwave, millimeter-wave tech, and autonomous systems.',
            icon: 'radio',
            variant: 'secondary'
        }
    ]
};

export const metadata = {
    title: "About | IEEE MTT-S SBC SRM",
};

export default async function About() {
    const data = await getAboutPage() || fallbackData;
    const content = { ...fallbackData, ...data };

    // Ensure arrays are valid (defensive check for Sanity data)
    const focusAreas = Array.isArray(content.focusAreas) && content.focusAreas.length > 0
        ? content.focusAreas
        : fallbackData.focusAreas;
    const memberBenefits = Array.isArray(content.memberBenefits) && content.memberBenefits.length > 0
        ? content.memberBenefits
        : fallbackData.memberBenefits;

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <FadeIn>
                        <h1 className={styles.heroTitle}>{content.heroTitle}</h1>
                        <p className={styles.heroSubtitle}>{content.heroSubtitle}</p>
                    </FadeIn>
                </div>
            </section>

            <div className="container" style={{ paddingBottom: '4rem' }}>

                {/* Bento Grid: Who We Are */}
                <FadeIn className={styles.bentoGridSection}>
                    <div className={styles.bentoGrid}>
                        {/* Bento Grid: Generated dynamically from list */}
                        {content.bentoItems?.map((item: BentoItem, index: number) => (
                            <div
                                key={index}
                                className={`${styles.bentoCard} ${item.variant === 'primary' ? styles.cardMain : styles.cardSmall}`}
                            >
                                <div className={styles.cardIcon}>
                                    <DynamicIcon name={item.icon} size={item.variant === 'primary' ? 32 : 24} />
                                </div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardText}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </FadeIn>

                {/* Vision / Mission Split */}
                <FadeIn delay={0.2}>
                    <div className={styles.visionMissionGrid}>
                        <div className={`${styles.vmPanel} ${styles.vmDark}`}>
                            <DynamicIcon name="lightbulb" className={styles.vmWatermark} size={200} />
                            <h3 className={styles.vmTitle}>Vision</h3>
                            <p className={styles.vmText}>{content.vision}</p>
                        </div>
                        <div className={`${styles.vmPanel} ${styles.vmLight}`}>
                            <DynamicIcon name="target" className={styles.vmWatermark} size={200} />
                            <h3 className={styles.vmTitle}>Mission</h3>
                            <p className={styles.vmText}>{content.mission}</p>
                        </div>
                    </div>
                </FadeIn>

                {/* Focus Areas Cloud */}
                <section className={styles.focusSection}>
                    <FadeIn>
                        <h2 className={styles.sectionTitle}>What We Explore</h2>
                    </FadeIn>
                    <StaggerContainer className={styles.focusCloud} staggerDelay={0.05}>
                        {focusAreas.map((area: string, index: number) => (
                            <StaggerItem key={index}>
                                <div className={styles.focusTag}>{area}</div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </section>

                {/* Benefits Section */}
                <section style={{ marginTop: '4rem' }}>
                    <FadeIn>
                        <h2 className={styles.sectionTitle}>Why Join Us?</h2>
                    </FadeIn>
                    <StaggerContainer className={styles.benefitsGrid} staggerDelay={0.1}>
                        {memberBenefits.map((benefit: { icon: string; title: string; description: string }, index: number) => (
                            <StaggerItem key={index} className={styles.benefitCard}>
                                <div className={styles.benefitHeader}>
                                    <DynamicIcon name={benefit.icon} className="text-[#00A3E0]" size={32} />
                                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                </div>
                                <p className={styles.benefitDescription}>{benefit.description}</p>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </section>

            </div>
        </div>
    );
}
