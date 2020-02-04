const path = require('path');
const HtmlwebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => ({
  entry: {
    app: './src/client/index.tsx'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    index: 'index.html',
    contentBase: path.resolve(`${__dirname}./dist`),
    port: 9000,
    open: true,
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlwebPackPlugin({
      template: './src/client/index.html',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin()
  ]
});
