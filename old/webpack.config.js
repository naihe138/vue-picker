const path = require('path')
const webpack = require('webpack')
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './dist/index.js',
  output: {
    path: path.resolve(__dirname, './lib'),
    publicPath: '/lib/',
    filename: 'vue-picker.js',
    library: 'vue-picker',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /node_modules/
      },
    ]
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        parallel: true,
        sourceMap: false,
        terserOptions: {
          compress: {
            inline: 1, // https://github.com/mishoo/UglifyJS2/issues/2842
            warnings: false,
            drop_console: true,
            drop_debugger: true
          },
          output: {
            comments: false
          }
        }
      })
    ]
  }
}
