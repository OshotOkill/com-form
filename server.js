const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')

const express = require('express')
const app = express()
const port = 3000
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

app.listen(port, (err) => {
  err ? console.log(err) : console.log('listening port 3000')
})

