export default {
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: ['*', '.js', '.json']
  },
  devtool: 'eval-source-map',
  target: 'web',
  module: {
    rules: [{ test: /\.js?$/, exclude: /node_modules/, loaders: ['babel-loader'] }]
  }
};
