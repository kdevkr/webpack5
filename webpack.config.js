const path = require("path");
const { merge } = require("webpack-merge");
module.exports = (env, argv) => {
  if (env.debug) {
    console.log("env:", env);
    console.log("argv:", argv);
  }
  const isDev = process.env.NODE_ENV !== "production";
  const config = {
    output: {
      filename: isDev ? "[name].js" : "[name].[contenthash].js",
      clean: true,
    },
    resolve: {
      extensions: [".js"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
  return merge(require(path.resolve(__dirname, ".webpack/vue")), config);
};
