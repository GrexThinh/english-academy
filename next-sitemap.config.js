/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://anhnguvictoria.vercel.app/',
  generateRobotsTxt: true, 
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/404', '/admin'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/admin', '/api'] },
    ],
  },
};
