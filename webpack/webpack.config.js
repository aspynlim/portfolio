// const { merge } = require('webpack-merge');
// const commonConfig = require('./webpack.common.js');

// module.exports = (envVars) => {
//   const { env } = envVars;
//   const envConfig = require(`./webpack.${env}.js`);
//   const config = merge(commonConfig, envConfig);
//   return config;
// }

// To create an absolute path
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "..", "./build"),
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
  ],
};
