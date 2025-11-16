// Load localStorage polyfill before anything else
// This must run before any code tries to access global.localStorage
require('./setup-localStorage.js');

// Simple config override - just return the config as-is since we've already mocked localStorage
module.exports = function overrideConfig(config, env) {
  return config;
};
