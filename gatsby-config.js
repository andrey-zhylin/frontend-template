module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-graphql-codegen',
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_URL || 'http://localhost:1337',
        contentTypes: ['block', 'product'],
        queryLimit: 1000
      }
    }
  ]
};
