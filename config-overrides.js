const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@logo': './public/logo',
    "@api": "./api",
  })(config);

  return config;
};
