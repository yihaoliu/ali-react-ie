module.exports = {
  devServer: {
    inline: true,
    port: 8888
  },
  entry: './entry.js',
  output: 'bundle.js',
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
};
