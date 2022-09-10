const path = require('path')

const NODE_ENV = process.env.NODE_ENV
const PORT = process.env.PORT
const nodeExternals = require('webpack-node-externals')

module.exports = {
    name: 'express-server',
    entry: './src/index.ts',
    target: 'node',
    externals: [nodeExternals()],
    node: NODE_ENV,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(ts)$/,
                use: [
                    'ts-loader',
                ]
            }
        ]
    }
}