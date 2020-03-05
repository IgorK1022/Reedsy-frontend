const path = require('path');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/'
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       "~": path.resolve(__dirname, 'src/')
  //     }
  //   }
  // },
  // outputDir: path.resolve(__dirname, '../server/public'),
  // devServer: {
  //     proxy: {
  //         '/api': {
  //             target: 'http://localhost:5000'
  //         }
  //     }
  // }
}