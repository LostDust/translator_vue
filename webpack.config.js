const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  entry: {
    app: `./src/app.js`
  },
  output: {
    filename: "[name].js",
    path: path.resolve(`dist`)
  },
  plugins: [
    new HTMLPlugin({
      template: `./src/index.html`,
      filename: "index.html"
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      { test: /\.vue$/, loader: "vue-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
      // { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.(png|jpg|gif|ttf|woff|woff2|eot|svg)$/, use: "url-loader" }
    ]
  }
};
