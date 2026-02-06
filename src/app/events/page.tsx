import styles from './page.module.css';

const events = [
    {
        id: 1,
        title: "Inauguration of IEEE MTT-S SBC",
        date: "January 27, 2026",
        venue: "MBA Seminar Hall, SRM IST",
        description: "The official inauguration ceremony of the IEEE Microwave Theory and Technology Society Student Branch Chapter at SRM Institute of Science and Technology, graced by distinguished guests from IEEE Madras Section.",
        status: "Past"
    }
];

export const metadata = {
    title: "Events | IEEE MTT-S SBC SRM",
};

export default function Events() {
    const upcoming = events.filter(e => e.status === "Upcoming");
    const past = events.filter(e => e.status === "Past");

    return (
        <div className="container section">
            <div className={styles.header}>
                <h1 className={styles.title}>Events & Activities</h1>
                <p className={styles.subtitle}>Workshops, Distinguished Lectures, Student Competitions, and Outreach Initiatives.</p>
            </div>

            <section className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>Upcoming Events</h2>
                {upcoming.length > 0 ? (
                    <div className={styles.list}>
                        {upcoming.map(event => (
                            <div key={event.id} className={styles.eventCard}>
                                <div className={styles.dateBox}>
                                    <span className={styles.dateDay}>{event.date.split(' ')[1]?.replace(',', '')}</span>
                                    <span className={styles.dateYear}>{event.date.split(' ')[0]}</span>
                                </div>
                                <div className={styles.eventContent}>
                                    <h3 className={styles.eventTitle}>{event.title}</h3>
                                    <p className={styles.eventMeta}>📍 {event.venue}</p>
                                    <p className={styles.eventDesc}>{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={styles.emptyState}>
                        <p>No upcoming events scheduled at the moment.</p>
                        <p className={styles.emptyNote}>Stay tuned for announcements!</p>
                    </div>
                )}
            </section>

            <section className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>Past Events</h2>
                {past.length > 0 ? (
                    <div className={styles.grid}>
                        {past.map(event => (
                            <div key={event.id} className={styles.pastEventCard}>
                                <span className={styles.pastDate}>{event.date}</span>
                                <h3 className={styles.pastTitle}>{event.title}</h3>
                                <p className={styles.pastVenue}>📍 {event.venue}</p>
                                <p className={styles.pastDesc}>{event.description}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No past events to display.</p>
                )}
            </section>

            <section className={styles.infoBlock}>
                <h3>Want to add or update events?</h3>
                <p>Event management will be available through the Sanity CMS dashboard (coming soon).</p>
            </section>
        </div>
    );
}
