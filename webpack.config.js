module.exports = function(webpackConfig) {
  webpackConfig.babel.plugins.push('antd');

  // Fix ie8 compatibility
  webpackConfig.module.loaders.unshift({
    test: /\.jsx?$/,
    loader: 'es3ify-loader',
  });
  // webpackConfig.plugins.push({
  //   new webpack.HotModuleReplacementPlugin()
  // })
  // module:{
  //   loaders:[{
  //     test:/\.less$/,
  //     loader:"style!css!less"
  //   }]
  // }
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env.NODE_ENV': JSON.stringify('production')
  //   })
  // ]
  return webpackConfig;
};
