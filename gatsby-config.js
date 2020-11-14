require('dotenv').config({
  path: `.env`,
});

const config = {
  siteUrl: `https://flav.es`,
};

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Flaves`,
    description: `Gatsby starter for personal project.`,
    author: `@flaves`,
    siteUrl: config.siteUrl,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `TO_REPLACE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-opeah`,
        short_name: `opeah`,
        start_url: `/`,
        background_color: `#0F111A`,
        theme_color: `#0F111A`,
        display: `minimal-ui`,
        icon: `src/images/gatsby.png`,
      },
    },
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`default`, `es2015`, `es2016`, `es2017`, `es2018`],
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: config.siteUrl,
        sitemap: `${config.siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
