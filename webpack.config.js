const path = require('path');
const APP_DIR = path.join(__dirname, './frontend');
const BUILD_DIR = path.resolve(__dirname, './frontend/build');

module.exports = {
    mode: 'development',
    entry: {
        main: APP_DIR + '/main.js'
    },
    output: {
        filename: 'bundle.js',
        path: BUILD_DIR
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                // test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg|webp)(\?[a-z0-9=.]+)?$/,
                test: /\.(jpe?g|png|svg|webp)(\?[a-z0-9=.]+)?$/,
                // loader: 'url-loader',
                use: [{
                    // loader: 'url-loader',
                    loader: 'file-loader',
                    options: { 
                        limit: 10000,
                        name: '[name].[ext]'
                    }
                }]
            },
        ]
    }
}