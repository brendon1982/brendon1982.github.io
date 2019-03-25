const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Brendon Page', // Navigation and Site Title
  siteTitleAlt: 'Brendon Page', // Alternative Site title for SEO
  siteTitleShort: 'BP', // short_name for manifest
  siteHeadline: 'TDD, community, teaching, learning', // Headline for schema.org JSONLD
  siteUrl: 'https://brendonpage.dev', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'A place for stuff',
  author: 'Brendon Page', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@brendonpaginate', // Twitter Username
  ogSiteName: 'brendonpage', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-136820503-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
