const path = require("path");
const nextEnv = require("next-env");

const withNextEnv = nextEnv();

module.exports = withNextEnv({
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
});
