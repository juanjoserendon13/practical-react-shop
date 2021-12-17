const { mergeWithRules } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = mergeWithRules({
  module: {
    rules: {
      test: 'match',
      use: 'prepend'
    },
  },
})(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 8080,
    static: './dist'
  }
});