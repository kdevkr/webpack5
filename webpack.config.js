module.exports = (env, argv) => {
  if (env.debug) {
    console.log("env:", env);
    console.log("argv:", argv);
  }
  const isDev = process.env.NODE_ENV !== "production";
  return {
    output: {
      filename: isDev ? "[name].js" : "[name].[contenthash].js",
      clean: true,
    },
  };
};
