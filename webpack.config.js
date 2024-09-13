const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const portfinder = require('portfinder')
const DEFAULT_PORT = 3000;


const webpackConfig = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean the output directory before emit
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: DEFAULT_PORT,
    open: true, // Open the browser after server has been started
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = DEFAULT_PORT
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      process.env.PORT = port
      webpackConfig.devServer.port = port
      resolve(webpackConfig)
    }
  })
})
