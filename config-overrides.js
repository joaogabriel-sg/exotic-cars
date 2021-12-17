const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@routes': path.resolve(__dirname, 'src', 'routes'),
      '@store': path.resolve(__dirname, 'src', 'store'),
      '@shared': path.resolve(__dirname, 'src', 'shared'),
      '@shared/hooks': path.resolve(__dirname, 'src', 'shared', 'hooks'),
      '@shared/services': path.resolve(__dirname, 'src', 'shared', 'services'),
      '@shared/styles': path.resolve(__dirname, 'src', 'shared', 'styles'),
      '@shared/types': path.resolve(__dirname, 'src', 'shared', 'types'),
    },
  };

  return config;
};
