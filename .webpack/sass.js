const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev =
  process.env.WEBPACK_SERVE || process.env.NODE_ENV !== "production";

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          isDev ? "vue-style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // style-loader > css-loader > postcss-loader > sass-loader
          isDev ? "vue-style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 3,
            },
          },
          "postcss-loader",
          // The typical use case is resolve-url-loader between sass-loader and css-loader.
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              additionalData: `
                  @import "@/scss/variables.scss";
              `,
              sassOptions: {
                quietDeps: ["node_modules/bootstrap/**/*.scss"],
              },
            },
          },
        ],
      },
    ],
  },
};
