const path = require('path');

const distDir = path.resolve(__dirname,'dist');


module.exports = {

  entry : './app/index.js',
    output: {
        path: distDir,
        filename: 'bundle.js'

    },
    module: {
      loaders: [{
          exclude: '/node_modules/',
          loader: 'babel-loader'
      }]
    },
    devServer: {
      contentBase: distDir
    }


};