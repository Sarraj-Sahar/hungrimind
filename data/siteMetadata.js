const siteMetadata = {
  title: 'hungrimind',
  author: 'Tadas Petra',
  headerTitle: 'hungrimind',
  description: 'Learn how to build in the physical and digital world.',
  language: 'en-us',
  theme: 'light', // system, dark or light
  siteUrl: 'https://hungrimind.com',
  //siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'tadas@tadaspetra.com',
  github: 'https://github.com/tadaspetra',
  twitter: 'https://twitter.com/tadaspetra',
  youtube: 'https://youtube.com/tadaspetra',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: 'hungrimind.com', // e.g. tailwind-nextjs-starter-blog.vercel.app
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'revue',
  },
}

module.exports = siteMetadata
