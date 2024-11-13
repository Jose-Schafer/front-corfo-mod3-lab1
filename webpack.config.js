'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'img/[name][ext]'  // Ensure images go to 'img/' in 'dist'
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'equipo_medico.html',
      template: 'src/equipo_medico.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'contacto.html',
      template: 'src/contacto.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'  // Injects CSS to the DOM
          },
          {
            loader: 'css-loader'  // Resolves `@import` and `url()`
          },
          {
            loader: 'postcss-loader',  // Processes CSS with PostCSS
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            }
          },
          {
            loader: 'sass-loader',  // Compiles SASS/SCSS to CSS
            options: {
              sassOptions: {
                silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
              }
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|webp|pdf|ico)$/,  // Handles various image formats
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',  // Outputs images to 'img/' folder in 'dist'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ]
  }
}
