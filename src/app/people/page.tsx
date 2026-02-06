import styles from './page.module.css';
import { getOfficeBearers, urlFor } from '@/lib/sanity';
import Image from 'next/image';

interface OfficeBearer {
    _id: string;
    name: string;
    role: string;
    department: string;
    bio: string;
    photo?: { asset: { _ref: string } };
    type: 'faculty' | 'student';
    order: number;
}

// Fallback data
const fallbackPeople: OfficeBearer[] = [
    {
        _id: '1',
        role: "IEEE SRM Student Branch Counselor",
        name: "Dr. M. Sangeetha",
        department: "Professor & Head, Dept of ECE",
        bio: "Dr. Sangeetha provides institutional leadership and strategic guidance to IEEE student activities at SRM IST.",
        type: "faculty",
        order: 0
    },
    {
        _id: '2',
        role: "Faculty Advisor – IEEE MTT-S SBC",
        name: "Dr. M. Susila",
        department: "Associate Professor, Dept of ECE",
        bio: "Dr. M. Susila guides the IEEE MTT-S Student Branch Chapter with her academic expertise.",
        type: "faculty",
        order: 1
    },
    {
        _id: '3',
        role: "Chair",
        name: "Justin Saju",
        department: "Electronics and Communication Engineering",
        bio: "Leading initiatives that promote technical excellence and professional development.",
        type: "student",
        order: 2
    },
];

export const metadata = {
    title: "Office Bearers | IEEE MTT-S SBC SRM",
};

export default async function People() {
    const people: OfficeBearer[] = await getOfficeBearers() || fallbackPeople;

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
                    {faculty.map((person) => (
                        <div key={person._id} className={styles.card}>
                            {person.photo ? (
                                <Image
                                    src={urlFor(person.photo).width(150).height(150).url()}
                                    alt={person.name}
                                    width={150}
                                    height={150}
                                    className={styles.avatar}
                                />
                            ) : (
                                <div className={styles.avatarPlaceholder}>
                                    {person.name.split(' ').map(n => n[0]).join('')}
                                </div>
                            )}
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
                    {students.map((person) => (
                        <div key={person._id} className={styles.card}>
                            {person.photo ? (
                                <Image
                                    src={urlFor(person.photo).width(150).height(150).url()}
                                    alt={person.name}
                                    width={150}
                                    height={150}
                                    className={styles.avatar}
                                />
                            ) : (
                                <div className={styles.avatarPlaceholder}>
                                    {person.name.split(' ').map(n => n[0]).join('')}
                                </div>
                            )}
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
