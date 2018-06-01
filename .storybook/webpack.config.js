const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // For example, add typescript loader:
  defaultConfig.resolve.modules.push("../src/");
  defaultConfig.resolve.modules.push("../node_modules");

  return defaultConfig;
};
