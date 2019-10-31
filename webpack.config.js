const path = require('path')
const webpack = require('webpack')
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'vue-picker.js',
    library: 'vue-picker',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
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
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
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
  },
  plugins: [
    // new ExtractTextPlugin("style.css")
  ],
  resolve: {
    extensions: ['*', '.js', '.vue', '.json']
  },
  performance: {
    hints: false
  }
}
