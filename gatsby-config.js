module.exports = {
  siteMetadata: {
    title: `ChericksEats`,
    siteUrl: `https://www.yourdomain.tld`
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
      `gatsby-plugin-styled-components`
]
};
