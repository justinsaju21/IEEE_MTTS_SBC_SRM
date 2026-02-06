import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
    projectId: 's5zhp3gc',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}

// Queries
export const queries = {
    // Site Settings
    siteSettings: `*[_type == "siteSettings"][0]`,

    // Home Page
    homePage: `*[_type == "homePage"][0]`,

    // About Page
    aboutPage: `*[_type == "aboutPage"][0]`,

    // Office Bearers (active only, ordered)
    officeBearers: `*[_type == "officeBearer" && isActive == true] | order(order asc) {
    _id,
    name,
    role,
    department,
    bio,
    photo,
    type,
    order
  }`,

    // Events
    allEvents: `*[_type == "event"] | order(date desc) {
    _id,
    title,
    date,
    venue,
    description,
    coverImage,
    status,
    registrationLink
  }`,

    upcomingEvents: `*[_type == "event" && status == "upcoming"] | order(date asc)`,
    pastEvents: `*[_type == "event" && status == "past"] | order(date desc)`,

    // Gallery
    galleryImages: `*[_type == "galleryImage"] | order(dateTaken desc) {
    _id,
    image,
    caption,
    category,
    dateTaken,
    "eventTitle": event->title
  }`,

    // Navigation
    navigation: `*[_type == "navigation"][0]`,

    // Footer
    footer: `*[_type == "footer"][0]`,
};

// Fetch functions
export async function getSiteSettings() {
    return client.fetch(queries.siteSettings);
}

export async function getHomePage() {
    return client.fetch(queries.homePage);
}

export async function getAboutPage() {
    return client.fetch(queries.aboutPage);
}

export async function getOfficeBearers() {
    return client.fetch(queries.officeBearers);
}

export async function getAllEvents() {
    return client.fetch(queries.allEvents);
}

export async function getGalleryImages() {
    return client.fetch(queries.galleryImages);
}

export async function getNavigation() {
    return client.fetch(queries.navigation);
}

export async function getFooter() {
    return client.fetch(queries.footer);
}
