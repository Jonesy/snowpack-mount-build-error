const path = require('path');

module.exports = {
  extends: '@snowpack/app-scripts-react',
  scripts: {
    'bundle:*': '@snowpack/plugin-webpack',
  },
  plugins: [
    [
      '@snowpack/plugin-webpack',
      {
        sourceMap: true,
      },
    ],
  ],
};
