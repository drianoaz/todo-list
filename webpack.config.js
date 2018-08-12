const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');

const copyFiles = [{ from: './src/index.html', to: './' }];

module.exports = env => {
  return {
    entry: {
      app: './src/js/app.js',
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
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            'postcss-loader',
          ],
        },
        {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.WEBPACK_MODE': JSON.stringify(process.env.WEBPACK_MODE),
      }),
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        hash: true,
        template: './src/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'css/style.[contenthash].css',
      }),
      new CopyWebpackPlugin(copyFiles),
    ],
  };
};
