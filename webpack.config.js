const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    devServer: {
      host: 'localhost',
      inline: true,
      port: 8088,
      contentBase: './public',
      hot: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
        title: 'My App',
        template: './public/index.html'
     })
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, /public/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
              test: /\.(png|jpg)$/,
              loader: 'url-loader?limit=8192'
            },
            {
              test: /\.css$/,
              loader: 'style-loader!css-loader'
            }
        ]
    }
 };
// export default {
//     rules: [
//         {
//             test: /\.(js|jsx)$/,
//             exclude: /node_modules/,
//             use: {
//                 loader: 'babel-loader'
//             }
//         },
//         {
//           test: /\.jsx?$/,
//           exclude: /(node_modules)/,
//           loader: 'babel-loader'
//         },
//         {
//           test: /\.(js|jsx)$/,
//           loader: 'babel-loader',
//           query: {
//             cacheDirectory: true,
//             plugins: ['transform-runtime'],
//             presets: ['es2015', 'react', 'stage-0']
//           }
//         },
//         {
//           test: /\.json$/,
//           loader: 'json-loader'
//         },
//         {
//           test: /\.css$/,
//           loader: 'style-loader!css-loader'
//         },
//         {
//           test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
//           loader: 'url-loader?limit=10000&mimetype=application/font-woff'
//         }, {
//             test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
//             loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
//           },
//           {
//             test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
//             loader: 'file-loader'
//           },
//           {
//             test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
//             loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
//           },
//           {
//             test: /\.(png|jpg)$/,
//             loader: 'url-loader?limit=8192'
//           },
//           {
//             test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
//             loader: 'url-loader?limit=10000'
//           },
//           {
//             test: /\.scss$/,
//             loaders: [
//               'style-loader',
//               'css-loader?sourceMap&-minimize',
//               'postcss-loader',
//               'sass-loader?sourceMap'
//             ]
//           }
//     ]
// };