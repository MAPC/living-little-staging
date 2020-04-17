module.exports = {
  pathPrefix: '/living-little-staging',
  siteMetadata: {
    title: 'Living Little Staging',
    description: 'Staging site for MAPC\'s Living Little toolkit',
    author: '@MAPCMetroBoston',
  },
  plugins: [
    'gatsby-plugin-anchor-links',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Living Little',
        start_url: '/',
        display: 'standalone',
        icon: 'src/images/MAPC-228.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
