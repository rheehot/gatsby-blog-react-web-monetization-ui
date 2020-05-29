module.exports = {
  plugins: [
    // DOES NOT WORK
    // {
    //   resolve: `gatsby-plugin-web-monetization`,
    //   options: {
    //     paymentPointer: "$ilp.uphold.com/2PPi8NqfxD2b",
    //   },
    // },
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `@mdarrik/gatsby-theme-soundboard`,
      options: {
        soundPath: "content/sounds",
        metadataPath: "content/sounds",
        basePath: "/sounds",
      },
    },
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
