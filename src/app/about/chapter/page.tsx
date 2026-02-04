import styles from '../ieee-mtts/page.module.css'; // Reusing styles

export const metadata = {
    title: "About Our Chapter | IEEE MTT-S Student Branch Chapter SRM IST",
};

export default function AboutChapter() {
    return (
        <div className="container section">
            <div className={styles.header}>
                <h1 className={styles.title}>SRM Student Branch Chapter</h1>
                <p className={styles.subtitle}>Empowering students in the field of RF and Microwave Engineering.</p>
            </div>

            <div className={styles.contentBlock}>
                <h2>About the Branch</h2>
                <p>
                    The IEEE MTT-S Student Branch Chapter at SRM Institute of Science and Technology is a vibrant community of students and faculty
                    dedicated to exploring and advancing the fields of microwave theory and technology. We serve as a bridge between academia and industry,
                    providing students with opportunities to learn, network, and grow.
                </p>
            </div>

            <div className={styles.contentBlock}>
                <h2>Our Mission</h2>
                <p>
                    To provide a platform for students to gain technical expertise, professional skills, and leadership experience in the domain of high-frequency technologies.
                    We aim to organize workshops, seminars, and industrial visits that enhance practical knowledge and foster a culture of research and innovation.
                </p>
            </div>

            <div className={styles.contentBlock}>
                <h2>Objectives</h2>
                <ul className={styles.list}>
                    <li>Promote knowledge sharing in RF and Microwave engineering.</li>
                    <li>Connect students with industry experts and researchers.</li>
                    <li>Encourage student participation in global IEEE MTT-S activities.</li>
                    <li>Foster collaborative research projects.</li>
                </ul>
            </div>
        </div>
    );
}
