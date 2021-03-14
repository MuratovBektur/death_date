const path = require("path");
module.exports = {
  devServer: {
    host: "localhost",
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@c": path.resolve(__dirname, "./src/components"),
        "@img": path.resolve(__dirname, "./src/assets/img"),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
};
