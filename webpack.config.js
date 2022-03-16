const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        addClassToElement: './src/addClassToElement.js',
        appendMultiple: './src/appendMultiple.js',
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};