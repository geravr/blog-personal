const path = require("path");
// const nextEnv = require("next-env");

// const withNextEnv = nextEnv();

module.exports = {
  env: {
    API_HOST_CONTAINER: process.env.API_HOST_CONTAINER,
    API_HOST_PUBLIC: process.env.API_HOST_PUBLIC,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  images: {
    domains: [process.env.IMAGES_DOMAIN]
  }
};
