const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Paulo Moreno', // Navigation and Site Title
  siteTitleAlt: 'Paulo Moreno', // Alternative Site title for SEO
  siteUrl: 'https://dev.paulomoreno.me', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/images/avatar.jpeg', // Used for SEO and manifest
  siteDescription: 'Personal portfolio',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@vdevingator', // Twitter Username
  // ogSiteName: 'paulomoreno', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
