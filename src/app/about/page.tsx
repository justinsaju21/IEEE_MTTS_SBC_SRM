import styles from './page.module.css';
import { getAboutPage } from '@/lib/sanity';

interface AboutPageData {
    heroTitle: string;
    heroSubtitle: string;
    aboutIEEE: string;
    aboutMTTS: string;
    parentOrganizations: string[];
    aboutChapter: string;
    vision: string;
    mission: string;
    objectives: string[];
    focusAreas: string[];
    memberBenefits: { icon: string; title: string; description: string }[];
}

const fallbackData: AboutPageData = {
    heroTitle: 'About Us',
    heroSubtitle: 'IEEE Microwave Theory and Technology Society Student Branch Chapter',
    aboutIEEE: 'The Institute of Electrical and Electronics Engineers (IEEE) is the world\'s largest technical professional organization dedicated to advancing technology for the benefit of humanity.',
    aboutMTTS: 'The IEEE Microwave Theory and Technology Society (MTT-S) is a leading global society focused on the advancement of microwave engineering, RF technologies, millimeter-wave systems, and antennas.',
    parentOrganizations: [
        'IEEE (Institute of Electrical and Electronics Engineers)',
        'IEEE Microwave Theory and Technology Society (MTT-S)',
        'IEEE SRM Student Branch',
        'IEEE Madras Section'
    ],
    aboutChapter: 'The IEEE MTT-S Student Branch Chapter at SRM Institute of Science and Technology was established to cultivate technical expertise, research orientation, innovation, and professional development among students.',
    vision: 'To become a leading IEEE student chapter recognized for technical excellence, impactful activities, industry engagement, and contributions to the advancement of high-frequency technologies.',
    mission: 'To empower students with technical knowledge, research opportunities, and professional skills in microwave and RF engineering while fostering innovation and collaboration.',
    objectives: [
        'Promote learning in RF, microwave, and antenna technologies',
        'Encourage student research and publications',
        'Provide exposure to emerging technologies such as 5G/6G, radar, IoT',
        'Facilitate interaction with industry professionals',
        'Organize technical workshops and seminars',
        'Develop leadership and teamwork skills'
    ],
    focusAreas: [
        'Microwave Engineering', 'RF Systems', 'Antenna Design', 'Millimeter-Wave Technologies',
        'Wireless Communication', 'Radar Systems', 'Satellite Communication', 'Electromagnetics',
        'Biomedical RF Applications', 'Wireless Power Transfer'
    ],
    memberBenefits: [
        { icon: '🌐', title: 'Global Network', description: 'Access to IEEE\'s worldwide community of engineers and researchers.' },
        { icon: '📚', title: 'Technical Resources', description: 'IEEE Xplore, journals, conferences, and educational materials.' },
        { icon: '🎓', title: 'Professional Development', description: 'Workshops, certifications, and leadership opportunities.' },
        { icon: '🤝', title: 'Industry Connections', description: 'Networking with professionals and potential employers.' }
    ]
};

export const metadata = {
    title: "About | IEEE MTT-S SBC SRM",
};

export default async function About() {
    const data = await getAboutPage() || fallbackData;
    const content = { ...fallbackData, ...data };

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>{content.heroTitle}</h1>
                    <p className={styles.heroSubtitle}>{content.heroSubtitle}</p>
                </div>
            </section>

            <div className="container section">
                <section className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>About IEEE</h2>
                    <p>{content.aboutIEEE}</p>
                </section>

                <section className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>About IEEE MTT-S</h2>
                    <p>{content.aboutMTTS}</p>
                </section>

                <section className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>Parent Organizations</h2>
                    <div className={styles.orgList}>
                        {content.parentOrganizations.map((org, index) => (
                            <div key={index} className={styles.orgItem}>{org}</div>
                        ))}
                    </div>
                </section>

                <section className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>Our Student Chapter</h2>
                    <p>{content.aboutChapter}</p>
                </section>

                <section className={styles.vmSection}>
                    <div className={styles.vmCard}>
                        <h3>Vision</h3>
                        <p>{content.vision}</p>
                    </div>
                    <div className={styles.vmCard}>
                        <h3>Mission</h3>
                        <p>{content.mission}</p>
                    </div>
                </section>

                <section className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>Core Objectives</h2>
                    <ul className={styles.objectivesList}>
                        {content.objectives.map((obj, index) => (
                            <li key={index}>{obj}</li>
                        ))}
                    </ul>
                </section>

                <section className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>Key Focus Areas</h2>
                    <div className={styles.focusGrid}>
                        {content.focusAreas.map((area, index) => (
                            <div key={index} className={styles.focusItem}>{area}</div>
                        ))}
                    </div>
                </section>

                <section className={styles.benefitsSection}>
                    <h2 className={styles.sectionTitle}>Why Join IEEE MTT-S?</h2>
                    <div className={styles.benefitsGrid}>
                        {content.memberBenefits.map((benefit, index) => (
                            <div key={index} className={styles.benefitCard}>
                                <span className={styles.benefitIcon}>{benefit.icon}</span>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
