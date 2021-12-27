module.exports = {
  output: {
    assetModuleFilename: "asset/[name].[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: "asset",
        parser: {
          // Use asset/resource or asset/inline by module size.
          dataUrlCondition: {
            maxSize: 1024,
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 1024,
          },
        },
      },
    ],
  },
};
