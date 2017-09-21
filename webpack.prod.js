const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const gitRevisionPlugin = new GitRevisionPlugin();
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('lib.[contenthash].css');
const extractLESS = new ExtractTextPlugin('main.[contenthash].css');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            favicon: './public/favicon.ico',
            template: './src/index.ejs',
            // https://stackoverflow.com/questions/36796319/webpack-with-commonschunkplugin-results-with-wrong-bundle-order-in-html-file
            chunksSortMode: 'dependency',
            window: {
                'reactStarterKit': {
                    COMMIT: gitRevisionPlugin.commithash()
                }
            }
        }),
        new GitRevisionPlugin({
            commithashCommand: 'rev-parse --short HEAD'
        }),
        extractCSS,
        extractLESS,
        // chunk of all vendor modules that are located in node_modules
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        // chunk containing webpack's runtime
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime',
            minChunks: Infinity
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|eot|ttf|woff|woff2)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.less$/,
                use: extractLESS.extract({
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|dist)/,
                use: [
                    {loader: 'babel-loader'},
                    {loader: 'eslint-loader'}
                ]
            }
        ]
    }
};
