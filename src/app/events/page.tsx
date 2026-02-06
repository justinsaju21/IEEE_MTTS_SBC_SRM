import styles from './page.module.css';
import { getAllEvents, urlFor } from '@/lib/sanity';
import Image from 'next/image';

interface Event {
    _id: string;
    title: string;
    date: string;
    venue: string;
    description: string;
    coverImage?: { asset: { _ref: string } };
    status: 'upcoming' | 'past';
    registrationLink?: string;
}

// Fallback data
const fallbackEvents: Event[] = [
    {
        _id: '1',
        title: "Inauguration of IEEE MTT-S SBC",
        date: "2026-01-27",
        venue: "MBA Seminar Hall, SRM IST",
        description: "The official inauguration ceremony of the IEEE Microwave Theory and Technology Society Student Branch Chapter at SRM Institute of Science and Technology.",
        status: "past"
    }
];

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}

export const metadata = {
    title: "Events | IEEE MTT-S SBC SRM",
};

export default async function Events() {
    const events: Event[] = await getAllEvents() || fallbackEvents;

    const upcomingEvents = events.filter(e => e.status === 'upcoming');
    const pastEvents = events.filter(e => e.status === 'past');

    return (
        <div className="container section">
            <div className={styles.header}>
                <h1 className={styles.title}>Events</h1>
                <p className={styles.subtitle}>Workshops, seminars, and technical activities organized by our chapter.</p>
            </div>

            <section className={styles.eventSection}>
                <h2 className={styles.sectionTitle}>Upcoming Events</h2>
                {upcomingEvents.length > 0 ? (
                    <div className={styles.eventGrid}>
                        {upcomingEvents.map((event) => (
                            <article key={event._id} className={styles.eventCard}>
                                {event.coverImage && (
                                    <div className={styles.eventImage}>
                                        <Image
                                            src={urlFor(event.coverImage).width(400).height(200).url()}
                                            alt={event.title}
                                            width={400}
                                            height={200}
                                        />
                                    </div>
                                )}
                                <div className={styles.eventContent}>
                                    <span className={styles.eventDate}>{formatDate(event.date)}</span>
                                    <h3 className={styles.eventTitle}>{event.title}</h3>
                                    <p className={styles.eventVenue}>📍 {event.venue}</p>
                                    <p className={styles.eventDescription}>{event.description}</p>
                                    {event.registrationLink && (
                                        <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className={styles.registerBtn}>
                                            Register Now
                                        </a>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className={styles.emptyState}>
                        <p>No upcoming events at the moment. Stay tuned!</p>
                    </div>
                )}
            </section>

            <section className={styles.eventSection}>
                <h2 className={styles.sectionTitle}>Past Events</h2>
                {pastEvents.length > 0 ? (
                    <div className={styles.eventGrid}>
                        {pastEvents.map((event) => (
                            <article key={event._id} className={`${styles.eventCard} ${styles.pastEvent}`}>
                                {event.coverImage && (
                                    <div className={styles.eventImage}>
                                        <Image
                                            src={urlFor(event.coverImage).width(400).height(200).url()}
                                            alt={event.title}
                                            width={400}
                                            height={200}
                                        />
                                    </div>
                                )}
                                <div className={styles.eventContent}>
                                    <span className={styles.eventDate}>{formatDate(event.date)}</span>
                                    <h3 className={styles.eventTitle}>{event.title}</h3>
                                    <p className={styles.eventVenue}>📍 {event.venue}</p>
                                    <p className={styles.eventDescription}>{event.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className={styles.emptyState}>
                        <p>No past events yet.</p>
                    </div>
                )}
            </section>
        </div>
    );
}
