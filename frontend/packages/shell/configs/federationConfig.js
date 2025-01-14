const { dependencies } = require('../package.json');

const federationConfig = ({ RIDE, APP2 }) => {
  return {
    name: 'Host',
    filename: 'remoteEntry.js',

    remotes: {
      ride: `ride@${RIDE}/remoteEntry.js`,
      app2: `app2@${APP2}/remoteEntry.js`,
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
};

module.exports = federationConfig;
