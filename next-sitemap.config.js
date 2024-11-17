/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://eathstartup.com', // Votre URL principale
  generateRobotsTxt: true,          // Génère automatiquement un fichier robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/', // Permet l'accès à toutes les pages
      },
    ],
  },
};
