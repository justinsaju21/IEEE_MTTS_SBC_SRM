import styles from './page.module.css';

// Placeholder data
const images = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    src: `https://placehold.co/600x400?text=Event+${i + 1}`,
    caption: `Event Highlight ${i + 1}`
}));

export const metadata = {
    title: "Gallery | IEEE MTT-S Student Branch Chapter SRM IST",
};

export default function Gallery() {
    return (
        <div className="container section">
            <div className={styles.header}>
                <h1 className={styles.title}>Photo Gallery</h1>
                <p className={styles.subtitle}>Capturing moments from our community events.</p>
            </div>

            <div className={styles.grid}>
                {images.map((img) => (
                    <div key={img.id} className={styles.galleryItem}>
                        {/* Using standard img tag for external placeholder or easy migration without config */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img.src} alt={img.caption} className={styles.image} />
                        <div className={styles.caption}>{img.caption}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
