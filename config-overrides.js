const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@routes': path.resolve(__dirname, 'src', 'routes'),
      '@shared/*': path.resolve(__dirname, 'src', 'shared'),
      '@shared/styles': path.resolve(__dirname, 'src', 'shared', 'styles'),
    },
  };

  return config;
};
