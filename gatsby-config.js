module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "codedragons-site-bucket",
      },
    },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "G-HYMEN265KGD",
        },
    },
  ]
};
