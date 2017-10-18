var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: {
    'main': __dirname + '/app/main',
    'app': __dirname + '/app/index.jsx'
  },

  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },

  // Jquery imported into global context from main (using script-loader)
  externals: {
    // require("jquery") is external and available on the global var jQuery
    "jquery": "jQuery",
  },

  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

    //global jquery is provided to any webpack modules
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jquery': 'jquery',
      'window.jQuery': 'jquery',
    }),

    //copy patternfly assets
    new CopyWebpackPlugin([
      {
        from: { glob: './node_modules/patternfly/dist/img/*.*'},
        to: './img',
        flatten: true
      },
      {
        from: { glob: './node_modules/patternfly/dist/fonts/*.*'},
        to: './fonts',
        flatten: true
      },
      {
        from: { glob: './node_modules/patternfly/dist/css/*.*'},
        to: './css',
        flatten: true
      },
      {
        from: { glob: './node_modules/react-bootstrap-table/css/*.*'},
        to: './css',
        flatten: true
      },
      {
        from: { glob: './app/main.css'},
        to: './css',
        flatten: true
      }
    ])
  ],

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        query: {
          presets: ["react", "es2015", "stage-2"]
        },
      },
      {
        loader: 'eslint-loader',
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        query: {
          presets: ["react", "es2015", "stage-2"]
        }
      },
      {
        test: /\.exec\.js$/,
        use: [ 'script-loader' ]
      }
    ],
  },
};
