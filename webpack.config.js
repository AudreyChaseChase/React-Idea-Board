'use strict';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')
const nodeModulesPath = path.resolve(__dirname, "node_modules")
const srcPath = path.join(__dirname, 'src')

module.exports = {
    entry: './src/index.js',
    output: {  
        filename: 'bundle.js'
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: nodeModulesPath,
            use: {
                loader: "babel-loader"
            },
            include: srcPath
        },  {
            test: /\.(scss|css)$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                  { loader: 'css-loader' },
                  { loader: 'sass-loader' },
                ]
            }),
            include: [srcPath, nodeModulesPath]
        }, {
            test: /\.(ttf|woff|woff2|eot|svg|otf|gif|png|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        }
      ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'build.scss', allChunks: true}),
    ]
};

