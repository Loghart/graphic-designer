module.exports = {
  siteMetadata: {
    title: "graphic-designer",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "47bd9506c134bdf7856441c19011fb",
      },
    },
    "gatsby-plugin-sass",
  ],
};
