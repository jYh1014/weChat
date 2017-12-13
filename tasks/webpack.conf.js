const {resolve} = require('path')
const r = url => resolve(__dirname,url)
const config = require('../config')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSass = new ExtractTextPlugin({
    filename: '[name].wxss'
})
module.exports = {
    devtool: false,
    output: {
        path: config.assetsPath,
        filename: '[name].js'
    },
    resolve: {
        alias: {
            utils: r('../utils/util')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: [
                    'latest'
                ]
            }
        },
        {
            test: /\.wxml$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                    dist: './mina',
                    name: `[name].${env.target === 'Alipay' ? 'axml' : 'wxml'}`,
                },
              },
              {
                  loader:'wxml-loader',
                  options: {
                    dist: './mina',
                  }
                },
            ],
          },
        {
            test: /\.sass$/,
            use: extractSass.extract({
                use: [{
                    loader: 'css-loader'
                },{
                    loader: 'postcss-loader',
                    options: {
                        plugins: (loader) => [
                            require('autoprefixer')({
                                browsers: [
                                    'last 2 versions'
                                ]
                            })
                        ]
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        // indentedSyntax: false
                    }
                }
                ],
                fallback: 'style-loader'
            })
        },
        {
            test: /\.mina$/,
            loader: 'wechat-mina-loader',
            options: {
                dist: './mina'
            }
        },
        
        ]
    },
    plugins: [
        extractSass,
        new CopyWebpackPlugin([
            {
                from: {
                    glob: 'pages/**/*/json',
                    to: ''
                }
            },{
                from: 'static',
                to: 'static'
            }
        ]),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false
        }),
        new ProgressBarPlugin()
    ]
}