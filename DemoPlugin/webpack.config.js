const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './node_modules/aurelia-typescript-plugin/dist/amd/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
    new CopyWebpackPlugin([
        { from: './node_modules/aurelia-typescript-plugin/dist/amd/locales', to: '../locales' },
      ]),
  ]
};
