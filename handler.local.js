'use strict'
const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => res.send('Hello world!'))

app.get('/api/info', (req, res) => {
  res.send({ application: 'sample-app', version: '1.0' })
})

app.post('/api/v1/getback', (req, res) => {
  res.send({ ...req.body })
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server is listening on port ${port}.`))

module.exports = app
