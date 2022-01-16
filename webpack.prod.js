const { mergeWithRules } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');

module.exports = mergeWithRules({
  output: 'prepend',
  module: {
    rules: {
      test: 'match',
      use: 'prepend'
    },
  },
})(common, {
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
    publicPath: '/practical-react-shop/'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin() 
  ]
});