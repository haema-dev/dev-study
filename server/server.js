const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');

const app = express();
const compiler = webpack(config);

const PORT = 3000;

// Use webpack-dev-middleware
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

// 모든 요청을 index.html로 포워딩
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
