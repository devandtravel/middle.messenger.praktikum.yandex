const express = require('express')
const { env } = require('process')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const DEFAULT_PORT = 3000

app.use(express.static(path.join(__dirname + '/dist')))

const PORT = env.PORT || DEFAULT_PORT

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`)
  console.log('env.PORT', env.PORT)
})
