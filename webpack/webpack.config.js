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
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        // instead of "file-loader" in Webpack4
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        // instead of "url-loader" in Webpack4
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
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
      template: path.resolve(__dirname, "..", "./public/index.html"),
    }),
  ],
};
