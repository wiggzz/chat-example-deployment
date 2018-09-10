const path = require('path');
const nodeExternals = require('webpack-node-externals')

const rootConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { 'targets': { 'node': 'current' }}],
              '@babel/preset-react']
          }
        }
      }
    ]
  }
}

const serverConfig = Object.assign({}, rootConfig, {
  entry: { server: './server.js' },
  target: 'node',
  externals: [nodeExternals()],
});

const clientConfig = Object.assign({}, rootConfig, {
  entry: { index: './src/index.js' }
});

module.exports = [serverConfig, clientConfig];