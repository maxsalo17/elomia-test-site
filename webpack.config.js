const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { mainModule } = require('process');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "main.js"
    },
    devServer:{
        host: 'localhost',
        port: 3000,
        stats: 'errors-only',
        open: true
    },
    module:{
        rules: [
            {
                test: /\.pug/,
                use: ['pug-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/pug/index.pug"
        })
    ]
}