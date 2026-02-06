import styles from './page.module.css';

export const metadata = {
    title: "About | IEEE MTT-S SBC SRM",
};

const benefits = [
    {
        icon: "🌐",
        title: "Global Network",
        description: "Access to IEEE's worldwide community of engineers and researchers."
    },
    {
        icon: "📚",
        title: "Technical Resources",
        description: "IEEE Xplore, journals, conferences, and educational materials."
    },
    {
        icon: "🎓",
        title: "Professional Development",
        description: "Workshops, certifications, and leadership opportunities."
    },
    {
        icon: "🤝",
        title: "Industry Connections",
        description: "Networking with professionals and potential employers."
    }
];

const focusAreas = [
    "Microwave Engineering",
    "RF Systems",
    "Antenna Design",
    "Millimeter-Wave Technologies",
    "Wireless Communication",
    "Radar Systems",
    "Satellite Communication",
    "Electromagnetics",
    "Biomedical RF Applications",
    "Wireless Power Transfer"
];

export default function About() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>About Us</h1>
                    <p className={styles.heroSubtitle}>
                        IEEE Microwave Theory and Technology Society Student Branch Chapter
                    </p>
                </div>
            </section>

            <div className="container section">
                {/* About IEEE */}
                <section className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>About IEEE</h2>
                    <p>
                        The Institute of Electrical and Electronics Engineers (IEEE) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE fosters innovation, supports research, and provides a global platform for engineers, researchers, and students to collaborate and grow professionally.
                    </p>
                </section>

                {/* About MTT-S */}
                <section className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>About IEEE MTT-S</h2>
                    <p>
                        The IEEE Microwave Theory and Technology Society (MTT-S) is a leading global society focused on the advancement of microwave engineering, RF technologies, millimeter-wave systems, antennas, radar, wireless communication, and emerging high-frequency applications.
                    </p>
                    <p>
                        MTT-S promotes technical excellence through research dissemination, conferences, workshops, educational initiatives, and industry collaboration.
                    </p>
                </section>

                {/* Parent Organizations */}
                <section className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>Parent Organizations</h2>
                    <div className={styles.orgList}>
                        <div className={styles.orgItem}>IEEE (Institute of Electrical and Electronics Engineers)</div>
                        <div className={styles.orgItem}>IEEE Microwave Theory and Technology Society (MTT-S)</div>
                        <div className={styles.orgItem}>IEEE SRM Student Branch</div>
                        <div className={styles.orgItem}>IEEE Madras Section</div>
                    </div>
                </section>

                {/* Our Chapter */}
                <section className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>Our Student Chapter</h2>
                    <p>
                        The IEEE MTT-S Student Branch Chapter at SRM Institute of Science and Technology (Kattankulathur Campus) was established to cultivate technical expertise, research orientation, innovation, and professional development among students in the field of microwave and high-frequency engineering.
                    </p>
                    <p>
                        The chapter serves as a platform that bridges academic learning with real-world technological applications by organizing workshops, expert lectures, industry interactions, and hands-on training programs.
                    </p>
                </section>

                {/* Vision & Mission */}
                <section className={styles.vmSection}>
                    <div className={styles.vmCard}>
                        <h3>Vision</h3>
                        <p>
                            To become a leading IEEE student chapter recognized for technical excellence, impactful activities, industry engagement, and contributions to the advancement of high-frequency technologies.
                        </p>
                    </div>
                    <div className={styles.vmCard}>
                        <h3>Mission</h3>
                        <p>
                            To empower students with technical knowledge, research opportunities, and professional skills in microwave and RF engineering while fostering innovation, collaboration, and ethical engineering practices.
                        </p>
                    </div>
                </section>

                {/* Objectives */}
                <section className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>Core Objectives</h2>
                    <ul className={styles.objectivesList}>
                        <li>Promote learning in RF, microwave, and antenna technologies</li>
                        <li>Encourage student research and publications</li>
                        <li>Provide exposure to emerging technologies such as 5G/6G, radar, IoT, and wireless systems</li>
                        <li>Facilitate interaction with industry professionals and researchers</li>
                        <li>Organize technical workshops, seminars, and Distinguished Lecturer programs</li>
                        <li>Develop leadership and teamwork skills among students</li>
                        <li>Support interdisciplinary innovation</li>
                    </ul>
                </section>

                {/* Focus Areas */}
                <section className={styles.contentSection}>
                    <h2 className={styles.sectionTitle}>Key Focus Areas</h2>
                    <div className={styles.focusGrid}>
                        {focusAreas.map((area, index) => (
                            <div key={index} className={styles.focusItem}>{area}</div>
                        ))}
                    </div>
                </section>

                {/* Member Benefits */}
                <section className={styles.benefitsSection}>
                    <h2 className={styles.sectionTitle}>Why Join IEEE MTT-S?</h2>
                    <div className={styles.benefitsGrid}>
                        {benefits.map((benefit, index) => (
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
