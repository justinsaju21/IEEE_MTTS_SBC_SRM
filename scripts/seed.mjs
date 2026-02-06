// Seed script to populate Sanity with initial data
import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 's5zhp3gc',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: 'skVex2JHRM32BK87YRgC7o7mzdNi7byGk83Vn3twrHU8IMbGSyX4KZVo502cx2RMhw005cpUxfAB3kBPdCYtVKjePIsiv5jqjcCeuu2VAwxMnbuKLjrIbcN8fIM8yEaaTytqwSyZ8FASpVrhXHDK0ZchRlLMZh5igObsZimd5GLRoB0z0g9t',
});

async function seed() {
    console.log('🌱 Starting Sanity seed...');

    // 1. Site Settings
    console.log('📝 Creating Site Settings...');
    await client.createOrReplace({
        _id: 'siteSettings',
        _type: 'siteSettings',
        siteName: 'IEEE MTT-S SBC SRM',
        tagline: 'Microwave Theory and Technology Society Student Branch Chapter',
        email: 'ieeemtts.srm@gmail.com',
        instagramHandle: '@ieeemtts_srm',
        instagramUrl: 'https://instagram.com/ieeemtts_srm',
        linkedinUrl: 'https://www.linkedin.com/in/ieee-mtt-s-srm-1641343a9/',
        address: 'SRM Institute of Science and Technology\nKattankulathur, Chennai\nTamil Nadu - 603203, India',
    });

    // 2. Office Bearers
    console.log('👥 Creating Office Bearers...');
    const officeBearers = [
        {
            _id: 'ob-counselor',
            name: 'Dr. M. Sangeetha',
            role: 'IEEE SRM Student Branch Counselor',
            department: 'Professor & Head, Dept of ECE',
            bio: 'Dr. Sangeetha provides institutional leadership and strategic guidance to IEEE student activities at SRM IST.',
            type: 'faculty',
            order: 1,
            isActive: true,
        },
        {
            _id: 'ob-advisor',
            name: 'Dr. M. Susila',
            role: 'Faculty Advisor – IEEE MTT-S SBC',
            department: 'Associate Professor, Dept of ECE',
            bio: 'Dr. M. Susila guides the IEEE MTT-S Student Branch Chapter with her academic expertise.',
            type: 'faculty',
            order: 2,
            isActive: true,
        },
        {
            _id: 'ob-chair',
            name: 'Justin Saju',
            role: 'Chair',
            department: 'Electronics and Communication Engineering',
            bio: 'Leading initiatives that promote technical excellence and professional development.',
            type: 'student',
            order: 3,
            isActive: true,
        },
        {
            _id: 'ob-vicechair',
            name: 'Sourodeep Saha',
            role: 'Vice Chair',
            department: 'Electronics and Communication Engineering',
            bio: '',
            type: 'student',
            order: 4,
            isActive: true,
        },
        {
            _id: 'ob-secretary',
            name: 'Megha Baiju',
            role: 'Secretary',
            department: 'Electronics and Communication Engineering',
            bio: '',
            type: 'student',
            order: 5,
            isActive: true,
        },
        {
            _id: 'ob-treasurer',
            name: 'Anoushka Anbu',
            role: 'Treasurer',
            department: 'Electronics and Communication Engineering',
            bio: '',
            type: 'student',
            order: 6,
            isActive: true,
        },
        {
            _id: 'ob-webmaster',
            name: 'Pranav VP',
            role: 'Webmaster',
            department: 'Electronics and Communication Engineering',
            bio: '',
            type: 'student',
            order: 7,
            isActive: true,
        },
    ];

    for (const bearer of officeBearers) {
        await client.createOrReplace({
            _type: 'officeBearer',
            ...bearer,
        });
    }

    // 3. Home Page
    console.log('🏠 Creating Home Page content...');
    await client.createOrReplace({
        _id: 'homePage',
        _type: 'homePage',
        heroBadge: 'IEEE MTT-S Student Branch Chapter',
        heroTitle: 'Microwave Theory and Technology Society',
        heroInstitution: 'SRM Institute of Science and Technology',
        heroDescription: 'Empowering students in microwave engineering, RF systems, and wireless communications through research, workshops, and industry engagement.',
        stats: [
            { _key: 's1', number: '10+', label: 'Focus Areas' },
            { _key: 's2', number: 'IEEE', label: 'Global Network' },
            { _key: 's3', number: 'MTT-S', label: 'Technical Society' },
        ],
        quickLinks: [
            { _key: 'q1', icon: '📡', title: 'About MTT-S', description: 'Learn about IEEE MTT-S and our chapter', link: '/about' },
            { _key: 'q2', icon: '📅', title: 'Events', description: 'Upcoming workshops and technical talks', link: '/events' },
            { _key: 'q3', icon: '👥', title: 'Our Team', description: 'Meet the office bearers', link: '/people' },
        ],
        ctaTitle: 'Ready to Join?',
        ctaDescription: 'Become a part of the IEEE MTT-S community and unlock global opportunities in microwave engineering.',
        ctaButtonText: 'Get Started',
        ctaButtonLink: '/contact',
    });

    // 4. About Page
    console.log('📖 Creating About Page content...');
    await client.createOrReplace({
        _id: 'aboutPage',
        _type: 'aboutPage',
        heroTitle: 'About Us',
        heroSubtitle: 'IEEE Microwave Theory and Technology Society Student Branch Chapter',
        aboutIEEE: 'The Institute of Electrical and Electronics Engineers (IEEE) is the world\'s largest technical professional organization dedicated to advancing technology for the benefit of humanity. With over 400,000 members in 160+ countries, IEEE provides access to cutting-edge research, conferences, and industry standards that shape the future of technology.',
        aboutMTTS: 'The IEEE Microwave Theory and Technology Society (MTT-S) is a leading global society focused on the advancement of microwave engineering, RF technologies, millimeter-wave systems, and antennas. MTT-S organizes flagship events like the IEEE International Microwave Symposium (IMS).',
        parentOrganizations: [
            'IEEE (Institute of Electrical and Electronics Engineers)',
            'IEEE Microwave Theory and Technology Society (MTT-S)',
            'IEEE SRM Student Branch',
            'IEEE Madras Section',
        ],
        aboutChapter: 'The IEEE MTT-S Student Branch Chapter at SRM Institute of Science and Technology was established to cultivate technical expertise, research orientation, innovation, and professional development among students in the areas of microwave theory and high-frequency technologies.',
        vision: 'To become a leading IEEE student chapter recognized for technical excellence, impactful activities, industry engagement, and contributions to the advancement of high-frequency technologies.',
        mission: 'To empower students with technical knowledge, research opportunities, and professional skills in microwave and RF engineering while fostering innovation and collaboration.',
        objectives: [
            'Promote learning in RF, microwave, and antenna technologies',
            'Encourage student research and publications',
            'Provide exposure to emerging technologies such as 5G/6G, radar, IoT',
            'Facilitate interaction with industry professionals',
            'Organize technical workshops and seminars',
            'Develop leadership and teamwork skills',
        ],
        focusAreas: [
            'Microwave Engineering',
            'RF Systems',
            'Antenna Design',
            'Millimeter-Wave Technologies',
            'Wireless Communication',
            'Radar Systems',
            'Satellite Communication',
            'Electromagnetics',
            'Biomedical RF Applications',
            'Wireless Power Transfer',
        ],
        memberBenefits: [
            { _key: 'b1', icon: '🌐', title: 'Global Network', description: 'Access to IEEE\'s worldwide community of engineers and researchers.' },
            { _key: 'b2', icon: '📚', title: 'Technical Resources', description: 'IEEE Xplore, journals, conferences, and educational materials.' },
            { _key: 'b3', icon: '🎓', title: 'Professional Development', description: 'Workshops, certifications, and leadership opportunities.' },
            { _key: 'b4', icon: '🤝', title: 'Industry Connections', description: 'Networking with professionals and potential employers.' },
        ],
    });

    // 5. Event: Inauguration
    console.log('📅 Creating Inauguration Event...');
    await client.createOrReplace({
        _id: 'event-inauguration',
        _type: 'event',
        title: 'Inauguration of IEEE MTT-S SBC',
        date: '2026-01-27',
        venue: 'MBA Seminar Hall, SRM IST',
        description: 'The official inauguration ceremony of the IEEE Microwave Theory and Technology Society Student Branch Chapter at SRM Institute of Science and Technology.',
        status: 'past',
    });

    console.log('✅ Seed complete! All data has been added to Sanity.');
}

seed().catch(console.error);
