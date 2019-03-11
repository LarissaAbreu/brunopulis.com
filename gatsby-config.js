module.exports = {
  siteMetadata: {
    title: `Bruno Pulis - Frontend Developer`,
    description: `Front-end developer`,
    author: `@brunopulis`,
    siteUrl: `https://brunopulis.com`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
