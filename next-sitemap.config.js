/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://eathstartup.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
