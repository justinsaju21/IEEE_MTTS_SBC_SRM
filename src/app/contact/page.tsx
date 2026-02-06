import styles from './page.module.css';
import Link from 'next/link';
import { getSiteSettings } from '@/lib/sanity';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { Mail, Instagram, Linkedin, MapPin } from 'lucide-react';

interface SiteSettings {
    email: string;
    instagramHandle: string;
    instagramUrl: string;
    linkedinUrl: string;
    address: string;
}

const fallbackSettings: SiteSettings = {
    email: 'ieeemtts.srm@gmail.com',
    instagramHandle: '@ieeemtts_srm',
    instagramUrl: 'https://instagram.com/ieeemtts_srm',
    linkedinUrl: 'https://www.linkedin.com/in/ieee-mtt-s-srm-1641343a9/',
    address: 'SRM Institute of Science and Technology\nKattankulathur, Chennai\nTamil Nadu - 603203, India',
};

export const metadata = {
    title: "Contact Us | IEEE MTT-S SBC SRM",
};

export default async function Contact() {
    const settings: SiteSettings = await getSiteSettings() || fallbackSettings;
    const { email, instagramHandle, instagramUrl, linkedinUrl, address } = { ...fallbackSettings, ...settings };

    const contactItems = [
        { icon: Mail, title: 'Official Email', subtitle: 'For membership, events, or collaboration inquiries:', link: `mailto:${email}`, linkText: email },
        { icon: Instagram, title: 'Instagram', subtitle: 'Stay updated with our latest activities:', link: instagramUrl, linkText: instagramHandle },
        { icon: Linkedin, title: 'LinkedIn', subtitle: 'Connect with us professionally:', link: linkedinUrl, linkText: 'IEEE MTT-S SRM' },
    ];

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <FadeIn>
                        <h1 className={styles.title}>Contact Us</h1>
                        <p className={styles.subtitle}>Get in touch with the IEEE MTT-S Student Branch Chapter.</p>
                    </FadeIn>
                </div>
            </section>

            <div className="container">
                <StaggerContainer className={styles.contactGrid} staggerDelay={0.1}>
                    {contactItems.map((item, index) => (
                        <StaggerItem key={index} className={styles.infoCard}>
                            <div className={styles.iconWrapper}>
                                <item.icon size={28} className="text-[#00A3E0]" />
                            </div>
                            <h2>{item.title}</h2>
                            <p>{item.subtitle}</p>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                {item.linkText}
                            </a>
                        </StaggerItem>
                    ))}

                    {/* Location Card */}
                    <StaggerItem className={styles.infoCard}>
                        <div className={styles.iconWrapper}>
                            <MapPin size={28} className="text-[#00A3E0]" />
                        </div>
                        <h2>Location</h2>
                        <address className={styles.address}>
                            {address.split('\n').map((line, i) => (
                                <span key={i}>{line}<br /></span>
                            ))}
                        </address>
                    </StaggerItem>
                </StaggerContainer>

                <FadeIn delay={0.3}>
                    <div className={styles.ctaBlock}>
                        <h3>Interested in joining IEEE MTT-S?</h3>
                        <p>Become a member and unlock access to global IEEE resources, networking opportunities, and technical events.</p>
                        <Link href="/about" className={styles.ctaButton}>
                            Learn About Our Chapter
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
