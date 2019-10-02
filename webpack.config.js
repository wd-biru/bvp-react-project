const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js"
  },
  devServer: {
    host: "localhost",
    inline: true,
    port: 8088,
    contentBase: "./public",
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "My App",
      template: "./public/index.html"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /public/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader?limit=8192"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};
