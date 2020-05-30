module.exports = {
  plugins: [
    {
      // web-monetization plugin only runs on production env
      resolve: `gatsby-plugin-web-monetization`,
      options: {
        paymentPointer: "$ilp.uphold.com/2PPi8NqfxD2b",
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    `gatsby-plugin-react-helmet`,
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Web Monetization Playground`,
    author: `@ekafyi`,
    description: `Lorem ipsum dolor sit amet`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
}
