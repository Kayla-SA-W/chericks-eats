import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `ChericksEats`,
    siteUrl: `https://www.yourdomain.tld`
  },
  pathPrefix: "/chericks-eats",
  plugins: [
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`
        },
    },
    {
      resolve: 'gatsby-plugin-tslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|cache|public)/
      }
    },
      `gatsby-plugin-image`,
      `gatsby-transformer-sharp`, 
      `gatsby-plugin-sharp`,
      `gatsby-plugin-styled-components`
]
};

export default config;
