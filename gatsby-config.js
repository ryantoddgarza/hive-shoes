module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'json',
        path: `${__dirname}/src/resources/json`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: `${__dirname}/src/resources/markdown`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
    'gatsby-plugin-sass',
  ],
};
