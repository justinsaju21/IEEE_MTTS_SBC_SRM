import styles from './page.module.css';

const people = [
    {
        role: "IEEE SRM Student Branch Counselor",
        name: "Dr. M. Sangeetha",
        department: "Professor & Head, Dept of ECE",
        bio: "Dr. Sangeetha provides institutional leadership and strategic guidance to IEEE student activities at SRM IST, fostering an environment that promotes academic excellence, research orientation, and professional growth.",
        type: "faculty"
    },
    {
        role: "Faculty Advisor – IEEE MTT-S SBC",
        name: "Dr. M. Susila",
        department: "Associate Professor, Dept of ECE",
        bio: "Dr. M. Susila guides the IEEE MTT-S Student Branch Chapter with her academic expertise, supporting the chapter in organizing technical programs and fostering a research culture.",
        type: "faculty"
    },
    {
        role: "Chair",
        name: "Justin Saju",
        department: "Electronics and Communication Engineering",
        bio: "Leading initiatives that promote technical excellence, research engagement, and professional development. Committed to bridging academic learning with real-world engineering applications.",
        type: "student",
        rank: 1
    },
    {
        role: "Vice Chair",
        name: "Sourodeep Saha",
        department: "Electronics and Communication Engineering",
        bio: "",
        type: "student",
        rank: 2
    },
    {
        role: "Secretary",
        name: "Megha Baiju",
        department: "Electronics and Communication Engineering",
        bio: "",
        type: "student",
        rank: 3
    },
    {
        role: "Treasurer",
        name: "Anoushka Anbu",
        department: "Electronics and Communication Engineering",
        bio: "",
        type: "student",
        rank: 4
    },
    {
        role: "Webmaster",
        name: "Pranav VP",
        department: "Electronics and Communication Engineering",
        bio: "",
        type: "student",
        rank: 5
    }
];

export const metadata = {
    title: "Office Bearers | IEEE MTT-S SBC SRM",
};

export default function People() {
    const faculty = people.filter(p => p.type === "faculty");
    const students = people.filter(p => p.type === "student");

    return (
        <div className="container section">
            <div className={styles.header}>
                <h1 className={styles.title}>Office Bearers</h1>
                <p className={styles.subtitle}>Meet the leadership team driving our chapter forward.</p>
            </div>

            <section className={styles.group}>
                <h2 className={styles.groupTitle}>Advisory Committee</h2>
                <div className={styles.grid}>
                    {faculty.map((person, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.avatarPlaceholder}>{person.name.split(' ').map(n => n[0]).join('')}</div>
                            <h3 className={styles.name}>{person.name}</h3>
                            <p className={styles.role}>{person.role}</p>
                            <p className={styles.dept}>{person.department}</p>
                            {person.bio && <p className={styles.bio}>{person.bio}</p>}
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.group}>
                <h2 className={styles.groupTitle}>Executive Committee</h2>
                <div className={styles.grid}>
                    {students.map((person, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.avatarPlaceholder}>{person.name.split(' ').map(n => n[0]).join('')}</div>
                            <h3 className={styles.name}>{person.name}</h3>
                            <p className={styles.role}>{person.role}</p>
                            <p className={styles.dept}>{person.department}</p>
                            {person.bio && <p className={styles.bio}>{person.bio}</p>}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
