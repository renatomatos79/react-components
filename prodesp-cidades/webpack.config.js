var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        'index': ['./src/index.jsx'],
        'estado': ['./src/cidade.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    module : {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query:
            {
                presets:['es2015', 'react']
            }
        }]
    }
};