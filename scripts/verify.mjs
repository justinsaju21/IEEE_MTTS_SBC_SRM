// Verify Sanity connection
import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 's5zhp3gc',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-01-01',
});

async function verify() {
    console.log('🔍 Verifying Sanity connection...\n');

    // Check Office Bearers
    const bearers = await client.fetch('*[_type == "officeBearer"]{name, role}');
    console.log('✅ Office Bearers:', bearers.length, 'found');
    bearers.forEach(b => console.log('   -', b.name, '|', b.role));

    // Check Site Settings
    const settings = await client.fetch('*[_type == "siteSettings"][0]');
    console.log('\n✅ Site Settings:', settings ? 'Found' : 'Not found');
    if (settings) {
        console.log('   - Email:', settings.email);
        console.log('   - LinkedIn:', settings.linkedinUrl ? 'Set' : 'Not set');
    }

    // Check Events
    const events = await client.fetch('*[_type == "event"]');
    console.log('\n✅ Events:', events.length, 'found');
    events.forEach(e => console.log('   -', e.title, '|', e.date));

    // Check Home Page
    const home = await client.fetch('*[_type == "homePage"][0]');
    console.log('\n✅ Home Page:', home ? 'Configured' : 'Not found');

    // Check About Page
    const about = await client.fetch('*[_type == "aboutPage"][0]');
    console.log('✅ About Page:', about ? 'Configured' : 'Not found');

    console.log('\n🎉 All connections verified!');
}

verify().catch(console.error);
