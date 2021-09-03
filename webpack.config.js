const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",

  entry: {
    main: ["./src/component/index.ts"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    sourceMapFilename: "index.js.map",
    publicPath: "/dist/",
  },
  plugins: [new HtmlWebpackPlugin()],


  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: [".ts", ".js"],
  },
  // watch: true,
  module: {
    rules: [
      
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.ts?$/, loader: "ts-loader" },
      
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    compress: true,
    hot: true,
    watchContentBase: true,
    port: 9000,
    open: true,
  },
};
