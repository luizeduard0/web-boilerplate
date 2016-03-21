const webpack = require('webpack')

module.exports = {
  entry: __dirname + '/client',
  output: {
    path: __dirname + '/server/public',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.API_ROOT': JSON.stringify(process.env.API_ROOT || '')
    })
  ]
}
