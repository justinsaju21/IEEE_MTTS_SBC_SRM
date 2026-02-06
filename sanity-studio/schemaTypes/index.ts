import officeBearer from './officeBearer'
import event from './event'
import galleryImage from './galleryImage'
import siteSettings from './siteSettings'
import homePage from './homePage'
import aboutPage from './aboutPage'
import navigation from './navigation'
import footer from './footer'

export const schemaTypes = [
    // Singleton pages & settings
    siteSettings,
    navigation,
    footer,
    homePage,
    aboutPage,
    // Collections
    officeBearer,
    event,
    galleryImage,
]
