const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const copyFiles = [{ from: './src/index.html', to: './' }];

const baseWebpack = {
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
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&publicPath=../&name=fonts/[hash].[ext]',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream&publicPath=../&name=fonts/[hash].[ext]',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?publicPath=../&name=fonts/[hash].[ext]',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml&publicPath=../&name=fonts/[hash].[ext]',
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
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true
      },
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.[contenthash].css',
    }),
    new CopyWebpackPlugin(copyFiles),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
  ],
};

const prodStart = () => {
  baseWebpack.optimization = {
    minimizer: [ new UglifyJsPlugin() ],
  };
};

const devStart = () => {
  baseWebpack.devServer = {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true,
    port: 9000
  };
};

module.exports = (env, options) => {
  if (options.mode === 'production') {
    prodStart();
  }

  if (options.mode === 'development') {
    devStart();
  }

  return baseWebpack;
};
