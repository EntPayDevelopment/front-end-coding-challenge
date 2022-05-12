const { alias } = require("react-app-rewire-alias");

module.exports = {
  webpack: (config, env) => {
    alias({
      // define these based on your needs
      "@assets": "./public/assets",
      "@logo": "./public/logo",
      "@api": "./api",
    })(config);

    return config;
  },

  // ...
};
