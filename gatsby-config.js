module.exports = {
  siteMetadata: {
    title: `ChericksEats`,
    siteUrl: `https://www.cherickseats.com`
  },
  plugins: [
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`
        },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://www.cherickseats.com`,
        sitemap: `https://www.cherickseats.com/sitemap-index.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ]
};
