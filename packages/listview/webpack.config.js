const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    main: ["./src/app.ts"],
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
