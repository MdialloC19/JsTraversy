const path=require('path');
const HTMLWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const webpack=require('')

module.exports={
    mode: 'development',
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test:/\.js$/,
                exclude: /node_modumes/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                    }
                }
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            title:'webpack App',
            filename: 'index.html',
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
    devServer: {
        static:{
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open:true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    }
    
}