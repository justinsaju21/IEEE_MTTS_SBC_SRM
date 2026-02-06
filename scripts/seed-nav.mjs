// Seed navigation and footer data
import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 's5zhp3gc',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: 'skVex2JHRM32BK87YRgC7o7mzdNi7byGk83Vn3twrHU8IMbGSyX4KZVo502cx2RMhw005cpUxfAB3kBPdCYtVKjePIsiv5jqjcCeuu2VAwxMnbuKLjrIbcN8fIM8yEaaTytqwSyZ8FASpVrhXHDK0ZchRlLMZh5igObsZimd5GLRoB0z0g9t',
});

async function seed() {
    console.log('🌱 Seeding Navigation and Footer...');

    // Navigation
    await client.createOrReplace({
        _id: 'navigation',
        _type: 'navigation',
        navItems: [
            { _key: 'n1', label: 'Home', href: '/', order: 1 },
            { _key: 'n2', label: 'About', href: '/about', order: 2 },
            { _key: 'n3', label: 'Events', href: '/events', order: 3 },
            { _key: 'n4', label: 'People', href: '/people', order: 4 },
            { _key: 'n5', label: 'Gallery', href: '/gallery', order: 5 },
            { _key: 'n6', label: 'Contact', href: '/contact', order: 6 },
        ],
        ctaButton: {
            label: 'Join IEEE',
            href: 'https://www.ieee.org/membership/join/index.html',
        },
    });

    // Footer
    await client.createOrReplace({
        _id: 'footer',
        _type: 'footer',
        copyrightText: '© 2026 IEEE MTT-S SBC SRM. All rights reserved.',
        quickLinks: [
            { _key: 'f1', label: 'About', href: '/about' },
            { _key: 'f2', label: 'Events', href: '/events' },
            { _key: 'f3', label: 'Contact', href: '/contact' },
            { _key: 'f4', label: 'IEEE Website', href: 'https://www.ieee.org' },
        ],
        socialLinks: {
            instagram: 'https://instagram.com/ieeemtts_srm',
            linkedin: 'https://www.linkedin.com/in/ieee-mtt-s-srm-1641343a9/',
            email: 'ieeemtts.srm@gmail.com',
        },
        tagline: 'Empowering students in microwave engineering and RF technologies.',
    });

    console.log('✅ Navigation and Footer seeded!');
}

seed().catch(console.error);
