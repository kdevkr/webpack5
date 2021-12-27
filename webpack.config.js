const pkg = require("./package.json");
const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  if (env.debug) {
    console.log("env:", env);
    console.log("argv:", argv);
  }
  const isDev =
    process.env.WEBPACK_SERVE || process.env.NODE_ENV !== "production";
  const config = {
    mode: isDev ? "development" : "production",
    output: {
      filename: isDev ? "[name].js" : `[name].${pkg.version}.[contenthash].js`,
      clean: true,
    },
    resolve: {
      extensions: [".js"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/templates/index.ejs",
        filename: "index.html",
        inject: false,
      }),
    ],
  };
  if (!isDev) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: `[name].${pkg.version}.[contenthash].css`,
      }),
    );
  }
  return merge(
    require(path.resolve(__dirname, ".webpack/vue")),
    require(path.resolve(__dirname, ".webpack/sass")),
    require(path.resolve(__dirname, ".webpack/eslint")),
    require(path.resolve(__dirname, ".webpack/babel")),
    require(path.resolve(__dirname, ".webpack/asset")),
    config,
  );
};
