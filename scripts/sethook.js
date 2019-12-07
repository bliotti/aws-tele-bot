'use strict'

const request = require('request')
const dotenv = require('dotenv')
dotenv.config()

const options = {
  url: `https://api.telegram.org/bot${process.env.TOKEN}/setWebhook`,
  headers: {
    'User-Agent': 'application/json'
  },
  form: { url: process.env.ENDPOINT }
}

const cb = (err, httpRes, body) => {
  if (err) {
    return console.error('upload failed:', err)
  }
  console.log('Upload successful!  Server responded with:', body)
}

request(options, cb)
