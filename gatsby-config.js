let contentfulConfig;

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) {
  // throw new Error(
  //   'Config file not exists'
  // );
}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken:
    process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  );
}

module.exports = {
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-graphql-codegen'
  ]
};
