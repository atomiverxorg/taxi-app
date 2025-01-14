const dependencies = require('../package.json').dependencies;
module.exports = {
  name: 'ride',
  filename: 'remoteEntry.js',
  exposes: {
    './Layout': './src/components/Layout',
    './Routers': './src/Routers',
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
