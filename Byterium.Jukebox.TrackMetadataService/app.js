const bodyParser = require('body-parser')
const express = require('express')

const { requestHandler } = require('./fileProcessing')

const app = express()
app.post('/', bodyParser.json(), requestHandler)
app.listen(3000)
