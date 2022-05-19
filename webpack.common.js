const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css|\.s([ca])ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
            ignore: [path.resolve(__dirname, 'src/public/images/heros/*')],
          },
        },
      ],
    }),
    new WebpackPwaManifest({
      name: 'Rubickone',
      short_name: 'Rubickone',
      description: 'Rubickone is a web application for search restaurants in Indonesia country',
      start_url: '/index.html',
      filename: 'manifest.json',
      display: 'standalone',
      background_color: '#ffffff',
      orientation: 'portrait',
      theme_color: '#2196f3',
      publicPath: '/',
      crossorigin: 'use-credentials',
      icons: [
        {
          src: path.resolve('src/public/images/logo/restaurant.png'),
          type: 'image/png',
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('images/icons'),
          purpose: 'maskable',
        },
        {
          src: path.resolve('src/public/images/logo/restaurant.png'),
          type: 'image/png',
          size: '144x144',
          destination: path.join('images/icons'),
          purpose: 'any',
        },
      ],
    }),
    new InjectManifest({
      swSrc: './src/scripts/sw.js',
      swDest: 'sw.js',
      exclude: ['/c', '/j', /.*\.DS_Store/],
    }),
  ],
};
