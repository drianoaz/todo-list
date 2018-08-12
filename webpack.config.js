const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const copyFiles = [
  { from: './src/index.html', to: './' }
];


module.exports = env => {
  return {
    entry: {
      app: './src/js/app.js'
    },
    output: {
      filename: 'js/[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.WEBPACK_MODE': JSON.stringify(process.env.WEBPACK_MODE)
      }),
      new CleanWebpackPlugin(['dist']),
      new CopyWebpackPlugin(copyFiles),
    ]
  };
};
