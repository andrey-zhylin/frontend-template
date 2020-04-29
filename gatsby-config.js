module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-graphql-codegen',
    {
      resolve: 'gatsby-source-google-spreadsheet',
      options: {
        spreadsheetId: '1etQoqC8FWvHQbP5V5e4_2WAF2bq1eBz7pTD1f7ouc4M',
        mapNode: node => node,
        credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS)
      }
    }
  ]
};
