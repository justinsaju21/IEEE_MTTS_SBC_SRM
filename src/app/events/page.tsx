import styles from './page.module.css';
import Image from 'next/image';

const events = [
    {
        id: 1,
        title: "RF & Microwave Seminar 2026",
        date: "March 15, 2026",
        venue: "Tech Park, SRM IST",
        description: "A one-day seminar focusing on the latest advancements in 5G and mmWave technologies.",
        image: "/event-placeholder.jpg",
        status: "Upcoming"
    },
    {
        id: 2,
        title: "Antenna Design Workshop",
        date: "January 20, 2026",
        venue: "Simulation Lab",
        description: "Hands-on workshop on designing microstrip patch antennas using industry-standard tools.",
        image: "/event-placeholder.jpg",
        status: "Past"
    },
    {
        id: 3,
        title: "Expert Talk: Future of Radar",
        date: "December 05, 2025",
        venue: "MBA Seminar Hall",
        description: "Distinguished lecture by Dr. Alan Smith on the evolution of radar systems in automotive applications.",
        image: "/event-placeholder.jpg",
        status: "Past"
    }
];

export const metadata = {
    title: "Events | IEEE MTT-S Student Branch Chapter SRM IST",
};

export default function Events() {
    const upcoming = events.filter(e => e.status === "Upcoming");
    const past = events.filter(e => e.status === "Past");

    return (
        <div className="container section">
            <div className={styles.header}>
                <h1 className={styles.title}>Events & Activities</h1>
                <p className={styles.subtitle}>Join us for technical talks, workshops, and networking sessions.</p>
            </div>

            {upcoming.length > 0 && (
                <section className={styles.sectionBlock}>
                    <h2 className={styles.sectionTitle}>Upcoming Events</h2>
                    <div className={styles.list}>
                        {upcoming.map(event => (
                            <div key={event.id} className={styles.eventCard}>
                                <div className={styles.dateBox}>
                                    <span className={styles.dateDay}>{event.date.split(',')[0]}</span>
                                    <span className={styles.dateYear}>{event.date.split(',')[1]}</span>
                                </div>
                                <div className={styles.eventContent}>
                                    <h3 className={styles.eventTitle}>{event.title}</h3>
                                    <p className={styles.eventMeta}>📍 {event.venue}</p>
                                    <p className={styles.eventDesc}>{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <section className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>Past Events</h2>
                <div className={styles.grid}>
                    {past.map(event => (
                        <div key={event.id} className={styles.pastEventCard}>
                            <div className={styles.pastEventContent}>
                                <span className={styles.pastDate}>{event.date}</span>
                                <h3 className={styles.pastTitle}>{event.title}</h3>
                                <p className={styles.pastDesc}>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
