'use strict'

const request = require('request')
const dotenv = require('dotenv')
dotenv.config()

const webhook = (event, context, cb) => {
  const BASE_URL = `https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`

  const body = JSON.parse(event.body)
  const { message } = body
  const { id } = message.chat

  request.post(BASE_URL).form({ text: message.text, chat_id: id })

  const res = {
    statusCode: 200,
    body: JSON.stringify({
      input: event
    })
  }

  return cb(null, res)
}

module.exports = { webhook }
