import styles from './page.module.css';

const people = [
    {
        role: "Faculty Advisor",
        name: "Dr. [Name]",
        department: "Department of ECE",
        rank: 1
    },
    {
        role: "Chair",
        name: "[Student Name]",
        department: "ECE, SRM IST",
        rank: 2
    },
    {
        role: "Vice Chair",
        name: "[Student Name]",
        department: "ECE, SRM IST",
        rank: 2
    },
    {
        role: "Secretary",
        name: "[Student Name]",
        department: "ECE, SRM IST",
        rank: 3
    },
    {
        role: "Treasurer",
        name: "[Student Name]",
        department: "ECE, SRM IST",
        rank: 3
    }
];

export const metadata = {
    title: "Office Bearers | IEEE MTT-S Student Branch Chapter SRM IST",
};

export default function People() {
    const faculty = people.filter(p => p.role.includes("Advisor"));
    const students = people.filter(p => !p.role.includes("Advisor"));

    return (
        <div className="container section">
            <div className={styles.header}>
                <h1 className={styles.title}>Office Bearers</h1>
                <p className={styles.subtitle}>The team behind our chapter&apos;s success.</p>
            </div>

            <section className={styles.group}>
                <h2 className={styles.groupTitle}>Faculty Advisors</h2>
                <div className={styles.grid}>
                    {faculty.map((person, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.avatarPlaceholder}>{person.name[0]}</div>
                            <h3 className={styles.name}>{person.name}</h3>
                            <p className={styles.role}>{person.role}</p>
                            <p className={styles.dept}>{person.department}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.group}>
                <h2 className={styles.groupTitle}>Executive Committee</h2>
                <div className={styles.grid}>
                    {students.map((person, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.avatarPlaceholder}>{person.name[0]}</div>
                            <h3 className={styles.name}>{person.name}</h3>
                            <p className={styles.role}>{person.role}</p>
                            <p className={styles.dept}>{person.department}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
