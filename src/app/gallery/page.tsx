import styles from './page.module.css';

export const metadata = {
    title: "Gallery | IEEE MTT-S SBC SRM",
};

export default function Gallery() {
    return (
        <div className="container section">
            <div className={styles.header}>
                <h1 className={styles.title}>Photo Gallery</h1>
                <p className={styles.subtitle}>Capturing moments from our community events and activities.</p>
            </div>

            <div className={styles.emptyGallery}>
                <div className={styles.emptyIcon}>📷</div>
                <h2>Gallery Coming Soon</h2>
                <p>
                    Event photos will be available here after our activities begin.
                    <br />
                    Stay tuned for updates!
                </p>
                <div className={styles.categories}>
                    <span className={styles.tag}>Workshops</span>
                    <span className={styles.tag}>Guest Lectures</span>
                    <span className={styles.tag}>Inauguration</span>
                    <span className={styles.tag}>Outreach Programs</span>
                </div>
            </div>

            <div className={styles.infoBlock}>
                <h3>For Admins</h3>
                <p>Gallery images will be managed through Sanity CMS (integration coming soon).</p>
            </div>
        </div>
    );
}
