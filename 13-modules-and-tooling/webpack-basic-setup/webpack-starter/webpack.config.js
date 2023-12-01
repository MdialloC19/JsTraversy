const path=require('path');
const HTMLWebpackPlugin=require('html-webpack-plugin');

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
                use:['style-loader', 'css-loader'],
            },
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            title:'webpack App',
            filename: 'index.html',
            template: './src/index.html',
        })
    ]
}