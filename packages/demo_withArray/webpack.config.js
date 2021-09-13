const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require("webpack");

module.exports = {
  mode: "development",
  devtool:"inline-source-map",
  
  entry: {
    main: ["./src/users.ts"],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {

    rules: [

      {
        enforce: "pre",
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "css-loader",
      },
    { test: /\.ts?$/, loader: "ts-loader" },
   ],
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    sourceMapFilename: "index.js.map",
    publicPath: "/dist/",
  },
  plugins: [new HtmlWebpackPlugin({
    template:"public/index.html"
  })],

  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    compress: true,
    hot: true,
    watchContentBase: true,
    port: 9000,
    open: true,
  },
};
