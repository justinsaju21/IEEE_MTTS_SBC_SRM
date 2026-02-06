import styles from './page.module.css';
import { getGalleryImages, urlFor } from '@/lib/sanity';
import Image from 'next/image';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { Camera } from 'lucide-react';

interface GalleryImage {
    _id: string;
    image: { asset: { _ref: string } };
    caption: string;
    category: string;
    dateTaken: string;
    eventTitle?: string;
}

export const metadata = {
    title: "Gallery | IEEE MTT-S SBC SRM",
};

export default async function Gallery() {
    const images: GalleryImage[] = await getGalleryImages() || [];

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <FadeIn>
                        <h1 className={styles.title}>Photo Gallery</h1>
                        <p className={styles.subtitle}>Capturing moments from our community events and activities.</p>
                    </FadeIn>
                </div>
            </section>

            <div className="container">
                {images.length > 0 ? (
                    <StaggerContainer className={styles.galleryGrid} staggerDelay={0.05}>
                        {images.map((item) => (
                            <StaggerItem key={item._id} className={styles.galleryItem}>
                                <Image
                                    src={urlFor(item.image).width(400).height(300).url()}
                                    alt={item.caption || 'Gallery image'}
                                    width={400}
                                    height={300}
                                    className={styles.galleryImage}
                                />
                                <div className={styles.imageOverlay}>
                                    {item.caption && <p className={styles.caption}>{item.caption}</p>}
                                    {item.eventTitle && <span className={styles.eventTag}>{item.eventTitle}</span>}
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                ) : (
                    <FadeIn>
                        <div className={styles.emptyGallery}>
                            <Camera size={64} className={styles.emptyIcon} strokeWidth={1} />
                            <h2>Gallery Coming Soon</h2>
                            <p>Event photos will be available here after our activities begin.</p>
                            <div className={styles.categories}>
                                <span className={styles.tag}>Workshops</span>
                                <span className={styles.tag}>Guest Lectures</span>
                                <span className={styles.tag}>Inauguration</span>
                                <span className={styles.tag}>Outreach Programs</span>
                            </div>
                        </div>
                    </FadeIn>
                )}
            </div>
        </div>
    );
}
