var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './vendor.ts',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
 resolve: {
   extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
   fallback: __dirname + '/../../node_modules',
   root: [
     __dirname + '/../../node_modules',
     'node_modules'
   ],
   alias: {		
     '@angular/core$': __dirname + '/../../node_modules/@angular/core',
     'ng2-redux$':__dirname + '/../../src'
     }
  },

  module: {
    loaders: [
      { test: /\.ts$/,  loader: 'awesome-typescript', exclude: /node_modules/ },
    ]
  }
};
