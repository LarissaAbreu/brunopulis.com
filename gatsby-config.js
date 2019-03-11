module.exports = {
  siteMetadata: {
    title: "Bruno Pulis - Frontend Developer",
    description: "Front-end developer",
    author: "@brunopulis",
    siteUrl: "https://brunopulis.com",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },

    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/img/favicon.png",
      },
    },
    "gatsby-plugin-netlify",
  ],
}
