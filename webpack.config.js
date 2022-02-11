const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const inDevelopment = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined;

const config = {
  entry: ['babel-polyfill', './src/index.js'],
  mode: inDevelopment ? 'development' : 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: ['url-loader?limit=100000']
      }
    ]
  },
  devServer: {
    compress: true,
    inline: true,
    hot: true,
    overlay: true,
    historyApiFallback: true,
    contentBase: './dist'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};

if (inDevelopment) {
  config.devtool = 'eval';
  config.plugins = [
    ...config.plugins,
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config;
