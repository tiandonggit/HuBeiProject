module.exports = {
  publicPath: "./",
  devServer: {
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: "http://47.95.231.51:6060",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
