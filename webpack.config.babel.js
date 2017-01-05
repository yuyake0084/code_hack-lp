'use strict';

import path from 'path';
import webpack from 'webpack';
import precss from 'precss';
import autoprefixer from 'autoprefixer';

const env = process.env.NODE_ENV;

const config = {
  module: {
    entry: './main.js',
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    loaders: [
      {
        test: /\.scss$/,
        loader: [
          'style',
          'css',
          'postcss?parser=sugarss'
        ]
      }
    ]
  },
  postcss() {
    return [autoprefixer, precss];
  }
};

module.exports = config;