const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: './src/Index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
       {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        'css-loader',
        'postcss-loader'       
      ]
    }]
  
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
    new HtmlWebpackPlugin({
      template: "dist/index.html" //source html
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist')
  }
}
