const express = require('express')
const app = express()

const { setupApp } = require('./setup')

const NODE_ENV = process.env.NODE_ENV

if (NODE_ENV !== 'prd') {
  require('dotenv').config({
    path: `.env.${NODE_ENV}`
  })
}

setupApp(app)

module.exports = {
  app
}
