import { GatsbyConfig } from 'gatsby';
import { config } from 'dotenv';

config({ path: `.env` });

const siteUrl = `https://signature-compta-plan.netlify.app`;

export default {
  siteMetadata: {
    title: `Signature Compta Plan`,
    description: `Signature Compta Plan.`,
    author: `@flaves`,
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sitemap`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-opeah`,
        short_name: `opeah`,
        start_url: `/`,
        background_color: `#0F111A`,
        theme_color: `#0F111A`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`default`, `es2015`, `es2016`, `es2017`, `es2018`],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', disallow: '/' }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `n7jonmrvv2j0`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
} satisfies GatsbyConfig;
