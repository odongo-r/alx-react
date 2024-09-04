const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
},
devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
},
module: {
    rules: [
        {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
    },
    {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader', 'image-webpack-loader'],
    },
    ],
},
plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
],
};
